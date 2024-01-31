import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
      </header>

    )
  }
}

export default Header //default şeklinde export ettiğimde diğer yerlerde sadeceimport ederek bu componenti kullanabiliyoruz ve ayrıva diğer kullanılan yerlerde bu default export yapılan component farklı isim verilerekde kullanılıyor.