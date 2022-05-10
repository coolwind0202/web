import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { action } from '@storybook/addon-actions';

import { accounts } from '@/utils/mock_data';

import { PartialMemberCard } from '.';

export default {
  title: 'model/member/account/PartialMemberCard',
  component: PartialMemberCard,
  args: {
    member: accounts.A,
    onClick: (e) => action(`Partial Member Card ${e.id} clicked`),
    onClusterClick: (e) => action(`Cluster ${e.id} clicked`),
  },
} as ComponentMeta<typeof PartialMemberCard>;

const Template: ComponentStory<typeof PartialMemberCard> = (args) => (
  <PartialMemberCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
