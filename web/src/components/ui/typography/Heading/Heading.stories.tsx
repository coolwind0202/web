import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading } from '.';

export default {
  title: 'ui/typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Recommended = Template.bind({});
Recommended.args = {
  children: 'おすすめユーザー',
};
