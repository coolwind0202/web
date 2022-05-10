import React from 'react';

import { Avatar, Divider, Stack, Typography } from '@mui/material';
import { MemberCluster } from '@prisma/client';
import clsx from 'clsx';

import { MemberClusterList } from '@/components/model/member/cluster/MemberClusterList';
import type { MemberAccountWithPayload } from '@/lib/prisma';

import styles from './MemberCard.module.css';

type MemberCardProps = {
  /** 表示したいメンバー */
  member: MemberAccountWithPayload;
  /**
   * クラスタがクリックされたときの処理
   */
  onClusterClick?: (cluster: MemberCluster) => void;
  className?: string;
};

/**
 * ユーザーを表示するコンポーネント。
 * 他の要素の入れ子にして使うことを想定しています。
 */
export const MemberCard: React.VFC<MemberCardProps> = ({
  member,
  onClusterClick = () => {},
  className,
}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Stack divider={<Divider />}>
        <Stack direction='row' alignItems='center' spacing={2} sx={{ px: 1.4, py: 1 }}>
          <Avatar
            src={member.discord_user?.avatar_url}
            sx={{ height: '2rem', width: '2rem' }}
          ></Avatar>
          <Typography variant='h3' sx={{ fontFamily: 'unset', fontSize: '1.15rem' }}>
            {member.discord_user?.username}
            <span className={styles.discriminator}>#{member.discord_user?.discriminator}</span>
          </Typography>
        </Stack>
        <Stack spacing={1} sx={{ px: 2.2, pt: 1.2, pb: 2.5 }}>
          <Typography variant='h3'>自己紹介</Typography>
          <Typography sx={{ fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
            {member.profile?.bio ? (
              member.profile.bio
            ) : (
              <span className={styles.notRegistered}>登録されていません</span>
            )}
          </Typography>
          {member.profile?.clusters?.length ? (
            <>
              <Typography variant='h3'>タグ</Typography>
              <MemberClusterList
                clusters={member.profile.clusters}
                onClick={onClusterClick}
                className={styles.tagList}
              />
            </>
          ) : null}
          <Typography variant='h3'>フレンドコード</Typography>
          <Typography>
            {member.profile?.friend_code ? (
              member.profile?.friend_code
            ) : (
              <span className={styles.notRegistered}>登録されていません</span>
            )}
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};
