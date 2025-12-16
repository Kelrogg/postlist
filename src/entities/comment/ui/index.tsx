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
  isCollapsed = true, 
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