import { useParams } from 'react-router-dom';
import { useGetPostsByUserIdQuery } from '~/entities/post';
import { PostList } from '~/widgets/PostList';

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>();

  const userId = id ? parseInt(id) : 2;

  const {
    data: posts,
    isLoading,
    isError,
    error
  } = useGetPostsByUserIdQuery(userId);

  return (
    <div>
      <h1>User Posts</h1>
      <p>User ID: {id}</p>
      <PostList isLoading={isError} posts={posts}/>
    </div>
  );
};