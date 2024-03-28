import { useState } from "react";

const MouseEvent = () => {
    const [showHint, setshowHint] = useState(false);
    const [toogle, settoogle] = useState(false)

    const [coordX, setCoordX] = useState("");
    const [coordY, setCoordY] = useState("")

    const handleDoubleClick = (e) => {
        settoogle(!toogle)

        toogle
            ? (e.target.className = "bg-success text-light w-50 p-4 mt-4")
            : (e.target.className = "bg-danger text-light w-50 p-4 mt-4");
    };


    const handleMouseMove = (e) => { 
        setCoordX(e.nativeEvent.offsetX); //? bu nativeEvent ile elementi noktasal olarak event liyoruz.
        setCoordY(e.nativeEvent.offsetY);
        // setCoordX(e.pageX); //! bu sayfa içindeki noktayı veriyor.
        // setCoordY(e.pageY);
    };


  return (
      <div className="container text-center d-flex flex-column align-items-center mt-4">
          <h2 className="text-danger">MOUSE EVENTS</h2>

          <div
              id="todo-1"
              className="bg-success text-light w-50 p-4"
              onMouseOut={() => setshowHint(false)}  
              onMouseEnter ={() => setshowHint(true)}
          >
              todo item 1 - onMouseEnter/onMouseOut
          </div>
          {showHint && <p>Hello React</p>}
          {/* //? Burada biz tru veya false olmasına göre bu p elementini DOM a basılmasını sağladık. Şart ve ya koşul olduğu için hemen jsx alanına süslü açtık ve bu koşulun çalışmasını sağladık. */}
        

          <div
              id="todo-2"
              className="bg-success text-light w-50 p-4 mt-4"
              onDoubleClick = {handleDoubleClick}
          >
              todo item 2 - onDoubleClick
          </div>




          <div
              id="todo-3"
              className="bg-success text-light w-50 p-4 my-4"
              onMouseMove = {handleMouseMove}

          >
              todo item 3 - onMouseMove
          </div>

          <p>X and Y</p>
          <p className="text-danger fw-bold">
            {coordX}    {coordY}
          </p>
      </div>
  );
};

export default MouseEvent;
