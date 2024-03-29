import { object, string, type ObjectSchema } from 'yup'
import type { ISignUpForm } from './types'

export const SignUpFormSchema: ObjectSchema<ISignUpForm> = object({
  username: string()
    .required()
    .min(2)
    .max(32)
    .test(
      'alphanumeric',
      'Contains only digits, lower- and uppercase characters',
      (value) => {
        const hasNonWordCharacters = Boolean(value.match(/\W/))
        return !hasNonWordCharacters
      }
    ),
  email: string().required().email(),
  password: string().required().trim().min(8).test('secure password', 'Password contains upper-, lowercase charcters and digits', (value) => {
    return value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])^[^ ]+$/) !== null 
  }),
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
  password: 'Password is at least 8 characters long and contains upper- and lowercase characters',
  confirm: 'Password and confirmation match'
}
