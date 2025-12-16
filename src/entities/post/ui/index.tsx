import styles from './styles.module.scss'
import type { IPost } from '../model';
import { Link } from 'react-router-dom';

export interface PostCardProps {
  children?: React.ReactNode;
  post: IPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post, children }) => {
  return (
    <div className={styles['card']}>
      <Link to={`/posts/${post.id}`}>
        <h3 className={styles['title']}>{post.title}</h3>
        <p className={styles['body']}>{post.body}</p>
      </Link>
      <div className={styles['meta']}>
        Автор: <Link to={`/users/${post.userId}/posts`} className={styles.author}>Jane Doe TODO</Link>
      </div>
      {children}
    </div>
  );
};