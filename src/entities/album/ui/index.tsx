import type { FC } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import type { IAlbum } from '../model';

export interface AlbumCardProps {
  album: IAlbum
  children?: React.ReactNode;
}

export const AlbumCard: FC<AlbumCardProps> = ({ album }) => {
  return (
    <div className={styles['card']}>
      <Link to={`/albums/${album.id}/photos`}>
        <h3 className={styles['title']}>{album.title}</h3>
      </Link>
      <div className={styles['meta']}>
        Album ID: {album.id}
      </div>
    </div>
  );
};