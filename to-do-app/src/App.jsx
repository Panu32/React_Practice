import React, { useRef, useState } from 'react'
import FirstComponent from './Components/firstComponent.jsx';
// let x= "Pranav"
// let arr= ["user1","user2","user3"]

const App = () => {
  
  const [data,setData] = useState([])
  const inputRef= useRef(null);

  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={()=>{setData([...data,inputRef.current.value])}}> Submit </button>
      {data.map((item,index)=>{return <h2 key= {index}>{item}</h2>})}
    </div>
  )
}

export default App