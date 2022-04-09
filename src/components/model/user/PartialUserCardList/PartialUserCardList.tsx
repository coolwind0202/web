import React from 'react';
import clsx from 'clsx';
import styles from './PartialUserCardList.module.css';
import { User } from '@/types/user';
import { Stack } from '@mui/material';
import { PartialUserCard } from '../PartialUserCard/PartialUserCard';

type PartialUserCardListProps = {
  className?: string;
  users: User[];
};

export const PartialUserCardList: React.VFC<PartialUserCardListProps> = ({ className, users }) => {
  return (
    <Stack sx={{ width: '100%' }} direction='column' spacing={2}>
      {users.map((user, i) => (
        <PartialUserCard user={user} key={i} />
      ))}
    </Stack>
  );
};
