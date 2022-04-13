import type { NextPage } from 'next';
import { IndexPage } from '@/components/page/members/IndexPage';

const Home: NextPage = () => {
  const users = [...Array(5)].map((_, i) => ({
    discord: {
      username: 'User Name',
      discriminator: '0000',
      avatar_url: 'https://i.pinimg.com/originals/52/d1/13/52d11372df35fd96aab8f6827e1ce205.jpg',
    },
    profile: {
      about: 'テキスト',
      friend_code: '1234-1234-1234',
      tags: [...Array(i)].map((_, j) => ({ color: '#707070', name: 'ガチすぎる', id: `${j}` })),
    },
  }));

  return <IndexPage users={users} />;
};

export default Home;
