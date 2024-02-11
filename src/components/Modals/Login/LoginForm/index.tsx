import { ValidatedField } from 'Components/Common/ValidatedField'
import * as SC from './styles'
import { type SubmitHandler, useForm } from 'react-hook-form'
import {
  type ILoginFormProps,
  type ILoginForm
} from 'Components/Modals/Login/LoginForm/types'
import { Input } from 'Components/Common/Input/styles'
import { useLogin } from 'Components/Modals/Login/LoginForm/hooks/mutateLogin'
import { Row } from 'Components/Common/Styles/Row'
import { Modal } from 'Components/Common/Modal'
import { Button } from 'Components/Common/Button/styles'

export function LoginForm({
  closeHandler,
  switchToSignUpHandler
}: ILoginFormProps): JSX.Element {
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
    <Modal
      handleClose={closeHandler}
      title='Login'
      subtitle="Let's log you in."
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <SC.FormContent>
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
          <Row $justify='center'>
            <Button type='submit' onClick={handleSubmit(submitHandler)}>
              Login
            </Button>
          </Row>
          <span>Here for the first time?</span>
          <Button type='button' onClick={switchToSignUpHandler}>
            Sign up
          </Button>
        </SC.FormContent>
      </form>
    </Modal>
  )
}
