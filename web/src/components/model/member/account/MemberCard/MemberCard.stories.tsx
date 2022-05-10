import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { accounts } from '@/utils/mock_data';

import { MemberCard } from '.';

export default {
  title: 'model/member/account/MemberCard',
  component: MemberCard,
} as ComponentMeta<typeof MemberCard>;

const Template: ComponentStory<typeof MemberCard> = (args) => <MemberCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  member: accounts.A,
};
