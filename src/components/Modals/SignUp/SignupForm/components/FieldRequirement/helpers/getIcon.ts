import { faCheckCircle, faExclamationCircle, faXmarkCircle, type IconDefinition } from '@fortawesome/free-solid-svg-icons'

export function getIcon(isValid: boolean | null): IconDefinition {
  if (isValid === null) {
    return faExclamationCircle 
  } else if (isValid) {
    return faCheckCircle
  }
  return faXmarkCircle
}