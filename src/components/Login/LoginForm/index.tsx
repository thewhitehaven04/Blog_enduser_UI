import { ValidatedField } from 'Components/Common/ValidatedField'
import * as SC from './styles'
import { type SubmitHandler, useForm } from 'react-hook-form'
import {
  type ILoginFormProps,
  type ILoginForm
} from 'Components/Login/LoginForm/types'
import { Input } from 'Components/Common/Input/styles'
import { useLogin } from 'Hooks/mutations/login'

export function LoginForm({ handleClose }: ILoginFormProps): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<ILoginForm>()

  const { mutate } = useLogin()

  const submitHandler: SubmitHandler<ILoginForm> = (data) => {
    mutate(data)
  }

  return (
    <SC.FormOverlay>
      <SC.FormWrapper>
        <SC.FormHeaderGrid>
          <SC.CloseIcon
            icon='circle-xmark'
            onClick={() => {
              handleClose()
            }}
          />
          <SC.FormTitle>Login</SC.FormTitle>
          <SC.FormSubtitle>Let's get you logged in.</SC.FormSubtitle>
        </SC.FormHeaderGrid>
        <SC.FormContent>
          <form onSubmit={handleSubmit(submitHandler)}>
            <SC.FormFields>
              <ValidatedField
                label='Username'
                labelFor='username'
                errorMessage={errors.username?.message ?? null}
                required
                vertical
              >
                <Input type='text' {...register('username')} />
              </ValidatedField>
              <ValidatedField
                label='Password'
                labelFor='password'
                errorMessage={errors.username?.message ?? null}
                required
                vertical
              >
                <Input type='password' {...register('password')} />
              </ValidatedField>
            </SC.FormFields>
            <button type='submit' onClick={handleSubmit(submitHandler)}>
              Login
            </button>
          </form>
          <span>Don't have an account? Sign up</span>
        </SC.FormContent>
      </SC.FormWrapper>
    </SC.FormOverlay>
  )
}
