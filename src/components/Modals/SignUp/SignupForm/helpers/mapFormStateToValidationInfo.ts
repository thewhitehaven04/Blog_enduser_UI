import type { FieldValues, FormState } from 'react-hook-form'
import type { IFieldValidityProps } from '../components/FieldValidity/types'

export function mapFormStateToValidationInfo<T extends FieldValues>(
  formState: FormState<T>,
  validationRequirements: Record<keyof T, string> 
): Array<IFieldValidityProps & { name: string }> {
  const fields = Object.keys(validationRequirements) 
  const fieldsWithErrors = Object.keys(formState.errors)

  return fields.map((field) => {
    return {
      name: field,
      isValid: !fieldsWithErrors.includes(field),
      text: validationRequirements[field]
    }
  })
}
