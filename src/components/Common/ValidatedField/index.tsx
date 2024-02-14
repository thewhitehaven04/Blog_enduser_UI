import { Column } from 'Components/Common/Styles/Column'
import { Row } from 'Components/Common/Styles/Row'
import { type IValidatedFieldProps } from 'Components/Common/ValidatedField/types'
import * as SC from './styles'

export const ValidatedField = ({
  label,
  labelFor,
  errorMessage,
  required,
  children,
  vertical = false
}: IValidatedFieldProps): JSX.Element => {
  if (vertical) {
    return (
      <Column>
        <Row $justify='between'>
          <SC.Label htmlFor={labelFor} $required={required}>
            {label}
          </SC.Label>
          {errorMessage != null && (
            <SC.ValidationMessage>{errorMessage}</SC.ValidationMessage>
          )}
        </Row>
        {children}
      </Column>
    )
  }
  return (
    <Column $justify='start'>
      <Row>
        <SC.Label htmlFor={labelFor} $required={required}>
          {label}
        </SC.Label>
        {children}
      </Row>
      {errorMessage != null && (
        <SC.ValidationMessage>{errorMessage}</SC.ValidationMessage>
      )}
    </Column>
  )
}
