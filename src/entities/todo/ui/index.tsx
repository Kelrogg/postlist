import type { FC } from 'react';
import styles from './styles.module.scss';
import type { ITodo } from '../model';

export interface TodoCardProps {
  todo: ITodo
  children?: React.ReactNode;
}

export const TodoCard: FC<TodoCardProps> = ({ todo }) => {
  return (
    <div className={styles['card']}>
      <h3 className={styles['title']}>{todo.title}</h3>
      <div className={styles['meta']}>
        Status: {todo.completed ? 'Completed' : 'Pending'}
      </div>
      <div className={styles['meta']}>
        User ID: {todo.userId}
      </div>
    </div>
  );
};