import styles from './styles.module.scss';

export const LayoutHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>FSD App: Список Постов</h1>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Главная</a>
        </nav>
      </div>
    </header>
  );
};