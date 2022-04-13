import React from 'react';
import clsx from 'clsx';
import styles from './Heading.module.css';
import { Typography } from '@mui/material';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export const Heading: React.VFC<HeadingProps> = ({ children, className }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Typography variant='h2'>{children}</Typography>
    </div>
  );
};
