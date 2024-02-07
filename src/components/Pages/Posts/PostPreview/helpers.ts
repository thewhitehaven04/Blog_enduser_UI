export function getPostLink(postId: string): string {
  return `/post/${postId}/comments?offset=0&count=10`
}