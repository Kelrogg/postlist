import styles from './styles.module.scss';

export const LayoutFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        © 2024 FSD Demo. Все права защищены.
      </div>
    </footer>
  );
};