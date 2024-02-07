import * as SC from './styles'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { type IAddCommentForm, type IAddCommentFormProps } from 'Pages/Post/CommentSection/AddCommentForm/types'
import { useSubmitComment } from 'Hooks/mutations/submitComment'
import { useUserContext } from 'Hooks/context/user'
import { Row } from 'Components/Common/Styles/Row/styles'
import { AddCommentSchema } from 'Pages/Post/CommentSection/AddCommentForm/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { RippleButton } from 'Components/Button'
import { CommentEditor } from 'Pages/Post/CommentSection/CommentEditor'
import { ErrorText } from 'Components/Common/Styles/Error'

export function AddCommentSubsection({postId}: IAddCommentFormProps): JSX.Element {
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

  const submitHandler: SubmitHandler<IAddCommentForm> = (commentData) => {
    mutate({ postId, text: commentData.text })
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
