import { useState } from "react";

const Formobject = () => {

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password : ""
  })

  const { username, email, password } = formValues; //! destr

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    alert(`
      username: ${username},
      email: ${email},
      password: ${password}
    `)

  }

  const handleForm = (e) => {
    console.log(e.target)
  }







  return (    
    <form onSubmit={handleSubmit}>
      <h1 className="display-5 text-danger">FORMS OBJECT 1.DERS BİTTİ</h1>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">
      Username : <span>{username}</span> 
    </label>
    <input
      type="text"
      className="form-control"
      id="username"
      value={username} 
      onChange={handleForm}
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
      onChange={handleForm}
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
          onChange={handleForm}
    />
  </div>

  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
   
  )
}

export default Formobject;
