import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import Header from './Header';
import './App.css';



function Register() {
  
  useEffect(()=>
  {
    if (localStorage.getItem('user-info '))
    {
      navigate("/add")
    }
  },[]);

  const [name, setName] = useState("")
  const [password, setpassword] = useState("")
  const [email, setemail] = useState("")
  const [is_edit, setIsEdit] = useState(false)
  const navigate = useNavigate()

  async function signup(e) {
    // e.preventDefault()
    let item = { name, password, email }
   
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
    
    // console.log(item)
    
  }
  
  return (
    <>
    <Header />
    <div className='col-sm-6 offset-sm-3'>
      <h1>Sign in here</h1>
      <input type="text" placeholder='Enter User Name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
      <br />
      <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" />
      <br />
      <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setemail(e.target.value)} className="form-control" />
      <br />
      {/* <button onClick={signup} className="btn btn-primary ">Sign Up</button> */}
      <input className="btn btn-primary " onClick={signup} type="submit" />
    </div>
    </>
  );
}

export default Register;
