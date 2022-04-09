import type { NextPage } from 'next';
import styles from '../styles/index.module.css';
import { Heading } from '../components/ui/typography/Heading';
import { NavBar } from '@/components/ui/nav/NavBar';
import { PartialUserCardList } from '@/components/model/user/PartialUserCardList';
import { PageLink } from '@/components/ui/nav/PageLink';
import { ComponentProps } from 'react';

const Link = (props: ComponentProps<typeof PageLink>) => (
  <PageLink {...props} className={styles.link} />
);

const Home: NextPage = () => {
  const users = [...Array(5)].map((_, i) => ({
    discord: {
      username: 'White-Lucida',
      discriminator: '0000',
      avatar_url: 'https://i.pinimg.com/originals/52/d1/13/52d11372df35fd96aab8f6827e1ce205.jpg',
    },
    profile: {
      about: [...Array(20)].map(() => 'こんにちはなんだよ！').join(''),
      friend_code: '1234-1234-1234',
      tags: [...Array(i)].map((_, j) => ({ color: '#707070', name: 'ガチすぎる', id: `${j}` })),
    },
  }));

  return (
    <NavBar>
      <div className={styles.root}>
        <section className={styles.content}>
          <Heading>おすすめユーザー</Heading>
          <PartialUserCardList users={users} />
          <Link href='/'>もっと見る →</Link>
        </section>
        <section className={styles.content}>
          <Heading>タグから探す</Heading>
          <PartialUserCardList users={users} />
          <Link href='/'>もっと見る →</Link>
        </section>
      </div>
    </NavBar>
  );
};

export default Home;
