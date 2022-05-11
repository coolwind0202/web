import React from 'react';

import { MemberCluster } from '@prisma/client';
import clsx from 'clsx';

import styles from './ClusterTab.module.css';

type ClusterTabProps = {
  /**
   * 表示するクラスタ
   */
  cluster: MemberCluster;
  /**
   * このタブが選択中かどうか
   */
  isCurrentTab: boolean;
  /**
   * このタブ（クラスタ）をクリックした際のイベントハンドラ
   */
  onClick: (cluster: MemberCluster) => void;
  className?: string;
};

/**
 * `ClusterTabPanel`の入れ子で使用する、各タブを表すコンポーネントです。
 * 各タブに1つのクラスタが対応します。
 */
export const ClusterTab: React.VFC<ClusterTabProps> = ({
  cluster,
  isCurrentTab,
  onClick,
  className,
}) => {
  return (
    <div className={clsx(className, styles.root)} onClick={() => onClick(cluster)}>
      <figure className={styles.content}>
        <div
          className={styles.circle}
          style={{ backgroundColor: cluster.color, border: `5px solid ${cluster.color}` }}
        >
          {cluster.icon_url ? <img src={cluster.icon_url} className={styles.icon} /> : null}
        </div>
        <figcaption>{cluster.name}</figcaption>
      </figure>
    </div>
  );
};
