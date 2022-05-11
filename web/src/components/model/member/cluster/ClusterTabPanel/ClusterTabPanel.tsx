import React from 'react';

import clsx from 'clsx';

import { ClusterTab } from '@/components/model/member/cluster/ClusterTab';
import { useClusterTab } from '@/lib/hooks/useClusterTab';

import styles from './ClusterTabPanel.module.css';

type ClusterTabPanelProps = {
  className?: string;
} & ReturnType<typeof useClusterTab>;

/**
 * クリック可能なクラスタの配列を表示するコンポーネント。
 * トップページのクラスタのタブの実装で使用します。
 */
export const ClusterTabPanel: React.VFC<ClusterTabPanelProps> = ({
  currentTab,
  clusters,
  onTabChange,
  className,
}) => {
  return (
    <nav className={clsx(className, styles.root)}>
      <ul className={styles.list}>
        {clusters.map((cluster, i) => (
          <li key={cluster.id}>
            <ClusterTab
              onClick={() => onTabChange(i)}
              cluster={cluster}
              isCurrentTab={currentTab.cluster.id === cluster.id}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
