---
to: src/components/<%= directory %>/<%= subdirectory %>/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.tsx
---

import React from 'react'
import clsx from 'clsx';
import styles from './<%= h.changeCase.pascal(component_name) %>.module.css';

type <%= h.changeCase.pascal(component_name) %>Props = {
  children: React.ReactNode;
  className?: string;
}

export const <%= h.changeCase.pascal(component_name) %>: React.VFC<<%= h.changeCase.pascal(component_name) %>Props> = ({ children, className }) => {
  return (
    <div className={clsx(className, styles.root)}>
      {children}
    </div>
  );
}