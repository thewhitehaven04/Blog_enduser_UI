import { type IFormattedPostDto } from 'Client/posts/types/responses'
import { withLoadingOnInitialFetch } from 'Components/HOC/WithLoadingOnFetch'
import { ShortPostPreview } from 'Pages/Post/ShortPostPreview'

export const LoadedPostList = withLoadingOnInitialFetch<IFormattedPostDto[]>(
  (props) => (
    <>
      {props.value.map(({ id, title, summary }) => (
        <ShortPostPreview key={id} title={title} summary={summary} postId={id} />
      ))}
    </>
  )
)
