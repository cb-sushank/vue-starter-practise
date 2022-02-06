import Loading from '../Loading.vue';
import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

describe('Mounted Loading', () => {
  const wrapper = mount(Loading);

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })
})