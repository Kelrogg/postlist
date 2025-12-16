import type { FC } from 'react';
import styles from '../styles.module.scss';
export interface ModalFooterProps {
  children?: React.ReactNode;
}

export const ModalFooter: FC<ModalFooterProps> = ({ children }) => {
  return (
      <div className={styles['modal-footer']}>
        { children }
        <a href="github.com/kelrogg" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      )
};