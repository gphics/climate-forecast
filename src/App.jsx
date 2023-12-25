import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Climate from './Climate'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/climate' element={<Climate />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
