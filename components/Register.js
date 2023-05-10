import React, { useState } from "react";

const Register = ({ onRegister }) => {

  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");

  const registerUser = (event) => {
    event.preventDefault();

    if (!firstname) {
      alert('First Name Is Required')
    }else if (!surname) {
      alert('Surname Is Required')
    }else{
      onRegister({ firstname, surname })
      setFirstname('')
      setSurname('')
    }
  };

  return (
    <div className="p-4">
        <form onSubmit={registerUser}>
            <div className="form-group mb-4">
                <label htmlFor="firstname">First Name</label>
                <input type="text" className="form-control" id="firstname" value={firstname}
                 onChange={(event) => setFirstname(event.target.value)} />
            </div>

            <div className="form-group mb-4">
                <label htmlFor="surname">Surname</label>
                <input type="text" className="form-control" id="surname" value={surname}
                onChange={(event) => setSurname(event.target.value)} />
            </div>

            <button type="submit" className="btn btn-secondary">Register</button>

        </form>
    </div>
  )
}

export default Register