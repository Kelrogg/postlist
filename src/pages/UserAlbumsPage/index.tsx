import { useParams } from 'react-router-dom';
import { AlbumList } from '~/widgets/AlbumList';
import { useGetAlbumsByUserIdQuery } from '~/entities/album/api';

export const UserAlbumsPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid user ID</div>;
  }
  
  const { isLoading } = useGetAlbumsByUserIdQuery(parseInt(id));
  
  return (
    <div>
      <h1>User Albums</h1>
      <AlbumList userId={parseInt(id)} isLoading={isLoading} />
    </div>
  );
};