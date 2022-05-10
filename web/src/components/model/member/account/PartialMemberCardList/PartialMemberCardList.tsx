import React from 'react';

import { Stack } from '@mui/material';
import { MemberCluster } from '@prisma/client';
import clsx from 'clsx';

import { PartialMemberCard } from '@/components/model/member/account/PartialMemberCard';
import type { MemberAccountWithPayload } from '@/lib/prisma';

import styles from './PartialMemberCardList.module.css';

type PartialMemberCardListProps = {
  /** 表示するメンバーの配列 */
  members: MemberAccountWithPayload[];
  /** カードをクリックしたときの処理 */
  onClick?: (member: MemberAccountWithPayload) => void;
  /** クラスタをクリックしたときの処理 */
  onClusterClick?: (cluster: MemberCluster) => void;
  className?: string;
};

/**
 * メンバーの配列を表示するコンポーネント
 */
export const PartialMemberCardList: React.VFC<PartialMemberCardListProps> = ({
  members,
  onClick,
  onClusterClick,
  className,
}) => {
  return (
    <Stack
      sx={{ width: '100%' }}
      direction='column'
      spacing={2}
      className={clsx(styles.root, className)}
    >
      {members.map((member) => (
        <PartialMemberCard
          member={member}
          key={member.id}
          onClick={onClick}
          onClusterClick={onClusterClick}
        />
      ))}
    </Stack>
  );
};
