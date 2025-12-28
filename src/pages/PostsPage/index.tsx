import { PostList } from '~/widgets/PostList';
import { AlbumList } from '~/widgets/AlbumList';
import { useGetAlbumsQuery } from '~/entities/album/api';
import { usePosts } from '~/features/PostList/model';

export const PostsPage = () => {
  const {
    posts,
    isLoading,
  } = usePosts();
  
  return (
    <div>
      <PostList isLoading={isLoading} posts={posts} />
    </div>
  );
};