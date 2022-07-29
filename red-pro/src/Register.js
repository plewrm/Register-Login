import React, {useState} from 'react';

function Register() {
  const [name,setName]= useState("")
  const [password,setpassword]= useState("")
  const [email,setemail]= useState("")
  function signup(){

  }
  return (
    <div className='col-sm-6 offset-sm-3'>
      <h1>Sign in here</h1>
      <input type="text" value={name} onchange={(e)=>setName(e.target.value)} className="form-control"/>
      <br/>
      <input type="text" value={password} onchange={(e)=>setpassword(e.target.value)} className="form-control"/>
<br/>
<input type="text" value={email} onchange={(e)=>setemail(e.target.value)} className="form-control"/>
<br/>
<button onclick={signup} className="btn btn-primary border 1">Sign Up</button>
    </div>
  );
}

export default Register;
