import styles from './styles.module.scss'
import type { IComment } from '../model';
import type { FC } from 'react';

interface CommentCardProps {
  comment: IComment;
  isCollapsed: boolean;
  onToggle: (id: number) => void;
}

export const CommentCard: FC<CommentCardProps> = ({ 
  comment, 
  isCollapsed, 
  onToggle 
}) => {
  const { id, name, email, body } = comment;

  return (
    <div className={styles['comment-item']}>
      <div className={styles['comment-header']}>
        <div className={styles['comment-author']}>
          <span className={styles['author-name']}>{name}</span>
          <span className={styles['author-email']}>{email}</span>
        </div>
        <button
          className={styles['toggle-button']}
          onClick={() => onToggle(id)}
        >
          {isCollapsed ? 'Развернуть' : 'Свернуть'}
        </button>
      </div>
      { isCollapsed || 
        <div className={styles['comment-body']}>
            {body}
        </div>
      }
    </div>
  );
};

// export const CommentCard: React.FC<{ comment: IComment; }> = ({ comment }) => {
//   return (
//     <div className={styles['card']}>
//       <h3 className={styles['title']}>{comment.title}</h3>
//       <p className={styles['body']}>{comment.body}</p>
//       <div className={styles['meta']}>
//         Автор: <span className={styles.author}>Jane Doe TODO</span>
//       </div>
//     </div>
//   );
// };