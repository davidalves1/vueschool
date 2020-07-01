import Temprature from '@/temprature'
import { mount } from '@vue/test-utils'

const mountComponent = propsData => mount(Temprature, {
  propsData: { ...propsData }
})

describe('TemperadureComponent', () => {
  describe('computed', () => {
    it('celsius', () => {
      const wrapper = mountComponent();
      expect(wrapper.vm.celsius).toBe(0)
      wrapper.setData({ degrees: 23 })
      expect(wrapper.vm.celsius).toBe(23)
    })

    it('fahrenheit', () => {
      const wrapper = mountComponent()
      expect(wrapper.vm.fahrenheit).toBe(32)
      wrapper.setData({ degrees: 23 })
      expect(wrapper.vm.fahrenheit).toBe(73.4)
    })
  })

  describe('watcher', () => {
    it('should watch type', async () => {
      const wrapper = mountComponent({ temp: 23 })
      expect(wrapper.vm.degrees).toBe(23)
      expect(wrapper.vm.type).toBe('celsius')

      wrapper.setProps({ temp: '50f' })
      await wrapper.vm.$nextTick()

      expect(wrapper.vm.degrees).toBe(50)
      expect(wrapper.vm.type).toBe('fahrenheit')
    })
    it('should convert to celsius from fahrenheit', async () => {
      const wrapper = mountComponent({ temp: '50f' })
      expect(wrapper.vm.degrees).toBe(50)
      expect(wrapper.vm.type).toBe('fahrenheit')

      wrapper.setProps({ temp: '23c' })
      await wrapper.vm.$nextTick()

      expect(wrapper.vm.degrees).toBe(23)
      expect(wrapper.vm.type).toBe('celsius')
    })
  })
})
