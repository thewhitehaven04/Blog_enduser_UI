import { PostPage } from 'Pages/Post'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/post/:postId' element={<PostPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
