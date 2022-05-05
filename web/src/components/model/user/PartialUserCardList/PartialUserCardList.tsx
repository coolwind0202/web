import React from 'react';
import clsx from 'clsx';
import styles from './PartialUserCardList.module.css';
import { Stack } from '@mui/material';
import { PartialUserCard } from '../PartialUserCard/PartialUserCard';
import { DiscordUser, Tag } from '@prisma/client';
import { DiscordUserWithProfile } from '@/lib/prisma';

type PartialUserCardListProps = {
  className?: string;
  /** 表示するユーザーの配列 */
  users: DiscordUserWithProfile[];
  /** カードをクリックしたときの処理 */
  onClick?: (user: DiscordUserWithProfile) => void;
  /** タグをクリックしたときの処理 */
  tagOnClick?: (tag: Tag) => void;
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
