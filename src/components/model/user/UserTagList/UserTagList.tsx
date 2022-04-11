import React from 'react';
import clsx from 'clsx';
import styles from './UserTagList.module.css';
import { Stack } from '@mui/material';
import type { UserTag as UserTagType } from '@/types/user';
import { UserTag } from '@/components/model/user/UserTag';
import { useTheme } from '@mui/system';

type UserTagListProps = {
  className?: string;
  /** 表示するユーザータグの配列 */
  tags: UserTagType[];
  /** タグがクリックされたときの処理 */
  onClick: (tag: UserTagType) => void;
};

/**
 * ユーザータグの配列を表示するためのコンポーネント
 */
export const UserTagList: React.VFC<UserTagListProps> = ({ className, tags, onClick }) => {
  const theme = useTheme();
  return (
    <Stack
      component='ul'
      sx={{
        listStyle: 'none',
        paddingLeft: '0',
        margin: '0',
        lineHeight: '1',
        flexWrap: 'wrap',
        overflow: 'hidden',
        height: '32px',
        columnGap: theme.spacing(0.5),
        rowGap: theme.spacing(0.5),
      }}
      className={className}
      direction='row'
      spacing={0}
    >
      {tags.map((tag) => (
        <li key={tag.id}>
          <UserTag onClick={onClick} tag={tag} />
        </li>
      ))}
    </Stack>
  );
};
