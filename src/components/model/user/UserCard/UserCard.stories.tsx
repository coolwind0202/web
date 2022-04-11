import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserCard } from '.';

export default {
  title: 'model/user/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => <UserCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
