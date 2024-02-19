import { ValidatedField } from 'Components/Common/ValidatedField'
import * as SC from './styles'
import { type SubmitHandler, useForm } from 'react-hook-form'
import {
  type ILoginFormProps,
  type ILoginForm
} from 'Components/Modals/Login/LoginForm/types'
import { Input } from 'Components/Common/Input/styles'
import { useLogin } from 'Components/Modals/Login/LoginForm/hooks/mutateLogin'
import { Row } from 'Components/Common/Styles/Flex/Row'
import { Modal } from 'Components/Common/Modal'
import { useState } from 'react'
import { ErrorText } from 'Components/Common/Styles/Error'
import { LinkLikeButton } from 'Components/Common/LinkLikeButton/styles'
import { RippleButton } from 'Components/Common/Button'
import { useToasterEnqueue } from 'Hooks/toasterEnqueue'
import { EToastType } from 'Hooks/context/toaster/types'
import { LOGIN_SUCCESS_MSG } from './constants'
import { Column } from 'Components/Common/Styles/Flex/Column'

export function LoginForm({
  closeHandler,
  switchToSignUpHandler
}: ILoginFormProps): JSX.Element {
  const { mutate } = useLogin()
  const { toast } = useToasterEnqueue()
 
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<ILoginForm>()
  const [loginError, setLoginError] = useState<string | null>(null)

  const submitHandler: SubmitHandler<ILoginForm> = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast({ type: EToastType.SUCCESS, text: LOGIN_SUCCESS_MSG })
        closeHandler()
      },
      onError: (err) => {
        setLoginError(err.message)
      }
    })
  }

  return (
    <Modal
      handleClose={closeHandler}
      title='Login'
      subtitle="Let's log you in."
      containerWidthPx={300}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <SC.FormContent $pad='s' $spacing='m'>
          <Column $spacing='m'>
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
          </Column>
          <Row $justify='center'>
            <RippleButton type='submit' onClick={handleSubmit(submitHandler)}>
              Login
            </RippleButton>
          </Row>
          <span>
            Here for the first time?{' '}
            <LinkLikeButton onClick={switchToSignUpHandler}>
              Sign up
            </LinkLikeButton>
          </span>
          {loginError != null && <ErrorText>{loginError}</ErrorText>}
        </SC.FormContent>
      </form>
    </Modal>
  )
}
