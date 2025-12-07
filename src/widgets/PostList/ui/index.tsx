import type { IPost } from '~/entities/post';
import styles from './styles.module.scss';
import { PostCard } from '~/entities/post';

interface PostListProps {
    posts: IPost[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  if (posts.length === 0) {
    return <p className={styles['empty-message']}>Нет доступных постов.</p>;
  }

  return (
    <div className={styles['listContainer']}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};