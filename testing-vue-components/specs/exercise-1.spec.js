import UserList from '@/exercise-1';
import { mount } from '@vue/test-utils';

const mountComponent = propsData => mount(UserList, {
  propsData: {
    ...propsData,
  },
})

const usersMock = () => [
  'David',
  'Fran',
]

describe('UserList', () => {
  it('should list received users', async () => {
    const wrapper = mountComponent()
    expect(wrapper.findAll('li').length).toEqual(0)

    wrapper.setProps({ users: usersMock() })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.users).toEqual(usersMock())
    expect(wrapper.findAll('li').length).toEqual(2)
  })

  it('should filter list', async () => {
    const wrapper = mountComponent({ users: usersMock() })
    const filterInput = wrapper.find('input')

    filterInput.element.value = 'David'
    filterInput.trigger('input')
    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('li').length).toEqual(1)
    expect(wrapper.vm.filteredUsers).toEqual(expect.arrayContaining(['David']))
  })
})
