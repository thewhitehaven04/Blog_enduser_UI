import { Column } from 'Components/Common/Styles/Column/styles'
import { Row } from 'Components/Common/Styles/Row/styles'
import { Label, ValidationMessage } from 'Components/Common/ValidatedField/styles'
import { type IValidatedFieldProps } from 'Components/Common/ValidatedField/types'

export const ValidatedField = ({
  label,
  labelFor,
  errorMessage,
  required,
  children,
  vertical = false,
}: IValidatedFieldProps): JSX.Element => {
  if (vertical) {
    return (
      <Column>
        <Row $justify='between'>
          <Label htmlFor={labelFor} $required={required}>
            {label}
          </Label>
          {errorMessage != null && (
            <ValidationMessage>{errorMessage}</ValidationMessage>
          )}
        </Row>
        {children}
      </Column>
    )
  }
  return (
    <Column $justify='start'>
      <Row>
        <Label htmlFor={labelFor} $required={required}>
          {label}
        </Label>
        {children}
      </Row>
      {errorMessage != null && (
        <ValidationMessage>{errorMessage}</ValidationMessage>
      )}
    </Column>
  )
}
