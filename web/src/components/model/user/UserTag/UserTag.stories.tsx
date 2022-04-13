import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserTag } from '.';

import { action } from '@storybook/addon-actions';

export default {
  title: 'model/user/UserTag',
  component: UserTag,
} as ComponentMeta<typeof UserTag>;

const Template: ComponentStory<typeof UserTag> = (args) => <UserTag {...args} />;

export const General = Template.bind({});
General.args = {
  tag: {
    color: '#86c3ff',
    name: 'タグ名',
    id: '',
  },
  onClick: action('クリックされました'),
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  tag: {
    color: '#707070',
    name: 'GitHub',
    id: '',
    src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  onClick: action('クリックされました'),
};
