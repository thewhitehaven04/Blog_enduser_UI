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
import { LinkLikeButton } from 'Components/Common/LinkLikeButton/styles'
import { useToasterEnqueue } from 'Hooks/toasterEnqueue'
import { EToastType } from 'Hooks/context/toaster/types'
import { SIGNUP_SUCCESS_MSG } from './constants'

export function SignUpForm({
  closeHandler,
  switchToLoginHandler
}: ISignUpFormProps): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<ISignUpForm>()

  const { mutate: signUp } = useSignup()

  const { toast } = useToasterEnqueue()

  const submitHandler: SubmitHandler<ISignUpForm> = (data) => {
    signUp(data, {
      onSuccess: () => {
        toast({ type: EToastType.SUCCESS, text: SIGNUP_SUCCESS_MSG })
        switchToLoginHandler()
      },
      onError: (err) => {
        toast({ type: EToastType.ERROR, text: err.message })
      }
    })
  }

  return (
    <Modal
      title='Sign up'
      subtitle="Let's set up an account for you."
      handleClose={closeHandler}
      containerWidthPx={300}
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
          <span>
            Already have an account?{' '}
            <LinkLikeButton onClick={switchToLoginHandler}>
              Log in
            </LinkLikeButton>
          </span>
        </SC.FormContent>
      </form>
    </Modal>
  )
}
