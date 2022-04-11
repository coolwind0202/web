import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserCardModal } from '.';

export default {
  title: 'model/user/UserCardModal',
  component: UserCardModal,
} as ComponentMeta<typeof UserCardModal>;

const Template: ComponentStory<typeof UserCardModal> = (args) => <UserCardModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
