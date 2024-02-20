import React from 'react'
import { createContext,useState } from 'react'
export const ThemeContext =createContext();



export const ThemeProvider =({children}) =>{
    const [theme,setTheme] =useState('dark')

    const swithDark =()=>{
        setTheme("dark")
    }

    const switchLight =()=>{
        setTheme("light")
    }

    return(
        <ThemeContext.Provider value={{switchLight,swithDark,theme}}>
            <div className={`${theme}`}>{children}</div>
        </ThemeContext.Provider>
    )
}



