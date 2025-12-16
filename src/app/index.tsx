import styles from './styles.module.scss'
import { MainLayout } from '~/shared/layout'
import { PostList } from '~/widgets/PostList'

export const App = () => {
      return (
        <MainLayout>
          <h2 className={styles['mainLayoutContainer']}>
            Демонстрация FSD: Список Постов
          </h2>
          
          <PostList />
        </MainLayout>
    )}
  