import React from 'react'
import { useEffect } from 'react'
import "./Title.css"
function Title({userName}) {


    useEffect(()=>{
        const interval = setInterval(
          ()=>{
        console.log("Rendering..")
          },1000
        )
        return()=>{
        clearInterval(interval)
        console.log("Unmounting...")
          }
         },[])

  return (
    <div> 
       <h1>Welcome To this Page <span>{userName}</span></h1> 
        </div>
  )
}

export default Title