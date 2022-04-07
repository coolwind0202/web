import React from 'react';
import clsx from 'clsx';
import styles from './PartialUserCard.module.css';
import type { User } from '@/types/user';
import { UserTag } from '../UserTag';
import { Avatar, Box, Button, Grid, Stack, Typography, useTheme } from '@mui/material';

type PartialUserCardProps = {
  children: React.ReactNode;
  className?: string;
  /** 表示するユーザー */
  user: User;
  onClick?: React.MouseEventHandler<HTMLElement>;
  tagOnClick?: React.MouseEventHandler<HTMLDivElement>;
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
  children,
  className,
  user,
  onClick,
  tagOnClick,
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
      onClick={onClick}
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
          <Avatar src={user.discord.avatar_url} sx={{ width: '3.5rem', height: '3.5rem' }} />
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
              <span className={styles.username}>{user.discord.username}</span>
              <span className={styles.discriminator}>#{user.discord.discriminator}</span>
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
              {user.profile.about}
            </Typography>
          </Grid>

          <Grid item>
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
              }}
              direction='row'
              spacing={1}
            >
              {user.profile.tags.map((tag) => (
                <li key={tag.id}>
                  <UserTag onClick={tagOnClick} tag={tag} />
                </li>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Button>
  );
};
