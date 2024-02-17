import { Row } from 'Components/Common/Styles/Row'
import type { IFieldValidityProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'
import * as SC from './styles'

export function FieldValidity(props: IFieldValidityProps): JSX.Element {
  return (
    <SC.ValidityFieldWrapper isValid={props.isValid}>
      <Row $justify='start'>
        {props.isValid ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faExclamation} />
        )}
        <span>{props.text}</span>
      </Row>
    </SC.ValidityFieldWrapper>
  )
}
