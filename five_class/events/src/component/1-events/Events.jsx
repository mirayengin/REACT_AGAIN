

const Events = () => {
  const handleClick = () => {
    alert("Button click")
   
  }




  return (
    <div className="container text-center mt-4">
      <button onClick={handleClick} className="btn btn-success">Click</button>
    </div>
  )
}

export default Events