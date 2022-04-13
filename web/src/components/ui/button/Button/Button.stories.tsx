import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'ui/button/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Discordでログイン',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  children: 'ログアウトする',
};

export const Info = Template.bind({});
Info.args = {
  color: 'info',
  children: 'プロフィールを編集する',
};
