import React from 'react';

import { Dialog, Paper, PaperProps } from '@mui/material';
import clsx from 'clsx';

import { MemberAccountWithPayload } from '@/lib/prisma';

import { MemberCard } from '../MemberCard';
import styles from './MemberCardModal.module.css';

type MemberCardModalProps = {
  /** カードに表示するメンバー */
  member: MemberAccountWithPayload;
  /** モーダルが開いてるかどうか */
  isOpen: boolean;
  /** モーダルを閉じる際の処理 */
  onClose: () => void;
  className?: string;
};

/**
 * MUIの`Dialog`内`Paper`コンポーネントにスタイルを当てるためのコンポーネント
 */
const PaperStyled = (props: PaperProps) => {
  return <Paper {...props} sx={{ borderRadius: '0.5rem' }} />;
};

/**
 * `MemberCard`をモーダルで表示するコンポーネント
 */
export const MemberCardModal: React.VFC<MemberCardModalProps> = ({
  member,
  onClose,
  isOpen,
  className,
}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Dialog open={isOpen} onClose={onClose} PaperComponent={PaperStyled} maxWidth='sm' fullWidth>
        <MemberCard member={member} />
      </Dialog>
    </div>
  );
};
