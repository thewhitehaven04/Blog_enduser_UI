import MDEditor, {
  type ICommand,
  getCommands,
  comment
} from '@uiw/react-md-editor'
import { image } from '@uiw/react-md-editor'
import { type TCommentEditorProps } from 'Pages/Post/CommentSection/CommentEditor/types'
import rehypeSanitize from 'rehype-sanitize'

const EXCLUDED_COMMANDS = [image, comment]
const COMMANDS = getCommands().filter(
  (command) => !EXCLUDED_COMMANDS.includes(command)
)
const EXTRA_COMMANDS: ICommand[] = []

export function CommentEditor(props: TCommentEditorProps): JSX.Element {
  return (
    <MDEditor
      commands={COMMANDS}
      extraCommands={EXTRA_COMMANDS}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]]
      }}
      preview='edit'
      {...props}
    />
  )
}
