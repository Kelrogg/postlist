import { useGetPostsQuery } from '~/entities/post';

export const usePosts = () => {
  const { data: posts = [], isLoading, isError, error } = useGetPostsQuery();
  
  return {
    posts,
    isLoading,
    isError,
    error
  };
};