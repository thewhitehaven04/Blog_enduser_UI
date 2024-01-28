export function getCommentCountString(commentCount: number): string {
  if (commentCount === 0) {
    return 'No one has left a comment so far. It\'s very silent in here...'
  } else if (commentCount === 1) {
    return '1 comment'
  } else {
    return `${commentCount} comments`
  }
}
