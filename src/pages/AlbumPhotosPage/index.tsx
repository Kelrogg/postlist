import { useParams } from 'react-router-dom';
import { PhotoList } from '~/widgets/PhotoList';
import { useGetPhotosByAlbumIdQuery } from '~/entities/photo/api';

export const AlbumPhotosPage = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <div>Invalid album ID</div>;
  }
  
  const { isLoading } = useGetPhotosByAlbumIdQuery(parseInt(id));
  
  return (
    <div>
      <h1>Album Photos</h1>
      <PhotoList albumId={parseInt(id)} isLoading={isLoading} />
    </div>
  );
};