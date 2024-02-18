export function getColor(isValid: boolean | null): string {
  if (isValid === null) {
    return 'black'
  } else if (isValid) {
    return 'green'
  }
  return 'red'
}