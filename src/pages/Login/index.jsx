import React from 'react'
import sass from '../main.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../../utils/Context'
function Login() {
   const {theme} = useContext(userContext)
  const notify = () => toast("Error password or email");
  const error = ()=>{
    toast.error("Error password or email", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  const nav = useNavigate()
   const {change, getLogin, register} = useContext(userContext)
   const submit =(a)=>{
      a.preventDefault()
      const fd = new FormData(a.target)
      for (let i = 0; i < register.length; i++) {
         if (fd.get('email') === register[i].email && fd.get('password') === register[i].password) {
            nav('/users')
            getLogin(register[i])
         }else{
            error()
         }
        
      }
   }
  return (
    <div className={theme ? `dark ${sass.login}` : `${sass.login}`}>
        <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
        <h3 className={theme ? `dark ${sass.h3}` : `${sass.h3}`}>Login</h3>
        <form onSubmit={submit} action="">
           <input name='email' required type="text" placeholder='email' />
           <input name='password' required type="password" placeholder='password' />
           <button>Submit</button>
        </form>
    </div>
  )
}

export default Login  