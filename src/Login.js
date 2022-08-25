// import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router';
import React, { useState,useEffect } from 'react';

import './App.css';



function Login() {
  const [name, setName] = useState("")
  const [password, setpassword] = useState("")
  const navigate=useNavigate();
  useEffect(()=>
  {
    if(localStorage.getItem('user-info '))
    {
      navigate("/add")
    }
  },[]);

  async function LoginUser(e) {
// e.preventDefault();
    let item = { name, password }
    // console.log(item)
  
    let result = await fetch("http://localhost:3000/Log", {
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

 
  return(
    <>
    <Header />
    <h1>Login Here...!</h1>
    {/* <div className="card col-8 col-lg-6 login-card mt-4 hv-center offset-sm-2"> */}
    <div className='pm-card'>


    {/* <div className="col-sm-6 offset-sm-3"> */}
        
    {/* <form onSubmit={handleSubmit}> */}
    <form >

        <div className="input-container">
    {/* <div className='pm-card'> */}

          <label className='pm-form-label'>Email or Username </label>
          <input type="text" className="pm-form-control" name="uname" required 
          onChange={(e)=>setName(e.target.value)}/>
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label className='pm-form-label'>Password </label>
          <input type="password" className="pm-form-control" name="pass" required
          onChange={(e)=>setpassword(e.target.value)} />
          {/* {renderErrorMessage("pass")} */}
        </div>
        {/* <div className="button-container"> */}
        <div >

          <input type="submit" onClick={LoginUser} className="btn btn-primary "  />
        </div>
      </form>
        {/* <form>
            <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" 
                   className="form-control" 
                   id="email" 
                   aria-describedby="emailHelp" 
                   placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    placeholder="Confirm Password"
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
            >
                Register
            </button>
        </form> */}
    </div>
    </>
)
}


export default Login;
