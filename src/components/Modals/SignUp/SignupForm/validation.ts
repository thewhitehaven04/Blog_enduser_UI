import { object, string, type ObjectSchema } from 'yup'
import type { ISignUpForm } from './types'

export const SignUpFormSchema: ObjectSchema<ISignUpForm> = object({
  username: string()
    .required()
    .min(2)
    .max(32)
    .test(
      'alphanumeric',
      'Has digits, lower- and uppercase characters',
      (value) => {
        const hasNonWordCharacters = Boolean(value.match(/\W/))
        return hasNonWordCharacters
      }
    ),
  email: string().required().email(),
  password: string().required().trim().min(8),
  confirm: string()
    .required()
    .test(
      'Confirm is equal to password',
      'Confirmation password must be equal to the password itself',
      (value, context) => {
        return value === context.parent.password
      }
    )
})

export const SignUpSchemaRequirements: Record<keyof ISignUpForm, string> = {
  username:
    'Username must be between 2 and 32 characters long and contain only alphanumeric characters (lower- and uppercase letters and numbers)',
  email: 'Must be a valid email',
  password: 'Must be at least 8 characters long',
  confirm: 'Password and confirmation must match'
}
