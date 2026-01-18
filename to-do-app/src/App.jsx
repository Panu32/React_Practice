import React from 'react'

// let x= "Pranav"
// let arr= ["user1","user2","user3"]
const btnClick= () =>{
  console.log("Click")
}
let data= "Boy"
const App = () => {
  return (
    <div>
      {/* {x}
      {arr.map((user)=>{
        return <h2>{user}</h2>
      })} */}

      {/* {data=="Boy" ? <h1>Boy</h1>: <h1> Girl</h1>} */}

      <button onClick={()=>{btnClick()}}>Click me</button>
    </div>
  )
}

export default App