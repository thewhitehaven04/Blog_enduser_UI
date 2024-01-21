import { type IAddCommentForm } from 'Pages/Post/CommentSection/AddCommentForm/types'
import { type ControllerRenderProps } from 'react-hook-form'

export type TCommentEditorProps = Omit<
  ControllerRenderProps<IAddCommentForm, 'text'>,
  'ref'
> & {
  height: number 
}
