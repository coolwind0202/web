import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserCardModal } from '.';

export default {
  title: 'model/user/UserCardModal',
  component: UserCardModal,
} as ComponentMeta<typeof UserCardModal>;

const Template: ComponentStory<typeof UserCardModal> = (args) => <UserCardModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  user: {
    discord: {
      username: 'User',
      discriminator: '1000',
      avatar_url: 'https://pbs.twimg.com/media/Dpw-95kUwAAswNa.jpg',
    },
    profile: {
      about: '自己紹介テキスト',
      tags: [],
      friend_code: '1234-1234-1234',
    },
  },
};
