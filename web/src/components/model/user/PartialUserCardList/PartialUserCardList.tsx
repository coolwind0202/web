import React from 'react';
import clsx from 'clsx';
import styles from './PartialUserCardList.module.css';
import { User, UserTag } from '@/types/user';
import { Stack } from '@mui/material';
import { PartialUserCard } from '../PartialUserCard/PartialUserCard';

type PartialUserCardListProps = {
  className?: string;
  /** 表示するユーザーの配列 */
  users: User[];
  /** カードをクリックしたときの処理 */
  onClick?: (user: User) => void;
  /** タグをクリックしたときの処理 */
  tagOnClick?: (tag: UserTag) => void;
};

/**
 * `PartialUserCard`の配列を表示するためのコンポーネント
 */
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
