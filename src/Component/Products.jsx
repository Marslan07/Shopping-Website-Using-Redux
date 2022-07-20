import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/CartSlice';
import { fetchProductThunk } from '../Store/ProductSlice';
import {STATUSES} from "../Store/ProductSlice"


const Products = () => {
  const dispatch =useDispatch()
  const{data: product,status}=useSelector((state) => state.product);
  // const [product,setProduct]=useState([]);
  useEffect(()=>{
    dispatch(fetchProductThunk());
    // const fetchProduc=async()=>{
    //   const res=await fetch('https://fakestoreapi.com/products');
    //   const data= await res.json();
    //   setProduct(data);
    // }
    // fetchProduc();
  },[])

  const handleAdd=(product)=>{
    dispatch(add(product));
  };


  if (status ===STATUSES.LOADING){
    return <h2 style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      }}> Loading...</h2>
  }

  if (status===STATUSES.ERROR){
    return <h2 style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin:'1rem'}}> Something went wrong!!! </h2>
  }
  
  // if (status===STATUSES.IDLE){
  //   return <h2>Access Successfull! </h2>
  // }
  

  return (
    <div className='productsWrapper'>
      {product.map((product)=>
      <div className="card" key={product.id}>
        <img src={product.image} alt="" />
        <h4>{product.title}</h4>
        <h5>{product.price}</h5>
        <button className='btn' onClick={()=> {handleAdd(product)}}> add to cart </button>
      </div>
      )}

    </div>
  )
}

export default Products