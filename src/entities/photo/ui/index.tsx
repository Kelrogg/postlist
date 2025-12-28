import type { FC } from 'react';
import styles from './styles.module.scss';
import type { IPhoto } from '../model';
import { transformPlaceholderUrl } from '~/shared/lib/jsonplaceholderfix';

export interface PhotoCardProps {
  photo: IPhoto;
}

export const PhotoCard: FC<PhotoCardProps> = ({ photo }) => {
  return (
    <div className={styles['card']}>
      <img 
        src={transformPlaceholderUrl(photo.url)} 
        alt={photo.title} 
        className={styles['thumbnail']}
      />
      <h3 className={styles['title']}>{photo.title}</h3>
      <div className={styles['meta']}>
        Photo ID: {photo.id}
      </div>
    </div>
  );
};