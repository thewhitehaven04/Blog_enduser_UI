import { AppLayout } from 'Components/Layout'
import { PostPage } from 'Pages/Post'
import { PostsPage } from 'Pages/Posts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<PostsPage />} />
          <Route path='posts' element={<PostsPage/>}/>
          <Route path='post/:postId/comments' element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
