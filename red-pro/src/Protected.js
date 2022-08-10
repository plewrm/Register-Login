import React, { useState, useEffect } from 'react';
// import Header from './Header';
import { useNavigate } from 'react-router-dom'
import './App.css';


function Protected(props) {
  let Cmpo=props.Cmp
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      navigate('./register')
    }
  }, [])

  return (
    <div>
<Cmpo/>
    </div>
  );
}

export default Protected;
