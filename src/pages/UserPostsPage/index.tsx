import { useParams } from 'react-router-dom';
import { PostList } from '~/widgets/PostList';

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <h1>User Posts</h1>
      <p>User ID: {id}</p>
      <PostList isLoading={false} />
    </div>
  );
};