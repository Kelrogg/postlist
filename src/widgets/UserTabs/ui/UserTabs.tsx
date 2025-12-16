import { NavLink, useParams } from 'react-router-dom';
import styles from './styles.module.scss';

interface UserTabsProps {
//   userId: string;
}

export const UserTabs: React.FC<UserTabsProps> = ({ /* userId */ }) => {
  const { userId } = useParams();
  return (
    <div className={styles.tabs}>
      <NavLink 
        to={`/posts`} 
        className={({ isActive }) => isActive ? styles.activeTab : styles.tab}
      >
        Все посты
      </NavLink>
      <NavLink 
        to={`/users/${userId}/posts`} 
        className={({ isActive }) => isActive ? styles.activeTab : styles.tab}
      >
        Посты
      </NavLink>
      <NavLink 
        to={`/users/${userId}/albums`} 
        className={({ isActive }) => isActive ? styles.activeTab : styles.tab}
      >
        Альбомы
      </NavLink>
      <NavLink 
        to={`/users/${userId}/todos`} 
        className={({ isActive }) => isActive ? styles.activeTab : styles.tab}
      >
        Задачи
      </NavLink>
    </div>
  );
};