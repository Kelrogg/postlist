import styles from './styles.module.scss';
import { AlbumCard } from '~/entities/album/ui';
import { withLoading } from '~/shared/lib/hoc/withLoading';
import { useGetAlbumsQuery, useGetAlbumsByUserIdQuery } from '~/entities/album/api';
import type { IAlbum } from '~/entities/album/model';

interface AlbumListProps {
  userId?: number;
  children?: React.ReactNode;
}

const AlbumListBase: React.FC<AlbumListProps> = ({ userId }) => {
  const { 
    data: albums = [], 
    isLoading, 
    isError, 
    error 
  } = useGetAlbumsQuery(undefined, {
    skip: userId !== undefined
  });
  
  const { 
    data: userAlbums = [], 
    isLoading: isUserAlbumsLoading, 
    isError: isUserAlbumsError, 
    error: userAlbumsError 
  } = useGetAlbumsByUserIdQuery(userId!, {
    skip: userId === undefined
  });

  const albumsToDisplay = userId !== undefined ? userAlbums : albums;
  const loading = userId !== undefined ? isUserAlbumsLoading : isLoading;
  const hasError = userId !== undefined ? isUserAlbumsError : isError;
  const errorData = userId !== undefined ? userAlbumsError : error;

  if (hasError) {
    return (
      <div className={styles['error']}>
        Ошибка при получении данных: {errorData ? 'status' in errorData ? `HTTP ${errorData.status}` : errorData.message : 'Неизвестная ошибка'}
      </div>
    );
  }

  if (albumsToDisplay.length === 0 && !loading) {
    return <p className={styles['empty-message']}>Нет доступных альбомов.</p>;
  }

  const renderedAlbums = albumsToDisplay.map((album: IAlbum) => (
    <AlbumCard key={album.id} album={album} />
  ));

  if (loading) {
    return null;
  }

  return (
    <div className={styles['listContainer']}>
      {renderedAlbums}
    </div>
  );
};

export const AlbumList = withLoading(AlbumListBase);