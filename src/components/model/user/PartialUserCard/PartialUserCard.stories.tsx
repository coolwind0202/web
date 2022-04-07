import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PartialUserCard } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'model/user/PartialUserCard',
  component: PartialUserCard,
  args: {
    user: {
      discord: {
        username: 'John Doe',
        discriminator: '0000',
        avatar_url: 'https://pbs.twimg.com/media/D4gRqxVUcAAH9R8?format=jpg&name=medium',
      },
      profile: {
        tags: [
          {
            name: 'タグ名',
            color: '#707070',
            id: '1',
          },
          {
            name: 'タグ名',
            color: '#86c3ff',
            id: '2',
          },
          {
            name: 'タグ名',
            color: '#ff8686',
            id: '3',
          },
        ],
        about:
          'ダミーの自己紹介テキストです。自己紹介が長文の場合、...で省略表示されます。ダミーの自己紹介テキストです。自己紹介が長文の場合、...で省略表示されます。',
        friend_code: '0000-0000-0000',
      },
    },
    onClick: action('PartialUserCardがクリックされました'),
    tagOnClick: (e) => {
      action('UserTagがクリックされました')(e);
      e.stopPropagation();
      // UserTagはPartialUserCardの子要素のため、バブリングを止める
    },
  },
} as ComponentMeta<typeof PartialUserCard>;

const Template: ComponentStory<typeof PartialUserCard> = (args) => <PartialUserCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
