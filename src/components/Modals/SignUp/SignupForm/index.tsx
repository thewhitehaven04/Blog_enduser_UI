import {
  type ISignUpFormProps,
  type ISignUpForm
} from 'Components/Modals/SignUp/SignupForm/types'
import { type SubmitHandler, useForm, useController } from 'react-hook-form'
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
import { yupResolver } from '@hookform/resolvers/yup'
import { SignUpFormSchema, SignUpSchemaRequirements } from './validation'
import { mapFormStateToValidationInfo } from './helpers/mapFormStateToValidationInfo'
import { ValidationInfo } from './components/ValidationInfo'

export function SignUpForm({
  closeHandler,
  switchToLoginHandler
}: ISignUpFormProps): JSX.Element {
  const { register, formState, handleSubmit } = useForm<ISignUpForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(SignUpFormSchema)
  })

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

  const validationData = mapFormStateToValidationInfo(
    formState,
    SignUpSchemaRequirements
  )

  return (
    <Modal
      title='Sign up'
      subtitle="Let's set up an account for you."
      handleClose={closeHandler}
      containerWidthPx={600}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <SC.FormContent>
          <SC.FormFields>
            <ValidatedField
              label='Username'
              labelFor='username'
              required
              vertical
            >
              <Input type='text' {...register('username')} />
            </ValidatedField>
            <ValidatedField label='Email' labelFor='email' required vertical>
              <Input type='email' {...register('email')} />
            </ValidatedField>
            <ValidatedField
              label='Password'
              labelFor='password'
              required
              vertical
            >
              <Input type='password' {...register('password')} />
            </ValidatedField>
            <ValidatedField
              label='Confirm password'
              labelFor='confirm'
              required
              vertical
            >
              <Input type='confirm' {...register('confirm')} />
            </ValidatedField>
            <Row $justify='center'>
              <Button type='submit' onClick={handleSubmit(submitHandler)}>
                Sign up
              </Button>
            </Row>
          </SC.FormFields>
          <ValidationInfo fields={validationData} />
        </SC.FormContent>
        <span>
          Already have an account?{' '}
          <LinkLikeButton onClick={switchToLoginHandler}>Log in</LinkLikeButton>
        </span>
      </form>
    </Modal>
  )
}
