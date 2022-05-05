import React from 'react'
import clsx from 'clsx';
import styles from './Modal.module.css';

type ModalProps = {
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.VFC<ModalProps> = ({ children, className }) => {
  return (
    <div className={clsx(className, styles.root)}>
      {children}
    </div>
  );
}