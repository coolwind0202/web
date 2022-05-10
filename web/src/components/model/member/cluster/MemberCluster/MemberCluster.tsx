import React from 'react';

import { Avatar, Chip } from '@mui/material';
import type { MemberCluster as MemberCluster_ } from '@prisma/client';
import clsx from 'clsx';

import styles from './MemberCluster.module.css';

type MemberClusterProps = {
  /** 表示するクラスタ */
  cluster: MemberCluster_;
  /** クラスタがクリックされた際のイベントハンドラ */
  onClick?: (cluster: MemberCluster_) => void;
  className?: string;
};

/**
 * 渡されたクラスタをタグ状に表示するコンポーネントです。
 */
export const MemberCluster: React.VFC<MemberClusterProps> = ({
  cluster,
  onClick = () => {},
  className,
}) => {
  return (
    <Chip
      label={cluster.name}
      avatar={
        <Avatar sx={{ backgroundColor: cluster.color }} src={cluster.icon_url ?? undefined}>
          {' '}
        </Avatar>
      }
      sx={{ border: `2px solid ${cluster.color}`, backgroundColor: 'transparent' }}
      onClick={() => onClick(cluster)}
      className={clsx(styles.root, className)}
    />
  );
};
