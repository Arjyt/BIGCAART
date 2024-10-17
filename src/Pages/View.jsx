import React, { useEffect, useState } from 'react'
import {  Button,Card, Spinner} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addTowishList } from '../Redux/wishListslice';
import { addToCart } from '../Redux/cartSlice';


function View() {
  const cart = useSelector((state) => state.cart.cart); // ✅ Corrected access to cart state
  const {id}=useParams() // to get parameters in url
  console.log(id);
  const [product, setproduct] = useState({})
  const [added, setadded] = useState(null)
  const{loading}=useSelector((state=>state.productReducer))

  const{ Wishlist}=useSelector((state)=>state.WishlistReducer)
  const dispatch=useDispatch()


  useEffect(()=>{
     const products=JSON.parse(localStorage.getItem("products"))
     setproduct(products?.find(product=>product?.id==id))
     console.log(product);
     
  },[])


  const handleWishlist=(product)=>{
    const existingproduct= Wishlist.find(item=>item?.id==product?.id)
    if(existingproduct){
      alert("item already exist in wishlist")
    }
    else{
      dispatch(addTowishList(product))
      setadded(true)
    }
  }

  const handleAddToCart = (product) => {
    const existingProduct = cart?.find(item => item?.id === product.id); // ✅ Corrected to use strict equality
    if (existingProduct) {
      alert("Item quantity increased in cart");
      dispatch(addToCart(product)); // This might update quantity in the reducer

    } else {
      dispatch(addToCart(product));
      alert("Product added successfully");
    }
  };
  return (
    loading?<div>
       <Spinner animation="border" varient="warning"/>Loading....
    </div>:
    <div className='container row' style={{marginTop:'100px'}}>
      <div className="col lg-5">
        <img style={{width:'100%',height:"400px", marginLeft:"100px",marginTop:"2px",paddingBottom:"90px"}} src={product.thumbnail} alt="" />
      </div>
      <div className="col lg-1"></div>
      <div className="col lg-6">
        <p>Pid:{product.id}</p>
        <h1>{product.title}</h1>
        <h5>{product.description}</h5>
        <button style={{width:"80px",margin:"10px", backgroundColor:"red",color:"white",marginLeft:"0"}}>{product.price} $</button>
        <div className="d-flex justify-content-between mt-4">
          <Button style={{color:'white'}} className='btn btn-outline-danger'onClick={()=>handleWishlist(product)}>{added?"wishlisted":"❤️wishlist"}</Button>
          <Button style={{color:'white'}} className='btn btn-outline-warning' onClick={()=>handleAddToCart(product)}> 🗑️Add to Cart</Button>
        </div>
      </div>
      
    </div>
  )
}

export default View
