import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Register() {
  const [name, setName] = useState("")
  const [password, setpassword] = useState("")
  const [email, setemail] = useState("")
  const navigate = useNavigate()
  async function signup() {
    let item = { name, password, email }
    // console.log(item)
    let result = await fetch("http://localhost:3000/Data", {
      method: 'POST',
      headers: {
        "content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    })
    result = await result.json();
    console.log(result)
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add")
  }
  return (
    <div className='col-sm-6 offset-sm-3'>
      <h1>Sign in here</h1>
      <input type="text" placeholder='Enter User Name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
      <br />
      <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" />
      <br />
      <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setemail(e.target.value)} className="form-control" />
      <br />
      <button onClick={signup} className="btn btn-primary ">Sign Up</button>
    </div>
  );
}

export default Register;
