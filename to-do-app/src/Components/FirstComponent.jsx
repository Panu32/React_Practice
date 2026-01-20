import React from 'react'

const FirstComponent = ({data,fn}) => {
  return (
    <div>
      <h1  onClick={()=>{fn(data+100)}}>Set to 10</h1>
      {data}
    </div>
  )
}

export default FirstComponent