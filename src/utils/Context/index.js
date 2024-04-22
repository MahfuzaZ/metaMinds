import React from 'react'
import { createContext, useState } from "react";

export const userContext = createContext()


function Context({children}) {
    const [register, setregister] = useState([])
    const [login, setLogin] = useState({auth: false})
    const [theme, settheme] = useState(false)
     const change =(data)=>{
        setregister(data)
    }

    const getLogin =(user)=>{
        setLogin(user)
    }
  return (
    <div>
        <userContext.Provider value={{register, setregister, change, getLogin, login, theme, settheme}}>
            {children}
        </userContext.Provider>
    </div>
  )
}

export default Context