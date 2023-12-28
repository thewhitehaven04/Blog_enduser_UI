import { CommentSection } from 'Components/CommentSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/post/:postId' element={<CommentSection/>}/>
    </Routes>
  </BrowserRouter>
)
