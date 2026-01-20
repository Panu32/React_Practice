import React, { useState } from 'react'
import FirstComponent from './Components/firstComponent.jsx';
// let x= "Pranav"
// let arr= ["user1","user2","user3"]

const App = () => {

  const [x, setx] = useState(0);
  const btnClick = () => {
    console.log("Click")
    setx(x + 1)
  }
  let data = "Boy"
  return (
    <div>
      {/* {x}
      {arr.map((user)=>{
        return <h2>{user}</h2>
      })} */}

      {/* {data=="Boy" ? <h1>Boy</h1>: <h1> Girl</h1>} */}


      <button onClick={() => { btnClick() }}>Click me</button>
      <FirstComponent data={x} fn={setx} />
    </div>
  )
}

export default App