import styles from './styles.module.scss';
import { PhotoCard } from '~/entities/photo/ui';
import { withLoading } from '~/shared/lib/hoc/withLoading';
import { useGetPhotosByAlbumIdQuery } from '~/entities/photo/api';
import type { IPhoto } from '~/entities/photo/model';

interface PhotoListProps {
  albumId: number;
  children?: React.ReactNode;
}

const PhotoListBase: React.FC<PhotoListProps> = ({ albumId }) => {
  const { 
    data: photos = [], 
    isLoading, 
    isError, 
    error 
  } = useGetPhotosByAlbumIdQuery(albumId);

  if (isError) {
    return (
      <div className={styles['error']}>
        Ошибка при получении данных: {error ? 'status' in error ? `HTTP ${error.status}` : error.message : 'Неизвестная ошибка'}
      </div>
    );
  }

  if (photos.length === 0 && !isLoading) {
    return <p className={styles['empty-message']}>Нет доступных фотографий.</p>;
  }

  const renderedPhotos = photos.map((photo: IPhoto) => (
    <PhotoCard key={photo.id} photo={photo} />
  ));

  if (isLoading) {
    return null;
  }

  return (
    <div className={styles['listContainer']}>
      {renderedPhotos}
    </div>
  );
};

export const PhotoList = withLoading(PhotoListBase);