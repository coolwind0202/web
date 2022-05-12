import { ComponentProps } from 'react';

import type { GetStaticProps, NextPage } from 'next';

import { IndexPage } from '@/components/page/members/IndexPage';
import { getMemberAccounts } from '@/lib/prisma';
import { accounts } from '@/utils/mock_data';

type HomeProps = ComponentProps<typeof IndexPage>;

const Home: NextPage<HomeProps> = (props) => {
  return <IndexPage {...props} />;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const members =
    process.env.NODE_ENV === 'development' ? Object.values(accounts) : await getMemberAccounts();

  return {
    props: {
      members,
    },
  };
};

export default Home;
