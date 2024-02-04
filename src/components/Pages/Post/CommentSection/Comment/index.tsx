import { Row } from 'Components/Common/Styles/Row/styles'
import { toRelativeDate } from 'Pages/Post/CommentSection/Comment/helpers'
import {
  type ICommentEditForm,
  type ICommentProps
} from 'Pages/Post/CommentSection/Comment/types'
import * as SC from './styles'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState } from 'react'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'
import { CommentEditor } from 'Pages/Post/CommentSection/CommentEditor'
import { LinkLikeButton } from 'Components/Common/LinkLikeButton/styles'
import { UseCommentMutationContext } from 'Hooks/context/commentMutation'
import { useUserContext } from 'Hooks/context/user'
import { yupResolver } from '@hookform/resolvers/yup'
import { CommentEditFormSchema } from 'Pages/Post/CommentSection/Comment/validation'
import { ErrorText } from 'Components/Common/Styles/Error'

export function Comment({
  author,
  text,
  created,
  id: commentId
}: ICommentProps): JSX.Element {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const user = useUserContext()
  const canShowControls = user?.username === author

  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm<ICommentEditForm>({
    defaultValues: {
      text
    },
    resolver: yupResolver(CommentEditFormSchema)
  })

  const { updateComment, deleteComment } = UseCommentMutationContext()

  const handleToggleEditState = (): void => {
    setIsEditing(!isEditing)
  }

  const deleteCommentHandler = (): void => {
    deleteComment({ commentId })
  }

  const submitEditHandler: SubmitHandler<ICommentEditForm> = (
    editCommentData
  ) => {
    handleToggleEditState()
    updateComment({ commentId, body: editCommentData })
    clearErrors()
  }

  return (
    <form onSubmit={handleSubmit(submitEditHandler)}>
      <SC.CommentWrapper>
        <Row $alignment='center'>
          <SC.AuthorName>{author}</SC.AuthorName>
          <SC.CommentDate>{toRelativeDate(created)}</SC.CommentDate>
        </Row>
        {isEditing ? (
          <>
            <Controller
              control={control}
              name='text'
              render={({ field: { ref, ...restField } }) => (
                <CommentEditor {...restField} height={100} />
              )}
            />
            <ErrorText>{errors.text?.message}</ErrorText>
          </>
        ) : (
          <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
        )}
        <SC.CommentControlsWrapper>
          {canShowControls && !isEditing && (
            <LinkLikeButton onClick={handleToggleEditState}>
              Edit comment
            </LinkLikeButton>
          )}
          {canShowControls && isEditing && (
            <LinkLikeButton type='submit'>Save changes</LinkLikeButton>
          )}
          {canShowControls && (
            <LinkLikeButton onClick={deleteCommentHandler}>
              Delete
            </LinkLikeButton>
          )}
        </SC.CommentControlsWrapper>
      </SC.CommentWrapper>
    </form>
  )
}
