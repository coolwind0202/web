import React from 'react';
import styles from './IndexPage.module.css';
import { Heading } from '@/components/ui/typography/Heading';
import { NavBar } from '@/components/ui/nav/NavBar';
import { PartialUserCardList } from '@/components/model/user/PartialUserCardList';
import { PageLink } from '@/components/ui/nav/PageLink';
import { ComponentProps, useState } from 'react';
import { UserCardModal } from '@/components/model/user/UserCardModal';
import { User } from '@/types/user';

type HomeProps = {
  users: User[];
};

const Link = (props: ComponentProps<typeof PageLink>) => (
  <PageLink {...props} className={styles.link} />
);

export const IndexPage: React.VFC<HomeProps> = ({ users }) => {
  const [modalUser, setModalUser] = useState<User | null>(null);
  return (
    <>
      {modalUser && (
        <UserCardModal
          user={modalUser}
          open={modalUser !== null}
          onClose={() => setModalUser(null)}
        />
      )}
      <NavBar>
        <div className={styles.root}>
          <section className={styles.content}>
            <Heading>おすすめユーザー</Heading>
            <PartialUserCardList users={users} onClick={setModalUser} />
            <Link href='/'>もっと見る →</Link>
          </section>
          <section className={styles.content}>
            <Heading>タグから探す</Heading>
            <PartialUserCardList users={users} onClick={setModalUser} />
            <Link href='/'>もっと見る →</Link>
          </section>
        </div>
      </NavBar>
    </>
  );
};
