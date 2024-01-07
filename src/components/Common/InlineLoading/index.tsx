import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type IInlineLoadingProps } from 'Components/Common/InlineLoading/types'

export function InlineLoading({
  loadingText
}: IInlineLoadingProps): JSX.Element {
  return (
    <span>
      <FontAwesomeIcon spin icon='spinner' />
      {loadingText}
    </span>
  )
}
