import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type IInlineLoadingProps } from 'Components/Common/InlineLoading/types'
import * as SC from './styles'

export function InlineLoading({
  loadingText
}: IInlineLoadingProps): JSX.Element {
  return (
    <SC.Wrapper>
      <FontAwesomeIcon spin icon={faSpinner} />
      {loadingText}
    </SC.Wrapper>
  )
}
