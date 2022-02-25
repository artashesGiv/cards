import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Login} from './components/Login/Login'
import {Layout} from './components/Layout/Layout'
import {TestPage} from './components/TestPage/TestPage'
import {Profile} from './components/Profile/Profile'
import {PasswordRecovery} from './components/Password/PasswordRecovery'
import {NewPassword} from './components/Password/NewPassword'
import {ErrorPage} from './components/ErrorPage/ErrorPage'

export const App = () => {
   return (
      <Routes>
         <Route path={'/'} element={<Layout/>}>
            <Route index element={<Login/>}/>
            <Route path={'profile'} element={<Profile/>}/>
            <Route path={'test'} element={<TestPage/>}/>
            <Route path={'password-recovery'} element={<PasswordRecovery/>}/>
            <Route path={'new-password'} element={<NewPassword/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
         </Route>
      </Routes>
   )
}

