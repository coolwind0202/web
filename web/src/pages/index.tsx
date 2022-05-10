import { ComponentProps } from 'react';

import type { GetStaticProps, NextPage } from 'next';

import { IndexPage } from '@/components/page/members/IndexPage';
import { MemberAccountWithPayload } from '@/lib/prisma';

type HomeProps = ComponentProps<typeof IndexPage>;

const Home: NextPage<HomeProps> = (props) => {
  return <IndexPage {...props} />;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const resp = await fetch('http://localhost:3000/api/member/accounts');
  // 絶対パスにするようエラー出るのでやむなくlocalhostを指定しています.
  const members: MemberAccountWithPayload[] = await resp.json();

  return {
    props: {
      members: members ?? [],
    },
  };
};

export default Home;
