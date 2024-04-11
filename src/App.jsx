import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  Home
} from './pages'



function App() {

  return (
    <div className='bg-black min-h-screen w-full'>
      <Router>
        <Routes>
          <Route path='/gsapfrom' element={<GsapFrom />}/>
          <Route path='/gsapfromto' element={<GsapFromTo />}/>
          <Route path='/gsapscrolltrigger' element={<GsapScrollTrigger />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
