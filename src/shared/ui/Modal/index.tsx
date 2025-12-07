import { createPortal } from 'react-dom';
import { Button } from '../Button';
import styles from './styles.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
        <div className={styles['modal-header']}>
          <h2>{title}</h2>
          <Button variant="secondary" size="small" onClick={onClose}>
            ✕
          </Button>
        </div>
        <div className={styles['modal-body']}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};