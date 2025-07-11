import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ARView from './pages/ARView'
import Products from './pages/Products'
import Profile from './pages/Profile'
// import { Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='min-h-full bg-gradient-to-tr from-[#667eea] to-[#764ba2]'>
      < Navbar />
      <Routes>
        {/* <Home /> */}
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/arview' element={<ARView />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>

    </div>
  )
}

export default App