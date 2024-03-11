import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar_Home from './NavBar_Home'
import BodyPart from './BodyPart'
import Download from './Download'
import Support from './Support'
import SignUp from './SignUp'
import Login from './Login'

function Routing() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<><NavBar_Home/> <BodyPart/></>}/>
            <Route path='/download' element={<><Download/></>}/>
            <Route path='/support' element={<><Support/></>}/>
            <Route path='/signup' element={<><SignUp/></>}/>
            <Route path='/login' element={<><Login/></>}/>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing