import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ClusterTab } from '.';

export default {
  title: 'ClusterTab',
  component: ClusterTab,
} as ComponentMeta<typeof ClusterTab>;

const Template: ComponentStory<typeof ClusterTab> = (args) => <ClusterTab {...args} />;

export const Primary = Template.bind({});
Primary.args = {};