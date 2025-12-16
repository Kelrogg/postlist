import { PostList } from '~/widgets/PostList';

export const PostsPage = () => {
  return (
    <div>
      {/* <h1>All Posts</h1> */}
      <PostList isLoading={false} />
    </div>
  );
};