// import logo from './logo.svg';
import React from 'react'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import AddProduct from './AddProduct'
import Login from './Login'
import UpdateProduct from './UpdateProduct'
import Register from './Register'
import {BrowserRouter,Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Welcome to this</h1>
        <Routes>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/add" element={<AddProduct/>}></Route>
          <Route path="/update" element={<UpdateProduct/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
