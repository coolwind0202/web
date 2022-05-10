import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { action } from '@storybook/addon-actions';

import { clusters } from '@/utils/mock_data';

import { MemberCluster } from '.';

export default {
  title: 'model/member/cluster/MemberCluster',
  component: MemberCluster,
} as ComponentMeta<typeof MemberCluster>;

const Template: ComponentStory<typeof MemberCluster> = (args) => <MemberCluster {...args} />;

export const General = Template.bind({});
General.args = {
  cluster: clusters.A,
  onClick: action('クリックされました'),
};

export const WithOutAvatar = Template.bind({});
WithOutAvatar.args = {
  cluster: clusters.B,
  onClick: action('クリックされました'),
};
