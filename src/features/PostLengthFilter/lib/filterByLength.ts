import type { IPost } from '~/entities/post';

export const filterByLength = (posts: IPost[], minLength: number, maxLength: number): IPost[] => {
  return posts.filter(post => {
    const titleLength = post.title.length;
    return titleLength >= minLength && titleLength <= maxLength;
  });
};