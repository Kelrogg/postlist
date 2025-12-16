import { useParams } from 'react-router-dom';
import { PostList } from '~/widgets/PostList';

export const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <h1>Post Details</h1>
      <p>Post ID: {id}</p>
    </div>
  );
};