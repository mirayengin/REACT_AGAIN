

const Events = () => {
  let  message = "EVENT BASED PRORAMING";



  const handleClick = () => {
    alert("Button click")
   
  }

  const handleClear = (msg) => {
    alert(msg)
  }

  const handleChange = (event) => {
    console.log(event.target)
    let message = "REACT"
    console.log(message)
    //! event'lar dahili olarak gelir ve fonksiyondan göndermemize gerek yok sadece event için
  }




  return (
    <div className="container text-center mt-4">
      <h1>{ message}</h1>
      <button onClick={handleClick} className="btn btn-success">Click</button>
      
      <button onClick={() => handleClear("Clear Btn Cliked")} className="btn btn-dark" >Clear</button>
      {/* <button onClick={handleClear("Clear Btn Cliked")} className="btn btn-dark" >Clear</button> bu yazımda fonksiyon her refresh de cağırılır ve kendi kendine calışır click olmadan */}
      
      <button onClick={handleChange} className="btn btn-danger">Change</button>
    </div>
  )
}

export default Events