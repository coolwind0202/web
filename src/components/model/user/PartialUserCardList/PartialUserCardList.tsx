import React from 'react';
import clsx from 'clsx';
import styles from './PartialUserCardList.module.css';
import { User, UserTag } from '@/types/user';
import { Stack } from '@mui/material';
import { PartialUserCard } from '../PartialUserCard/PartialUserCard';

type PartialUserCardListProps = {
  className?: string;
  users: User[];
  onClick?: (user: User) => void;
  tagOnClick?: (tag: UserTag) => void;
};

export const PartialUserCardList: React.VFC<PartialUserCardListProps> = ({
  className,
  users,
  onClick,
  tagOnClick,
}) => {
  return (
    <Stack sx={{ width: '100%' }} direction='column' spacing={2}>
      {users.map((user, i) => (
        <PartialUserCard user={user} key={i} onClick={onClick} tagOnClick={tagOnClick} />
      ))}
    </Stack>
  );
};
