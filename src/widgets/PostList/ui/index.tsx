import type { IPost } from '~/entities/post';
import styles from './styles.module.scss';
import { PostCard, useGetPostsQuery } from '~/entities/post';
import { withLoading } from '~/shared/lib/hoc/withLoading';
import { useMemo, useState } from 'react';
import { CommentList } from '~/widgets/CommentList';
import { filterByLength, PostLengthFilter } from '~/features/PostLengthFilter';
import { usePosts } from '~/features/PostList/model';


interface PostListProps {
  children?: React.ReactNode;
}

const PostListBase: React.FC<PostListProps> = () => {
  const [range, setRange] = useState({min: 0, max: 20});
  
  const {
    posts,
    isLoading,
    isError,
    error
  } = usePosts();

  // const posts: IPost[] =  postsData || [];

  if (isError) {
    // TODO typing for error
    return (
      <div className={styles['error']}>
          Ошибка при получении данных: {'status' in error! ? `HTTP ${error.status}` : error!.message}
      </div>
    );
  }

  const filteredPosts = useMemo(() => {
    return filterByLength(posts, range.min, range.max);
  }, [posts, range]);

  const renderedPosts = useMemo(() => {
    if (filteredPosts.length === 0) {
      return <p className={styles['empty-message']}>Нет доступных постов.</p>;
    }

    return filteredPosts.map(post => (
      <PostCard key={post.id} post={post}>
        <CommentList postId={post.id} />
      </PostCard>
    ));
  }, [posts, range]);

  if (isLoading) {
    return null;
  }

  return (
    <div className={styles['listContainer']}>
      <PostLengthFilter range={range} onFilterChange={(min, max) => {
        setRange({min, max});
      }}></PostLengthFilter>
      {renderedPosts}
    </div>
  );
};

export const PostList = withLoading(PostListBase);