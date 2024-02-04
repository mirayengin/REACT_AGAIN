import React from "react";
import Mgs from "./components/Mgs";
import data from "./data";

function App() {
  return (
    <div>
      {Mgs({name : "Erhan"})}
      {/* Msg componeneti aslında bir fonksiyon olduğundan böyle de yazılabilir.  */}
   
      <Mgs name="Erhan" age = "32" />
      <Mgs name = "Aslı" age = {27} />
      <Mgs name="Miray" age = "6,5"/>
      <Mgs name = "Engin" age ="2,5"/>
      {/* <Person name={data[0].name} img={data[0].img} tel={data[0].tel} />
      <Person name={data[1].name} img={data[1].img} tel={data[1].tel} />
      <Person name={data[2].name} img={data[2].img} tel={data[2].tel} /> */}

  </div>
  )

}

export default App;
