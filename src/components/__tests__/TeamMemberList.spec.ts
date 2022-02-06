import TeamMemberList from '../TeamMemberList.vue';
import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

describe('Mounted TeamMemberList', () => {
  const wrapper = mount(TeamMemberList);

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })
})