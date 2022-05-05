import React from 'react';
import styles from './IndexPage.module.css';
import { Heading } from '@/components/ui/typography/Heading';
import { NavBar } from '@/components/ui/nav/NavBar';
import { PartialUserCardList } from '@/components/model/user/PartialUserCardList';
import { PageLink } from '@/components/ui/nav/PageLink';
import { ComponentProps, useState } from 'react';
import { UserCardModal } from '@/components/model/user/UserCardModal';
import { DiscordUserWithProfile } from '@/lib/prisma';
import { useUserParameter } from '@/lib/hooks/useUserParameter';
import { useRouter } from 'next/router';

type HomeProps = {
  users: DiscordUserWithProfile[];
};

const Link = (props: ComponentProps<typeof PageLink>) => (
  <PageLink {...props} className={styles.link} />
);

export const IndexPage: React.VFC<HomeProps> = ({ users }) => {
  // const [modalUser, setModalUser] = useState<DiscordUserWithProfile | null>(null);
  const modalUser = useUserParameter(users);
  const router = useRouter();
  const onUserCardClicked = (user: DiscordUserWithProfile) => {
    router.push({
      pathname: '/',
      query: {
        user: user.discord_id,
      },
    });
  };
  const onModalClosed = () => {
    router.push('/');
  };
  return (
    <>
      {modalUser && (
        <UserCardModal user={modalUser} open={modalUser !== null} onClose={onModalClosed} />
      )}
      <NavBar>
        <div className={styles.root}>
          <section className={styles.content}>
            <Heading>おすすめユーザー</Heading>
            <PartialUserCardList users={users} onClick={onUserCardClicked} />
            <Link href='/'>もっと見る →</Link>
          </section>
          <section className={styles.content}>
            <Heading>タグから探す</Heading>
            <PartialUserCardList users={users} onClick={onUserCardClicked} />
            <Link href='/'>もっと見る →</Link>
          </section>
        </div>
      </NavBar>
    </>
  );
};
