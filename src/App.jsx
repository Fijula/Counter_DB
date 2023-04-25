import React, { useEffect, useState } from 'react'
import Title from './Title'
import "./App.css"



function App() {
const[toggle,setToggle]=useState(true)
const username="Rahul";

const handleToggle=(prev)=>{
setToggle(!prev)
}
  return (
    <div>

{toggle && <Title userName={username}/>}
<button onClick={(()=>{handleToggle(toggle)})}>Toggle</button>
    </div>
  )
}

export default App
