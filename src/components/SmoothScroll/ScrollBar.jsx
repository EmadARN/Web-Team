import React, { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar'

var options ={
    damping :0.07
}

const ScrollBar = () => {
    useEffect(()=>{
Scrollbar.init(document.body,options)

    },[])
  return null
}

export default ScrollBar