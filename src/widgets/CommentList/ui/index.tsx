import React, { useState, useCallback, useMemo } from 'react';
import styles from './styles.module.scss';
import { CommentCard } from '~/entities/comment/ui';
import type { IComment } from '~/entities/comment/model';
import { Button } from '~/shared/ui/Button';
import { useGetCommentsByPostIdQuery } from '~/entities/comment/api';
import { withLoading } from '~/shared/lib/hoc/withLoading';

interface CommentListProps {
  postId: number;
}

const CommentListBase: React.FC<CommentListProps> = ({ postId }) => {
  const { 
    data: comments = [], 
    isLoading, 
    isError, 
    error 
  } = useGetCommentsByPostIdQuery(postId);
  
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };

  const [collapsedComments, setCollapsedComments] = useState<Record<number, boolean>>({});

  const toggleComment = useCallback((id: number) => {
    setCollapsedComments(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  if (isError) {
    return (
      <div className={styles['error']}>
        Ошибка при получении комментариев: {error ? 'status' in error ? `HTTP ${error.status}` : error.message : 'Неизвестная ошибка'}
      </div>
    );
  }

  if (comments.length === 0 && !isLoading) {
    return <p className={styles['no-comments']}>Нет комментариев.</p>;
  }

  if (isLoading) {
    return null;
  }

  return (
    <div className={styles['comment-list']}>
      <div className={styles['comment-list-header']}>
        <h3 className={styles['comment-list-title']}>Комментарии ({comments.length})</h3>
        <Button onClick={toggleCollapse}
          className={`${styles['collapse-icon']} ${isCollapsed ? styles['rotated'] : ''}`}
          >
          &#9660;
        </Button>
      </div>
      {isCollapsed || comments.map(comment => (
        <CommentCard
          key={comment.id}
          comment={comment}
          isCollapsed={!!collapsedComments[comment.id]}
          onToggle={toggleComment}
        />
      ))}
    </div>
  );
};

export const CommentList = withLoading(CommentListBase);