import styles from './styles.module.scss';
import { LayoutHeader } from "~/widgets/LayoutHeader/ui";
import { LayoutFooter } from "~/widgets/LayoutFooter/ui";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <LayoutHeader />
      <main className={styles.mainContent}>
        {children}
      </main>
      <LayoutFooter />
    </div>
  );
};