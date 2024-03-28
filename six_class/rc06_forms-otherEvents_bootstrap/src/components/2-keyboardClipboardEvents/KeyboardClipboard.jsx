import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setinputValue] = useState("");
  // const [keyDown, setKeyDown] = useState("");

  const handleKeyDown = (e) => {
    console.log(e.keyCode)
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("Please dont enter a number")
      e.preventDefault() //! bunu kullanmasaydık otomatik react uyarı versede rakamı DOM a yazıyordu fakat bununla biz bu davranışını kontrol ediyoruz yani engelliyoruz.
    }

    e.keyCode === 13 && setinputValue("")
    

  }

  const handleAreaPaste = (e) => {
    e.target.style.border ="2px solid red" 
    console.log(e.target.value)
    e.target.value = e.clipboardData.getData("text") //? kopyala yapıştır olayında clipboard da bulunan verileri okumak için kullanılır. BU olayı browser ve bizim projemizde kullanıyor.
    e.preventDefault() //? Browser ın kopyala ypıştırını engellemek için bunu kullanıyoruz yoksaki 2 kere çalışıyor.
    e.target.value += e.clipboardData.getData("text").toLocalLowerCase() //? bunun la her gelen veri eklenir öncekine ve küçük harfle olur.
  }

  return (
    <div className="container text-center">
      <h1>CLIPBOARD EVENTS</h1>
      <input
        className="form-control"
        value={inputValue} //? bu olmaz ise değeri kontrol edemeyiz.(sıfırlama vs)
        type="text"
        // onChange={(e) => (inputValue = e.target.value)} //!tek işlem için parantez çoklu için süslü açıyoruz aşağıdaki gibi yazabiliriz.
        // onChange={(e) => {
        //   inputValue = e.target.value
        //   console.log(inputValue)
        // }}
        // onChange={(e) => setinputValue((e.target.value).toLocaleUpperCase())} //? bunun ile input yazılan p ye büyük harf ile yazılıyor.
        onChange={(e) => { //! bunun ile yazılan her şey input ve p de büyük harf olarak yazılıyor.

          e.target.value = e.target.value.toLocaleUpperCase()
          setinputValue(e.target.value)
        }}
        onKeyDown={handleKeyDown} //? bir rakama basıldığında aski larşılığını almak için bu özeeliği kullandık.
      />

      <p
        onCopy={(e) => {
          e.preventDefault(); //? burada copy işlemini p elementinde engelledik.
          alert("you cant copy document");
        }}
        className="text-start mt-4"
      >
        {inputValue}
      </p>

      <textarea
        className="form-control"
        name="area"
        id="area"
        cols="30"
        rows="10"
        onPaste={handleAreaPaste}

      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
