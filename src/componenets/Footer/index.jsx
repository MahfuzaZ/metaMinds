import React from 'react'
import sass from '../c.module.scss'
import logo from '../../pages/img/logo2-removebg-preview (1).png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className={sass.footer}>
         <div className={sass.container}>
         <div className={sass.logo}>
           <img src={logo} alt="" />
        </div>
        <div className={sass.center}>
             <ul>
                <Link to={'/'}>
                  <li>Home</li>
                </Link>
                <Link to={'/user'}>
                  <li>Users</li>
                </Link>
                <Link to={'/register'}>
                  <li>Register</li>
                </Link>
                <Link to={'/login'}> 
                  <li>Log in</li>
                </Link>
             </ul>
        </div>
        <div className={sass.right}>
          <h3>Tel: 3284280320</h3>
          <h2>Address: Tashkent, Mirabad 2,4</h2>
          <h3>Email: bilimheal@gmail.com</h3>
          <h2>Telegram: bilimheal_0202</h2>
        </div>
         </div>
    </div>
  )
}

export default Footer