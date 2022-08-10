// import logo from './logo.svg';
// import React, { Fragment } from 'react'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Header';
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import { BrowserRouter, Routes, Route,Switch } from 'react-router-dom'
import Protected from './Protected';
import ProductList from './ProductList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
          <Routes>
            <Route path="/Login" element={<Login />}></Route>
            
            <Route path="/register" element={<Register />}></Route>
            

            <Route path="/add" element={<Protected  Cmp={AddProduct}/>}/>
            <Route path="/update/:id" element={<Protected  Cmp={UpdateProduct}/>}/>
            
            <Route path="/" element={<ProductList/>}></Route>
            </Routes>
            
          
           
      </BrowserRouter>
    </div>
  );
}

export default App;
