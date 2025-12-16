import { useParams } from 'react-router-dom';
import { AlbumCard } from '~/entities/album/ui';

const ALBUMS = [
  {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "sunt qui excepturi placeat culpa"
  },
]

export const UserAlbumsPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <h1>User Albums</h1>
      {ALBUMS.map(album => <AlbumCard key={album.id} album={album}>{album.title}</AlbumCard>)}
      <p>User ID: {id}</p>
    </div>
  );
};