import React from 'react'
import DuckListCard from './DuckListCard'

function DuckList({duckData, setDuckData, setFeaturedDuck}) {
  return (

    <div className="duck-nav">
      {duckData.map(duck => <DuckListCard key={duck.id} duck={duck}  setFeaturedDuck={setFeaturedDuck}/> )}
    </div>

  )
}

export default DuckList
