import React, { useState, useEffect } from 'react'
import DuckList from './DuckList'
import DuckDisplay from "./DuckDisplay"
import DuckForm from "./DuckForm"


function App() {

  /*----------------- GETS DATA -----------------------*/
  const [duckData, setDuckData] = useState([])

  useEffect(()=> {
    fetch('http://localhost:4001/ducks')
    .then(response => response.json())
    .then(data => setDuckData(data))
  },[])

  /*----------------- DUCK FORM   -----------------------*/
  function handleClick(){
    setDuckFormOpen(!duckFormOpen)
  }
 /*-----------------  -----------------------*/

  const [featuredDuck, setFeaturedDuck] = useState({})
  const [duckFormOpen, setDuckFormOpen] = useState(true)

  return (
    <div className="App">

      <h1>Duck Manager 2022 - React Edition</h1>

      <DuckList duckData={duckData} setDuckData={setDuckData} setFeaturedDuck={setFeaturedDuck} />

      <DuckDisplay featuredDuck={featuredDuck}/>
      

      <button onClick={handleClick} >{duckFormOpen ? 'Open Duck Form' : 'Close Duck Form' }</button>

      {/* Conditionally display the duck form on the line below depending on whether the duckFormOpen state is true or false... */}
      { duckFormOpen ?  <DuckForm /> :  null}

    </div>
  );
}

export default App;
