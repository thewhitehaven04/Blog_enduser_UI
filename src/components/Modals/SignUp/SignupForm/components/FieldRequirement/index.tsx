import type { IFieldValidityProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'
import * as SC from './styles'

export function FieldRequirement(props: IFieldValidityProps): JSX.Element {
  return (
    <SC.RequirementWrapper
      isValid={props.isValid}
      $justify='start'
      $alignment='baseline'
      $wrap={false}
    >
      {props.isValid ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faExclamation} />
      )}
      <p>{props.text}</p>
    </SC.RequirementWrapper>
  )
}
