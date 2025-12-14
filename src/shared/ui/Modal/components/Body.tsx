import styles from '../styles.module.scss';
import type { FC } from 'react';

export interface ModalBodyProps {
  children?: React.ReactNode;
}

export const ModalBody: FC<ModalBodyProps> = ({ children }) => {
  return (
      // <div className={styles['modal-overlay']}>
        // <div className={styles['modal-content']}>
          <div className={styles['modal-body']}>
            {children}
          {/* </div> */}
        {/* </div> */}
      </div>
    )
};