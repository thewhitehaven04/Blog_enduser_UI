import type { IFieldValidityProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as SC from './styles'
import { getIcon } from './helpers/getIcon'

export function FieldRequirement(props: IFieldValidityProps): JSX.Element {
  return (
    <SC.RequirementWrapper
      isValid={props.isValid}
      $justify='start'
      $alignment='baseline'
      $wrap={false}
    >
      <FontAwesomeIcon icon={getIcon(props.isValid)}/>
      <p>{props.text}</p>
    </SC.RequirementWrapper>
  )
}
