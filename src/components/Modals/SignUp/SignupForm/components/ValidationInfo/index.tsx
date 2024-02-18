import type { IValidationInfoProps } from './types'
import * as SC from './styles'
import { FieldRequirement } from '../FieldRequirement'

export function ValidationInfo({ fields }: IValidationInfoProps): JSX.Element {
  const isEntireFormValid = fields.every((field) => field.isValid)

  return (
    <SC.ValidationInfoWrapper isValid={isEntireFormValid} $spacing='xs' $pad='s'>
      {fields.map((field) => (
        <FieldRequirement
          key={field.name}
          text={field.text}
          isValid={field.isValid}
        />
      ))}
    </SC.ValidationInfoWrapper>
  )
}
