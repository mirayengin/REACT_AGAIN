import { useState } from "react";

const UseStateCounter = () => {
  const [count , setCount] = useState(0); //? array destr. setCount yerine istenilen değişken ismi yazılabilir. 1. değer state varible, 2. değer ise setter metotudur.
  const [person, setPerson] = useState({
    name: "John",
    surname: "Doe",
    age : 43
  })
  
  
  const inc = () => {
    return setCount(count + 1)
  }

  const dec = () => {
    return count > 0 && setCount(count - 1)
  }

  const incAge = () => {
    //! bu şekilde ata ile bu sayıyı object in tamamına atıyoruz ve yapısı bozuldu. Sadece 44 görünüyor.
    setPerson(person.age + 1)


    //? obje içindeki bir değeri set ederken bu şekilde yapıyoruz.
    setPerson({...person, age : person.age + 1})
  }

  return (
    <div className="container text-center mt-4">
      <section>
      <h1>USE STATE HOOK</h1>
      <h2 className='display-4 text-danger'>Count : {count} </h2>
      <button onClick={inc} className="btn btn-success">INC</button>
      <button onClick={() => setCount(0)} className="btn btn-dark">CLR</button>
      <button onClick={dec} className="btn btn-danger">DEC</button>
      {/* <button onClick={() => count > 0 && setCount(count - 1)}  className="btn btn-danger">DEC</button> */}
      </section>
      <section>
        <h1>USE STATE OBJECT</h1>
        <h2>{person.name}</h2> 
        <h3>{person.surname}</h3>
        <h4>{person.age}</h4>
        <button onClick={incAge} className="btn btn-info" > INC AGE</button>
      </section>
</div>
)
}

export default UseStateCounter