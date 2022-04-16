import type { GetStaticProps, NextPage } from 'next';
import { IndexPage } from '@/components/page/members/IndexPage';
import { ComponentProps } from 'react';
import { getUsers } from '@/lib/prisma';

type HomeProps = ComponentProps<typeof IndexPage>;

const Home: NextPage<HomeProps> = (props) => {
  return <IndexPage {...props} />;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const users = await getUsers();

  return {
    props: {
      users: users ?? [],
    },
  };
};

export default Home;
