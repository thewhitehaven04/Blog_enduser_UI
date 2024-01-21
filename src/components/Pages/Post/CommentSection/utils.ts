export function getCommentCountString(commentCount: number): string {
  if (commentCount === 0) {
    return 'No one has left a comment so far.'
  } else if (commentCount === 1) {
    return '1 comment'
  } else {
    return `${commentCount} comments`
  }
}
