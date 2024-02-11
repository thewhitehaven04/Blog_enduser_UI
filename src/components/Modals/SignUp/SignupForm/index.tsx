import {
  type ISignUpFormProps,
  type ISignUpForm
} from 'Components/Modals/SignUp/SignupForm/types'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Modal } from 'Components/Common/Modal'
import { Row } from 'Components/Common/Styles/Row'
import { ValidatedField } from 'Components/Common/ValidatedField'
import { Input } from 'Components/Common/Input/styles'
import * as SC from './styles'
import { useSignup } from 'Components/Modals/SignUp/SignupForm/hooks/mutateSignup'
import { Button } from 'Components/Common/Button/styles'

export function SignUpForm({
  closeHandler,
  switchToLoginHandler
}: ISignUpFormProps): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<ISignUpForm>()

  const { mutate } = useSignup()

  const submitHandler: SubmitHandler<ISignUpForm> = (data) => {
    mutate(data)
  }

  return (
    <Modal
      title='Sign up'
      subtitle="Let's set up an acoount for you."
      handleClose={closeHandler}
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
              label='Email'
              labelFor='email'
              errorMessage={errors.email?.message ?? null}
              required
              vertical
            >
              <Input type='email' {...register('email')} />
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
              Sign up 
            </Button>
          </Row>
          <span>Already have an account?</span>
          <Button type='button' onClick={switchToLoginHandler}>
            Login
          </Button>
        </SC.FormContent>
      </form>
    </Modal>
  )
}
