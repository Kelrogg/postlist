import styles from './styles.module.scss';
import { TodoCard } from '~/entities/todo/ui';
import { withLoading } from '~/shared/lib/hoc/withLoading';
import { useGetTodosQuery, useGetTodosByUserIdQuery } from '~/entities/todo/api';
import type { ITodo } from '~/entities/todo/model';

interface TodoListProps {
  userId?: number;
  children?: React.ReactNode;
}

const TodoListBase: React.FC<TodoListProps> = ({ userId }) => {
  const { 
    data: todos = [], 
    isLoading, 
    isError, 
    error 
  } = useGetTodosQuery(undefined, {
    skip: userId !== undefined
  });
  
  const { 
    data: userTodos = [], 
    isLoading: isUserTodosLoading, 
    isError: isUserTodosError, 
    error: userTodosError 
  } = useGetTodosByUserIdQuery(userId!, {
    skip: userId === undefined
  });

  const todosToDisplay = userId !== undefined ? userTodos : todos;
  const loading = userId !== undefined ? isUserTodosLoading : isLoading;
  const hasError = userId !== undefined ? isUserTodosError : isError;
  const errorData = userId !== undefined ? userTodosError : error;

  if (hasError) {
    return (
      <div className={styles['error']}>
        Ошибка при получении данных: {errorData ? 'status' in errorData ? `HTTP ${errorData.status}` : errorData.message : 'Неизвестная ошибка'}
      </div>
    );
  }

  if (todosToDisplay.length === 0 && !loading) {
    return <p className={styles['empty-message']}>Нет доступных задач.</p>;
  }

  const renderedTodos = todosToDisplay.map((todo: ITodo) => (
    <TodoCard key={todo.id} todo={todo} />
  ));

  if (loading) {
    return null;
  }

  return (
    <div className={styles['listContainer']}>
      {renderedTodos}
    </div>
  );
};

export const TodoList = withLoading(TodoListBase);