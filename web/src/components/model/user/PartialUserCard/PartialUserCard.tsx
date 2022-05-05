import React from 'react';
import clsx from 'clsx';
import styles from './PartialUserCard.module.css';
import { Avatar, Button, Grid, Typography, useTheme } from '@mui/material';
import { UserTagList } from '../UserTagList';
import { Tag } from '@prisma/client';
import { DiscordUserWithProfile } from '@/lib/prisma';

type PartialUserCardProps = {
  className?: string;
  /** 表示するユーザー */
  user: DiscordUserWithProfile;
  /** カードをクリックしたときの処理 */
  onClick?: (user: DiscordUserWithProfile) => void;
  /** タグをクリックしたときの処理 */
  tagOnClick?: (tag: Tag) => void;
};

/**
 * `PartialUserCard`コンポーネントはユーザー情報の一部だけを表示します。
 *
 * - ユーザー名、アイコン
 * - 自己紹介の冒頭部分
 * - タグの一部
 *
 * Mobileでの一覧表示に使います。
 */
export const PartialUserCard: React.VFC<PartialUserCardProps> = ({
  className,
  user,
  onClick = () => {},
  tagOnClick = () => {},
}) => {
  const theme = useTheme();
  return (
    <Button
      component='article'
      sx={{
        width: '100%',
        // MUIの独自スタイルを打ち消し.
        textTransform: 'unset',
        fontWeight: 'unset',
        fontSize: 'unset',
        color: 'unset',
      }}
      variant='text'
      onClick={() => onClick(user)}
    >
      <Grid
        container
        direction='row'
        spacing={0}
        alignItems='flex-start'
        sx={{ gap: '1rem', width: '100%' }}
        wrap='nowrap'
      >
        <Grid item>
          <Avatar src={user.avatar_url} sx={{ width: '3.5rem', height: '3.5rem' }} />
        </Grid>
        <Grid sx={{ minWidth: '0' }} container item direction='column' wrap='nowrap'>
          <Grid item>
            <Typography
              component='h3'
              sx={{
                fontWeight: 'bold',
                fontSize: '1.3rem',
                lineHeight: '1',
              }}
            >
              <span className={styles.username}>{user.username}</span>
              <span className={styles.discriminator}>#{user.discriminator}</span>
            </Typography>
          </Grid>

          <Grid item zeroMinWidth xs>
            <Typography
              variant='subtitle1'
              sx={{
                fontSize: '0.8rem',
                opacity: '0.8',
              }}
              noWrap
              gutterBottom
            >
              {user.Profile?.about ?? ''}
            </Typography>
          </Grid>

          {user.Profile?.ProfileTag?.length && (
            <Grid item>
              <UserTagList
                tags={user.Profile.ProfileTag.map((profileTagRelation) => profileTagRelation.tag)}
                onClick={tagOnClick}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Button>
  );
};
