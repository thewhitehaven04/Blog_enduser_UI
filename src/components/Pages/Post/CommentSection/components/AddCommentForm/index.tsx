import * as SC from './styles'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import {
  type IAddCommentForm,
  type IAddCommentFormProps
} from 'Pages/Post/CommentSection/components/AddCommentForm/types'
import { useSubmitComment } from 'Pages/Post/CommentSection/components/AddCommentForm/hooks/mutationSubmitComment'
import { useUserContext } from 'Components/Layout/components/UserContextProvider/hooks/contextUser'
import { Row } from 'Components/Common/Styles/Row'
import { AddCommentSchema } from 'Pages/Post/CommentSection/components/AddCommentForm/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { RippleButton } from 'Components/Common/Button'
import { CommentEditor } from 'Pages/Post/CommentSection/components/CommentEditor'
import { ErrorText } from 'Components/Common/Styles/Error'
import { useToasterEnqueue } from 'Hooks/toasterEnqueue'
import { EToastType } from 'Hooks/context/toaster/types'
import { SUBMIT_HANDLER_ERROR_MESSAGE } from 'Pages/Post/CommentSection/components/AddCommentForm/constants'

export function AddCommentSubsection({
  postId
}: IAddCommentFormProps): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<IAddCommentForm>({
    resolver: yupResolver(AddCommentSchema)
  })
  const user = useUserContext()
  const { mutate } = useSubmitComment()
  const { toast } = useToasterEnqueue()

  const submitHandler: SubmitHandler<IAddCommentForm> = (commentData) => {
    mutate(
      { postId, text: commentData.text },
      {
        onError: () => {
          toast({ type: EToastType.ERROR, text: SUBMIT_HANDLER_ERROR_MESSAGE })
        },
        onSuccess: () => {
          toast({ type: EToastType.SUCCESS, text: 'Comment added' })
        }
      }
    )
  }

  useEffect(() => {
    reset()
  }, [isSubmitSuccessful, reset])

  return (
    <>
      {user != null ? (
        <form onSubmit={handleSubmit(submitHandler)}>
          <SC.SubsectionWrapper>
            <span>Comment as {user.username}</span>
            <Controller
              name='text'
              control={control}
              rules={{ required: true }}
              render={({ field: { ref, ...rest } }) => (
                <CommentEditor {...rest} height={250} />
              )}
            />
            {errors.text != null && (
              <ErrorText>{errors.text.message}</ErrorText>
            )}
            <Row>
              <RippleButton type='submit'>Submit</RippleButton>
            </Row>
          </SC.SubsectionWrapper>
        </form>
      ) : (
        <span>Please, sign in to leave comments</span>
      )}
    </>
  )
}
