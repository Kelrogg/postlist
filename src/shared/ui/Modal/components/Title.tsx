import styles from '../styles.module.scss';

export interface ModalTitleProps {
  children?: React.ReactNode;
}

export const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
  return <h2> {children} </h2>;
};