import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import AddProduct from './Component/AddProduct';
import ProductList from './Component/ProductList';
function App() {
  const [productArr, setProductArr] = useState([]);
  const LOCAL_STORAGE_PRODUCTARR="productarr";
  useEffect(() =>{
 const arr =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PRODUCTARR))
 if(arr){
  console.log("fetching data is : " + arr);
  setProductArr(arr);

 }
  },[])

  const addProduct = (obj)=>{
    
    let arr = [...productArr,{...obj}];
    console.log("in add f'n ",arr);
    setProductArr(arr);
   localStorage.setItem(LOCAL_STORAGE_PRODUCTARR,JSON.stringify(arr));
   display();
  }
  const display =()=>{
      console.log("in display metnod");
      const arr =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PRODUCTARR))
      setProductArr(arr);
      console.log("prod arr : ",productArr);
      return <ProductList products={productArr} />
  }

  return (
    <div className="App">
     <AddProduct addHandler={addProduct} products={productArr} />
     {display}
    </div>
  );
}

export default App;
