function DuckListCard({duck, setFeaturedDuck}) {

  function handleClick(){
    setFeaturedDuck(duck)
    console.log('clicked')
  }
  return (
      <img onClick={handleClick} src={duck.img_url} alt={duck.name} />
  
  )
}

export default DuckListCard
