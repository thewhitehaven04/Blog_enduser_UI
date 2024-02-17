import type { IValidationInfoProps } from './types'
import * as SC from './styles'
import { FieldValidity } from '../FieldValidity'

export function ValidationInfo({ fields }: IValidationInfoProps): JSX.Element {
  const isEntireFormValid = fields.every((field) => field.isValid)

  return (
    <SC.ValidationInfoWrapper isValid={isEntireFormValid}>
      {fields.map((field) => (
        <FieldValidity
          key={field.name}
          text={field.text}
          isValid={field.isValid}
        />
      ))}
    </SC.ValidationInfoWrapper>
  )
}
