import styles from '../styles.module.scss';
import { useModalContext } from '..';
import { createPortal } from 'react-dom';
import type { FC } from 'react';

export interface ModalContentProps {
  children?: React.ReactNode;
}

export const ModalContent: FC<ModalContentProps> = ({ children }) => {
  const { open } = useModalContext();
  return open
    ? 
    createPortal(
      <div className={styles['modal-overlay']}>
        <div className={styles['modal-content']}>
          {/* <div className={styles['modal-body']}> */}
            {children}
          {/* </div> */}
        </div>
      </div>,
      document.getElementById('portal-root') as HTMLDivElement
    )
    : null;
};