import { useState } from "react";

const Formobject = () => {

  return (
    <form >
      <h1 className="display-5 text-danger">FORM OBJECT</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span className="text-danger"></span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email : <span className="text-danger"></span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"

        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password : <span className="text-danger"></span>
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
   
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Formobject;
