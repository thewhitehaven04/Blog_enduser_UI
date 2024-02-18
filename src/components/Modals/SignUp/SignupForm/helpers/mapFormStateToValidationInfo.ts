import type { FieldValues, FormState } from 'react-hook-form'
import type { IFieldValidityProps } from '../components/FieldRequirement/types'

export function mapFormStateToValidationInfo<T extends FieldValues>(
  formState: FormState<T>,
  validationRequirements: Record<keyof T, string>
): Array<IFieldValidityProps & { name: string }> {
  const fields = Object.keys(validationRequirements)

  const fieldsWithErrors = Object.keys(formState.errors)
  const dirtyFields = Object.keys(formState.dirtyFields)

  return fields.map((field) => {
    return {
      name: field,
      isValid: dirtyFields.includes(field)
        ? !fieldsWithErrors.includes(field)
        : null,
      text: validationRequirements[field]
    }
  })
}
