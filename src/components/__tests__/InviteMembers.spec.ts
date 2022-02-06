import InviteMembers from '../InviteMembers.vue';
import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

describe('Mounted InviteMembers', () => {
  const wrapper = mount(InviteMembers);

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })
})