import { type IFieldValidityProps } from '../FieldValidity/types'

export interface IValidationInfoProps {
  fields: Array<IFieldValidityProps & { name: string }>
}
