import React, { ComponentProps } from 'react';
import clsx from 'clsx';
import styles from './PageLink.module.css';
import Link from 'next/link';

/**
 * Next.jsのLinkコンポーネントにクラスを付与するためのユーティリティです。
 */
export const PageLink: React.VFC<ComponentProps<typeof Link> & { className?: string }> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      <Link {...props} />
    </div>
  );
};
