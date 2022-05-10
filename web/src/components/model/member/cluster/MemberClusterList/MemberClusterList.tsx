import React from 'react';

import { Stack } from '@mui/material';
import { useTheme } from '@mui/system';
import { MemberCluster as MemberCluster_ } from '@prisma/client';
import clsx from 'clsx';

import { MemberCluster } from '@/components/model/member/cluster/MemberCluster';

import styles from './MemberClusterList.module.css';

type MemberClusterListProps = {
  /** 表示するクラスタの配列 */
  clusters: MemberCluster_[];
  /** クラスタがクリックされた際のイベントハンドラ */
  onClick?: (cluster: MemberCluster_) => void;
  className?: string;
};

/**
 * クラスタの配列を**すべて**表示するコンポーネント
 */
export const MemberClusterList: React.VFC<MemberClusterListProps> = ({
  clusters,
  onClick = () => {},
  className,
}) => {
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
      className={clsx(styles.root, className)}
      direction='row'
      spacing={0}
    >
      {clusters.map((cluster) => (
        <li key={cluster.id}>
          <MemberCluster cluster={cluster} onClick={() => onClick(cluster)} />
        </li>
      ))}
    </Stack>
  );
};
