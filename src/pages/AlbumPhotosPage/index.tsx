import { useParams } from 'react-router-dom';

export const AlbumPhotosPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <h1>Album Photos</h1>
      <p>Album ID: {id}</p>
    </div>
  );
};