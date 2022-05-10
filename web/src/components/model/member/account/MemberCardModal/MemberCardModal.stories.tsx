import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { accounts } from '@/utils/mock_data';

import { MemberCardModal } from '.';

export default {
  title: 'model/member/account/MemberCardModal',
  component: MemberCardModal,
} as ComponentMeta<typeof MemberCardModal>;

const Template: ComponentStory<typeof MemberCardModal> = (args) => <MemberCardModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  member: accounts.A,
};
