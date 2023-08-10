import React from 'react'
import { useState } from 'react'

function DuckDisplay({featuredDuck}) {
  const [count, setCount] = useState(0)

  function incrementCount(){
    setCount((count) => count + 1)
   
  }


  return (
      <div className="duck-display">
  
        <h2>{featuredDuck.name}</h2>
  
        <img src={featuredDuck.img_url} alt={featuredDuck.name} />
  
        <button onClick={incrementCount}> {featuredDuck.likes + count }  likes</button>
  
      </div>
    
  )
}

export default DuckDisplay

