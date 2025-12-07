import styles from './styles.module.scss'
import { MainLayout } from '~/shared/layout'
import { PostList } from '~/widgets/PostList'
import { useGetPostsQuery, type IPost } from '~entities/post';

export const App = () => {
      const {
        data: posts,
        isLoading,
        isError,
        error
      } = useGetPostsQuery();

      const postsData: IPost[] =  posts || [];

      if (isLoading) {
        return (
          <div className={styles['loading']}>
            <svg className={styles['statusMessage']} viewBox="0 0 24 24">...</svg>
            Загрузка списка постов...
          </div>
        );
      }

      if (isError) {
        return (
          <div className={styles['error']}>
              Ошибка при получении данных: {'status' in error ? `HTTP ${error.status}` : error.message}
          </div>
        );
      }

      if (!posts || posts.length === 0) {
        return <div className="text-center p-8 bg-yellow-100 text-yellow-700 rounded-lg">Постов пока нет.</div>;
      }

      return (
        <MainLayout>
          <h2 className={styles['mainLayoutContainer']}>
            Демонстрация FSD: Список Постов
          </h2>
          
          <PostList posts={postsData} />
        </MainLayout>
    )}
  