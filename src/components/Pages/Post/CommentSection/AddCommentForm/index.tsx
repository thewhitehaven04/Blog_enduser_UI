import * as SC from './styles'
import { Controller, type SubmitHandler, useForm, Form } from 'react-hook-form'
import { type IAddCommentForm } from 'Pages/Post/CommentSection/AddCommentForm/types'
import rehypeSanitize from 'rehype-sanitize'
import MDEditor from '@uiw/react-md-editor'
import { useSubmitComment } from 'Hooks/mutations/submitComment'
import { useParams } from 'react-router-dom'
import { useUserContext } from 'Hooks/context/user'
import { Row } from 'Components/Common/Styles/Row/styles'
import { AddCommentSchema } from 'Pages/Post/CommentSection/AddCommentForm/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'

export function AddCommentSubsection(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<IAddCommentForm>({
    resolver: yupResolver(AddCommentSchema)
  })

  const user = useUserContext()

  const { postId } = useParams<'postId'>()
  const { mutate } = useSubmitComment(postId ?? '')

  const submitHandler: SubmitHandler<IAddCommentForm> = (commentData) => {
    mutate(commentData)
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
              render={({ field }) => (
                <MDEditor
                  previewOptions={{
                    rehypePlugins: [[rehypeSanitize]]
                  }}
                  {...field}
                />
              )}
            />
            {errors.text != null && (
              <SC.ErrorText>{errors.text.message}</SC.ErrorText>
            )}
            <Row>
              <button type='submit'>Submit</button>
            </Row>
          </SC.SubsectionWrapper>
        </form>
      ) : (
        <span>Please, sign in to leave comments.</span>
      )}
    </>
  )
}
