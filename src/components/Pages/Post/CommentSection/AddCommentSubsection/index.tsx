import * as SC from './styles'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { type IAddCommentForm } from 'Pages/Post/CommentSection/AddCommentSubsection/types'
import rehypeSanitize from 'rehype-sanitize'
import MDEditor from '@uiw/react-md-editor'
import { useSubmitComment } from 'Hooks/mutations/submitComment'
import { useParams } from 'react-router-dom'
import { useUserContext } from 'Hooks/context/user'

export function AddCommentSubsection(): JSX.Element {
  const { control } = useForm<IAddCommentForm>()

  const user = useUserContext()

  const { postId } = useParams<'postId'>()
  const { mutate } = useSubmitComment(postId ?? '')

  const handleSubmit: SubmitHandler<IAddCommentForm> = (comment) => {
    mutate(comment)
  }

  return (
    <SC.SubsectionWrapper $alignment='stretch'>
      {user != null ? (
        <form onSubmit={handleSubmit}>
          <span>Comment as user</span>
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
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <span>Please, login to leave comments.</span>
      )}
    </SC.SubsectionWrapper>
  )
}
