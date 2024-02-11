export interface ILoginForm {
  username: string
  password: string
}

export interface ILoginFormProps {
  closeHandler: () => void 
  switchToSignUpHandler: () => void
}