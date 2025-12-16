import { useParams } from 'react-router-dom';

export const UserTodosPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <h1>User Todos</h1>
      <p>User ID: {id}</p>
    </div>
  );
};