export function transformPlaceholderUrl(originalUrl: string): string {
  const url = new URL(originalUrl);

  const path = url.pathname;

  return `https://placehold.co${path}/png`;
}