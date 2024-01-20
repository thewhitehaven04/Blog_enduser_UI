import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as SC from './styles'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export function SectionLoading(): JSX.Element {
  return (
    <SC.Overlay>
      <FontAwesomeIcon size='2x' spin icon={faSpinner} />
    </SC.Overlay>
  )
}
