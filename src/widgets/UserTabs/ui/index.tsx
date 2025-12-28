import { NavLink, useParams } from 'react-router-dom';
import styles from './styles.module.scss';

interface UserTabsProps {
}

// TODO userID
export const UserTabs: React.FC<UserTabsProps> = () => {
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
        // to={`/users/${userId}/posts`} 
        to={`/users/2/posts`} 
        className={({ isActive }) => isActive ? styles.activeTab : styles.tab}
      >
        Посты
      </NavLink>
      <NavLink 
        // to={`/users/${userId}/albums`} 
        to={`/users/2/albums`} 
        className={({ isActive }) => isActive ? styles.activeTab : styles.tab}
      >
        Альбомы
      </NavLink>
      <NavLink 
        // to={`/users/${userId}/todos`} 
        to={`/users/2/todos`} 
        className={({ isActive }) => isActive ? styles.activeTab : styles.tab}
      >
        Задачи
      </NavLink>
    </div>
  );
};