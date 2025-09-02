import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='/posts' > 
        <Route index element={<Posts />} />
        <Route path=':id' element={<Post />} />
      </Route>
    </Routes>
  )
}

export default App
