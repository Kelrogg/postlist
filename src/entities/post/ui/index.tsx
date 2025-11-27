import styles from './styles.module.scss'
import type { IPost } from '../model';

export const PostCard: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.body}>{post.body}</p>
      <div className={styles.meta}>
        Автор: <span className={styles.author}>Jane Doe TODO</span>
      </div>
    </div>
  );
};