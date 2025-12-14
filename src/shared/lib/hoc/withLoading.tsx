import styles from './styles.module.scss';

interface WithLoadingProps {
  isLoading: boolean;
}

export const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function ComponentWithLoading(props: P & WithLoadingProps) {
    const { isLoading, ...rest } = props;

    if (isLoading) {
      return (
        <div className={styles['loading']}>
          <div className={styles['spinner']} />
          <span>Загрузка...</span>
        </div>
      );
    }

    return <WrappedComponent {...(rest as P)} />;
  };
};