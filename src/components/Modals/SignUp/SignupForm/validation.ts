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
        return !hasNonWordCharacters
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
    'Username is between 2 and 32 characters long and contains only characters (a-z, A-Z, 0-9)',
  email: 'Valid email',
  password: 'Password is at least 8 characters long',
  confirm: 'Password and confirmation match'
}
