import { useState } from "react";

const UseStateCounter = () => {
  const [count , setCount] = useState(0); //? array destr. setCount yerine istenilen değişken ismi yazılabilir. 1. değer state varible, 2. değer ise setter metotudur.
  const inc = () => {
    return setCount(count + 1)
  }

  const dec = () => {
    return count > 0 && setCount(count - 1)
  }

  return (
    <div className="container text-center mt-4">
      <h1>USE STATE HOOK</h1>
      <h2 className='display-4 text-danger'>Count : {count} </h2>
  <button onClick={inc} className="btn btn-success">INC</button>
  <button onClick={() => setCount(0)} className="btn btn-dark">CLR</button>
      <button onClick={dec} className="btn btn-danger">DEC</button>
      {/* <button onClick={() => setCount(count - 1)}  className="btn btn-danger">DEC</button> */}
  </div>
)
}

export default UseStateCounter