import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export const Layout = () => {

   const headerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      listStyle: 'none',
      width: '25%',

   }

   return (
      <>
         <header>
            <ul style={headerStyle}>
               <li><Link to={'/'}>login</Link></li>
               <li><Link to={'profile'}>profile</Link></li>
               <li><Link to={'test'}>test</Link></li>
               <li><Link to={'password-recovery'}>password recovery</Link></li>
               <li><Link to={'new-password'}>new password</Link></li>
               <li><Link to={'test'}>test</Link></li>
            </ul>
         </header>
         <div>
            <Outlet/>
         </div>
      </>
   )
}
