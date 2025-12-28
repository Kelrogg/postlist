import { useParams } from 'react-router-dom';
import { CommentList } from '~/widgets/CommentList';
import { useGetCommentsByPostIdQuery } from '~/entities/comment/api';

export const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <div>Invalid post ID</div>;
  }
  
  const { isLoading } = useGetCommentsByPostIdQuery(parseInt(id));
  
  return (
    <div>
      <h1>Post Details</h1>
      <p>Post ID: {id}</p>
      <CommentList postId={parseInt(id)} isLoading={isLoading} />
    </div>
  );
};