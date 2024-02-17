import {
  type PropsWithChildren,
  type ComponentProps
} from 'react'

export interface IValidatedFieldProps extends PropsWithChildren {
  label: string
  labelFor: string
  vertical?: boolean
  required: boolean
  errorMessage?: string | null
}

export interface ILabelProps extends ComponentProps<'label'> {
  $required: boolean
}
