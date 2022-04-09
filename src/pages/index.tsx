import type { NextPage } from 'next';
import styles from '../styles/index.module.css';
import { Heading } from '../components/ui/typography/Heading';
import { Button } from '../components/ui/button/Button';
import { NavBar } from '@/components/ui/nav/NavBar';
import { PartialUserCard } from '@/components/model/user/PartialUserCard';

const Home: NextPage = () => {
  return (
    <NavBar>
      <div className={styles.root}>
        <section className={styles.content}>
          <Heading>おすすめユーザー</Heading>
          <PartialUserCard
            user={{
              discord: {
                username: 'White-Lucida',
                discriminator: '0000',
                avatar_url:
                  'https://i.pinimg.com/originals/52/d1/13/52d11372df35fd96aab8f6827e1ce205.jpg',
              },
              profile: {
                about: [...Array(20)].map(() => 'こんにちはなんだよ！').join(''),
                friend_code: '1234-1234-1234',
                tags: [
                  { color: 'green', name: 'ガチすぎる', id: '' },
                  { color: 'green', name: 'ガチすぎる', id: '1' },
                  { color: 'green', name: 'ガチすぎる', id: '2' },
                  { color: 'green', name: 'ガチすぎる', id: '3' },
                  { color: 'green', name: 'ガチすぎる', id: '4' },
                ],
              },
            }}
          />
          <Button>プロフィールを編集する</Button>
        </section>
      </div>
    </NavBar>
  );
};

export default Home;
