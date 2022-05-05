import React from 'react';
import clsx from 'clsx';
import styles from './UserTag.module.css';
import { Avatar, Chip } from '@mui/material';
import { Tag } from '@prisma/client';

type UserTagProps = {
  /** 表示するユーザータグ */
  tag: Tag;
  className?: string;
  onClick?: (tag: Tag) => void;
};

/**
 * UserTag コンポーネントは渡されたユーザータグを表示します。
 */
export const UserTag: React.VFC<UserTagProps> = ({ tag, className = '', onClick = () => {} }) => {
  return (
    <Chip
      label={tag.name}
      avatar={
        <Avatar sx={{ backgroundColor: tag.color }} src={tag.src ?? undefined}>
          {' '}
        </Avatar>
      }
      sx={{ border: `2px solid ${tag.color}`, backgroundColor: 'transparent' }}
      onClick={() => onClick(tag)}
    />
  );
};
