export interface ISignUpForm {
  username: string
  password: string
  email: string
}

export interface ISignUpFormProps {
  closeHandler: () => void 
  switchToLoginHandler: () => void
}