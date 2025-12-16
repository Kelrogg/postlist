import styles from './styles.module.scss';

interface PostLengthFilterProps {
  range: { min: number; max: number };
  onFilterChange: (minLength: number, maxLength: number) => void;
}

export const PostLengthFilter: React.FC<PostLengthFilterProps> = ({ range, onFilterChange }) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    onFilterChange(value, range.max);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    onFilterChange(range.min, value);
  };

  return (
    <div className={styles['filter-container']}>
      <h3 className={styles['filter-title']}>Фильтр по длине заголовка</h3>
      <div className={styles['filter-controls']}>
        <div className={styles['filter-input-group']}>
          <label htmlFor="minLength">Мин. длина:</label>
          <input
            id="minLength"
            type="number"
            value={range.min}
            onChange={handleMinChange}
            className={styles['filter-input']}
            min="0"
          />
        </div>
        <div className={styles['filter-input-group']}>
          <label htmlFor="maxLength">Макс. длина:</label>
          <input
            id="maxLength"
            type="number"
            value={range.max}
            onChange={handleMaxChange}
            className={styles['filter-input']}
            min="0"
          />
        </div>
      </div>
    </div>
  );
};