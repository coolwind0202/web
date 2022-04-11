import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndexPage } from '.';

export default {
  title: 'page/index/IndexPage',
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = (args) => <IndexPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  users: [
    {
      discord: {
        username: 'User',
        discriminator: '1000',
        avatar_url: 'https://i.pinimg.com/originals/52/d1/13/52d11372df35fd96aab8f6827e1ce205.jpg',
      },
      profile: {
        about: '自己紹介テキスト',
        tags: [],
        friend_code: '1234-1234-1234',
      },
    },
    {
      discord: {
        username: 'User-2',
        discriminator: '2000',
        avatar_url: '',
      },
      profile: {
        about: '自己紹介テキスト',
        tags: [
          {
            name: 'Tag-1',
            id: '1',
            color: '#707070',
          },
          {
            name: 'Tag-2',
            id: '2',
            color: '#707070',
          },
          {
            name: 'Tag-3',
            id: '3',
            color: '#707070',
          },
        ],
        friend_code: '',
      },
    },
  ],
};
