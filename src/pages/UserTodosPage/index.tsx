import { useParams } from 'react-router-dom';
import { TodoList } from '~/widgets/TodoList';
import { useGetTodosByUserIdQuery } from '~/entities/todo/api';

export const UserTodosPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid user ID</div>;
  }
  
  const { isLoading } = useGetTodosByUserIdQuery(parseInt(id));
  
  return (
    <div>
      <h1>User Todos</h1>
      <TodoList userId={parseInt(id)} isLoading={isLoading} />
    </div>
  );
};