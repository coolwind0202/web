import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserCard } from '.';

export default {
  title: 'model/user/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => <UserCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  user: {
    discord: {
      username: 'User',
      discriminator: '1000',
      avatar_url: 'https://pbs.twimg.com/media/Dpw-95kUwAAswNa.jpg',
    },
    profile: {
      about: '自己紹介テキスト\n2行目自己紹介テキスト\n3行目自己紹介テキスト',
      friend_code: '1234-1234-1234',
      tags: [],
    },
  },
};
