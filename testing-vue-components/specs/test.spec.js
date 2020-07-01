import { mount, shallowMount } from '@vue/test-utils'
import TestComponent from '@/test.vue'
import List from '@/list.vue'

describe('TestComponent', () => {
  it('should console test component', () => {
    console.log(TestComponent)
  })

  it('should mount component corretly', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        value: 'David Alves'
      }
    })

    // é possível remover o .html() do wrapper no expect
    // pq o snapshotSerializers está configurado no jest.config.js
    expect(wrapper).toMatchSnapshot()
  })
})

describe('ListComponent', () => {
  it('should show list component corretly', () => {
    const wrapper = mount(List)
    const movies = wrapper.vm.marvelMovies
    wrapper.setData({ marvelMovies: [...movies, 'EndGame'] })

    expect(wrapper).toMatchSnapshot()
  })
})
