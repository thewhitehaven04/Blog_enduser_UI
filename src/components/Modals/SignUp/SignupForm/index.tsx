import {
  type ISignUpFormProps,
  type ISignUpForm
} from 'Components/Modals/SignUp/SignupForm/types'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Modal } from 'Components/Common/Modal'
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
import { Column } from 'Components/Common/Styles/Flex/Column'

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
        <SC.FormContent $pad='s' $spacing='l'>
          <Column $spacing='m'>
            <ValidatedField
              label='Username'
              labelFor='username'
              required
              vertical
            >
              <Input type='text' {...register('username')} width='200px' />
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
              <Input type='password' {...register('password')} width='200px' />
            </ValidatedField>
            <ValidatedField
              label='Confirm password'
              labelFor='confirm'
              required
              vertical
            >
              <Input type='password' {...register('confirm')} width='200px' />
            </ValidatedField>
          </Column>
          <ValidationInfo fields={validationData} />
        </SC.FormContent>
        <Column $alignment='center' $spacing='s'>
          <Button type='submit' onClick={handleSubmit(submitHandler)}>
            Sign up
          </Button>
          <span>
            Already have an account?{' '}
            <LinkLikeButton onClick={switchToLoginHandler}>
              Log in
            </LinkLikeButton>
          </span>
        </Column>
      </form>
    </Modal>
  )
}
