import React from 'react';
import clsx from 'clsx';
import styles from './UserCard.module.css';
import { Avatar, Divider, Stack, Typography } from '@mui/material';
import { UserTagList } from '../UserTagList';
import { Tag } from '@prisma/client';
import { DiscordUserWithProfile } from '@/lib/prisma';

type UserCardProps = {
  /** 表示したいユーザー */
  user: DiscordUserWithProfile;
  className?: string;
  /**
   * タグがクリックされたときの処理.
   */
  tagOnClick?: (tag: Tag) => void;
};

/**
 * ユーザーを表示するコンポーネント。
 * 他の要素の入れ子にして使うことを想定しています。
 */
export const UserCard: React.VFC<UserCardProps> = ({ className, user, tagOnClick = () => {} }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Stack divider={<Divider />}>
        <Stack direction='row' alignItems='center' spacing={2} sx={{ px: 1.4, py: 1 }}>
          <Avatar src={user.avatar_url} sx={{ height: '2rem', width: '2rem' }}></Avatar>
          <Typography variant='h3' sx={{ fontFamily: 'unset', fontSize: '1.15rem' }}>
            {user.username}
            <span className={styles.discriminator}>#{user.discriminator}</span>
          </Typography>
        </Stack>
        <Stack spacing={1} sx={{ px: 2.2, pt: 1.2, pb: 2.5 }}>
          <Typography variant='h3'>自己紹介</Typography>
          <Typography sx={{ fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
            {user.Profile?.about ? (
              user.Profile.about
            ) : (
              <span className={styles.notRegistered}>登録されていません</span>
            )}
          </Typography>
          {user.Profile?.ProfileTag?.length && (
            <>
              <Typography variant='h3'>タグ</Typography>
              <UserTagList
                tags={user.Profile.ProfileTag.map((lump) => lump.tag)}
                onClick={tagOnClick}
                className={styles.tagList}
              />
            </>
          )}
          <Typography variant='h3'>フレンドコード</Typography>
          <Typography>
            {user.Profile?.friend_code ? (
              user.Profile.friend_code
            ) : (
              <span className={styles.notRegistered}>登録されていません</span>
            )}
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};
