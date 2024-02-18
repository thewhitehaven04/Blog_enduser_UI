import { Row } from 'Components/Common/Styles/Flex/Row'
import { toRelativeDate } from 'Pages/Post/CommentSection/components/Comment/helpers'
import {
  type ICommentEditForm,
  type ICommentProps
} from 'Pages/Post/CommentSection/components/Comment/types'
import * as SC from './styles'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState } from 'react'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'
import { CommentEditor } from 'Pages/Post/CommentSection/components/CommentEditor'
import { LinkLikeButton } from 'Components/Common/LinkLikeButton/styles'
import { useUserContext } from 'Components/Layout/components/UserContextProvider/hooks/contextUser'
import { yupResolver } from '@hookform/resolvers/yup'
import { CommentEditFormSchema } from 'Pages/Post/CommentSection/components/Comment/validation'
import { ErrorText } from 'Components/Common/Styles/Error'
import { useUpdateComment } from 'Pages/Post/CommentSection/components/Comment/hooks/mutationUpdateComment'
import { useDeleteComment } from 'Pages/Post/CommentSection/components/Comment/hooks/mutationDeleteComment'
import {
  DELETE_HANDLER_ERROR_MESSAGE,
  UPDATE_HANDLER_ERROR_MESSAGE
} from 'Pages/Post/CommentSection/components/Comment/constants'

export function Comment({
  author,
  text,
  created,
  postId,
  id: commentId
}: ICommentProps): JSX.Element {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const user = useUserContext()
  const canShowControls = user?.username === author

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ICommentEditForm>({
    defaultValues: {
      text
    },
    resolver: yupResolver(CommentEditFormSchema)
  })

  const toggleEditState = (): void => {
    setIsEditing(!isEditing)
  }

  const displayError = (errorMessage: string): void => {
    setErrorMessage(errorMessage)
  }

  const clearErrors = (): void => {
    setErrorMessage('')
  }

  const deleteCommentHandler = (): void => {
    deleteComment(
      { commentId },
      {
        onSuccess: () => {
          toggleEditState()
          clearErrors()
        },
        onError: () => {
          displayError(DELETE_HANDLER_ERROR_MESSAGE)
        }
      }
    )
  }

  const submitEditHandler: SubmitHandler<ICommentEditForm> = (
    editCommentData
  ) => {
    updateComment(
      { commentId, body: editCommentData },
      {
        onSuccess: () => {
          toggleEditState()
          clearErrors()
        },
        onError: () => {
          displayError(UPDATE_HANDLER_ERROR_MESSAGE)
        }
      }
    )
  }

  const { mutate: updateComment } = useUpdateComment(postId)
  const { mutate: deleteComment } = useDeleteComment(postId)

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
            <ErrorText>
              {errors.text?.message ?? errorMessage}
            </ErrorText>
          </>
        ) : (
          <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
        )}
        <SC.CommentControlsWrapper>
          {canShowControls && !isEditing && (
            <LinkLikeButton onClick={toggleEditState}>
              Edit comment
            </LinkLikeButton>
          )}
          {canShowControls && isEditing && (
            <LinkLikeButton type='submit'>Save changes</LinkLikeButton>
          )}
          {canShowControls && (
            <>
              <LinkLikeButton type='button' onClick={deleteCommentHandler}>
                Delete
              </LinkLikeButton>
            </>
          )}
        </SC.CommentControlsWrapper>
      </SC.CommentWrapper>
    </form>
  )
}
