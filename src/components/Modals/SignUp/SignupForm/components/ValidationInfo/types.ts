import { type IFieldValidityProps } from '../FieldRequirement/types'

export interface IValidationInfoProps {
  fields: Array<IFieldValidityProps & { name: string }>
}
