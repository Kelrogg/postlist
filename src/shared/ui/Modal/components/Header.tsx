import styles from '../styles.module.scss';
import type { FC } from 'react';

export interface ModalHeaderProps {
  children?: React.ReactNode;
}

export const ModalHeader: FC<ModalHeaderProps> = ({ children }) => {
  return (
      <div className={styles['modal-header']}>
        {children}
      </div>
    )
};