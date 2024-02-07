export function getPostLink(postId: string): string {
  return `/posts/${postId}/comments?offset=0&count=10`
}