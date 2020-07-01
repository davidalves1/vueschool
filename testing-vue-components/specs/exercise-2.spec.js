import ExerciseForm from '@/exercise-2';
import { mount } from '@vue/test-utils';

const mountComponent = () => mount(ExerciseForm)

describe('ExerciseForm', () => {
  it('should start with empty tasks', () => {
    const wrapper = mountComponent()
    expect(wrapper.findAll('li').length).toEqual(0)
  })

  it('should not add task if newTask is empty', async () => {
    const wrapper = mountComponent()
    const submitButton = wrapper.find('button')

    submitButton.trigger('submit')
    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('li').length).toEqual(0)
  })

  it('should add tasks to list', async () => {
    const wrapper = mountComponent()
    const taskInput = wrapper.find('input')
    const submitButton = wrapper.find('button')

    taskInput.element.value = 'NewTask'
    taskInput.trigger('input')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.newTask).toEqual('NewTask')

    submitButton.trigger('submit')
    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('li').length).toEqual(1)
    expect(wrapper.vm.newTask).toEqual('')
  })

  it('should remove task from list', async () => {
    const wrapper = mountComponent()
    wrapper.setData({ tasks: ['task1', 'task2'] })
    await wrapper.vm.$nextTick()

    const taskList = wrapper.findAll('li')
    taskList.at(0).find('button').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.tasks).toEqual(expect.arrayContaining(['task2']))
    expect(wrapper.findAll('li').length).toEqual(1)
  })
})
