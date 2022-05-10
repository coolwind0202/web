import React from 'react';

import { Avatar, Button, Grid, Typography } from '@mui/material';
import type { MemberCluster } from '@prisma/client';
import clsx from 'clsx';

import { MemberClusterList } from '@/components/model/member/cluster/MemberClusterList';
import type { MemberAccountWithPayload } from '@/lib/prisma';

import styles from './PartialMemberCard.module.css';

type PartialMemberCardProps = {
  /** 表示するメンバー */
  member: MemberAccountWithPayload;
  /** カードをクリックしたときの処理 */
  onClick?: (member: MemberAccountWithPayload) => void;
  /** クラスタをクリックしたときの処理 */
  onClusterClick?: (cluster: MemberCluster) => void;
  className?: string;
};

/**
 * `PartialMemberCard`コンポーネントはメンバー情報の一部だけを表示します。
 *
 * - `username`（ユーザー名）
 * - `avatar_url`（アイコン画像）
 * - bioの冒頭
 * - タグの一部
 *
 * Mobileでの一覧表示に使います。
 */
export const PartialMemberCard: React.VFC<PartialMemberCardProps> = ({
  member,
  onClick = () => {},
  onClusterClick = () => {},
  className,
}) => {
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
      onClick={() => onClick(member)}
      className={clsx(styles.root, className)}
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
          <Avatar
            src={member.discord_user?.avatar_url}
            sx={{ width: '3.5rem', height: '3.5rem' }}
          />
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
              <span className={styles.username}>{member.discord_user?.username}</span>
              <span className={styles.discriminator}>#{member.discord_user?.discriminator}</span>
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
              {member.profile?.bio}
            </Typography>
          </Grid>

          {member.profile?.clusters.length ? (
            <Grid item>
              <MemberClusterList clusters={member.profile.clusters} onClick={onClusterClick} />
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </Button>
  );
};
