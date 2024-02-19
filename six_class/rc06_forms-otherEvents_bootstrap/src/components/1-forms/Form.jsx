import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault(); //! Bu olay doğal çalışma döngüsünü durdurur bizim kontrolümüze verir mesela form da submit yaptığımzda otomatik sıfırlama yapar ama bunla yapmaz.
    console.log(e.target)
    alert(`
      username: ${username},
      email: ${email},
      password: ${password}
    `)

    setUsername("");
    setEmail("");
    setPassword("")
  }

  const handleUserChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  }





  return (    
    <form onSubmit={handleSubmit}>
      <h1 className="display-5 text-danger">FORMS</h1>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">
      Username : <span>{username}</span> 
    </label>
    <input
      type="text"
      className="form-control"
      id="username"
      //! value property si ilk değer verilmesi durumunda sayfa acçılırken göstermek için önemli ğer bunu yazmazsak bu inputta görülmezdi verdiğimiz ilk değer
      value={username} 
      onChange={handleUserChange}
    />

      </div>
      
      <div className="mb-3">
    <label htmlFor="email" className="form-label">
      Email : <span> {email} </span>
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      value={email} 
      onChange={(e) => setEmail(e.target.value)}
    />

      </div>
      
  <div className="mb-3">
    <label htmlFor="password" className="form-label">
          Password
    </label>
    <input
      type="password"
      className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
    />
  </div>

  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
   
  )
}

export default Form