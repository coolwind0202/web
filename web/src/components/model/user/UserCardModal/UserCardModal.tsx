import React from 'react';
import clsx from 'clsx';
import styles from './UserCardModal.module.css';
import { Dialog, Paper, PaperProps } from '@mui/material';
import { UserCard } from '../UserCard/UserCard';
import { DiscordUserWithProfile } from '@/lib/prisma';

type UserCardModalProps = {
  /** カードに表示するユーザー */
  user: DiscordUserWithProfile;
  /** モーダルが開いてるかどうか */
  open: boolean;
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
 * `UserCard`をモーダルで表示するコンポーネント
 */
export const UserCardModal: React.VFC<UserCardModalProps> = ({
  className,
  onClose,
  open,
  user,
}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Dialog open={open} onClose={onClose} PaperComponent={PaperStyled} maxWidth='sm' fullWidth>
        <UserCard user={user} />
      </Dialog>
    </div>
  );
};
