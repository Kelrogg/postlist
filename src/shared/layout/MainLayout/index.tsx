import styles from './styles.module.scss';
import { LayoutHeader } from "~/widgets/LayoutHeader/ui";
import { LayoutFooter } from "~/widgets/LayoutFooter/ui";
import { UserTabs } from '~/widgets/UserTabs';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <LayoutHeader />
      <UserTabs />
      <main className={styles.mainContent}>
        {children}
      </main>
      <LayoutFooter />
    </div>
  );
};