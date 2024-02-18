import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type IInlineLoadingProps } from 'Components/Common/InlineLoading/types'
import { Row } from '../Styles/Flex/Row'

export function InlineLoading({
  loadingText
}: IInlineLoadingProps): JSX.Element {
  return (
    <Row $spacing='xs'>
      <FontAwesomeIcon spin icon={faSpinner} />
      {loadingText}
    </Row>
  )
}
