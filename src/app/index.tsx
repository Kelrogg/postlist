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
// [
  // {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  // },
  // {
  //   "userId": 1,
  //   "id": 2,
  //   "title": "qui est esse",
  //   "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  // },
  // {
  //   "userId": 1,
  //   "id": 3,
  //   "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  //   "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  // },
  // {
  //   "userId": 1,
  //   "id": 4,
  //   "title": "eum et est occaecati",
  //   "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  // }] //

      if (isLoading) {
        return (
          <div className="text-center p-8 bg-gray-50 rounded-lg shadow-inner">
            <svg className="animate-spin h-5 w-5 mr-3 text-indigo-500 inline-block" viewBox="0 0 24 24">...</svg>
            Загрузка списка постов...
          </div>
        );
      }

      if (isError) {
        return (
          <div className="text-center p-8 bg-red-100 text-red-700 rounded-lg border border-red-300">
              Ошибка при получении данных: {'status' in error ? `HTTP ${error.status}` : error.message}
          </div>
        );
      }

      if (!posts || posts.length === 0) {
        return <div className="text-center p-8 bg-yellow-100 text-yellow-700 rounded-lg">Постов пока нет.</div>;
      }

      return (
        <MainLayout>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Демонстрация FSD: Список Постов
          </h2>
          
          <PostList posts={postsData} />
        </MainLayout>
    )}
  