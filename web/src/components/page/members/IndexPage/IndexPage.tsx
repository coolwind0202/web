import React from 'react';
import { ComponentProps } from 'react';

import { useRouter } from 'next/router';

import { MemberCardModal } from '@/components/model/member/account/MemberCardModal';
import { PartialMemberCardList } from '@/components/model/member/account/PartialMemberCardList';
import { ClusterTabPanel } from '@/components/model/member/cluster/ClusterTabPanel';
import { NavBar } from '@/components/ui/nav/NavBar';
import { PageLink } from '@/components/ui/nav/PageLink';
import { Heading } from '@/components/ui/typography/Heading';
import { useClusterTab } from '@/lib/hooks/useClusterTab';
import { useMemberIdParameter } from '@/lib/hooks/useMemberIdParameter';
import type { MemberAccountWithPayload } from '@/lib/prisma';

import styles from './IndexPage.module.css';

type HomeProps = {
  members: MemberAccountWithPayload[];
};

const Link = (props: ComponentProps<typeof PageLink>) => (
  <PageLink {...props} className={styles.link} />
);

export const IndexPage: React.VFC<HomeProps> = ({ members }) => {
  const modalMember = useMemberIdParameter(members);
  const router = useRouter();
  const { currentTab, clusters, onTabChange } = useClusterTab(members);
  console.log(currentTab);
  const handleMemberCardClick = (member: MemberAccountWithPayload) => {
    router.push({
      pathname: '/',
      query: {
        member: member.id,
      },
    });
  };
  const handleModalClose = () => {
    router.push('/');
  };
  return (
    <>
      {modalMember && (
        <MemberCardModal
          member={modalMember}
          isOpen={modalMember !== null}
          onClose={handleModalClose}
        />
      )}
      <NavBar>
        <div className={styles.root}>
          <section className={styles.content}>
            <Heading>おすすめユーザー</Heading>
            <PartialMemberCardList members={members} onClick={handleMemberCardClick} />
            <Link href='/'>もっと見る →</Link>
          </section>
          <section className={styles.content}>
            <Heading>タグから探す</Heading>
            <ClusterTabPanel
              clusters={clusters}
              currentTab={currentTab}
              onTabChange={onTabChange}
            />
            <PartialMemberCardList members={currentTab.members} onClick={handleMemberCardClick} />
            <Link href='/'>もっと見る →</Link>
          </section>
        </div>
      </NavBar>
    </>
  );
};
