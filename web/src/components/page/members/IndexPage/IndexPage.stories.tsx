import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { accounts } from '@/utils/mock_data';

import { IndexPage } from '.';

export default {
  title: 'page/index/IndexPage',
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = (args) => <IndexPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  members: Object.values(accounts),
};
