import React, { useEffect, useState } from 'react'
import {Button  } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../Redux/cartSlice';


function Cart() {

  const cart=useSelector((state)=>state.cart.cart)

  const [total, settotal] = useState(0)
 const dispatch=useDispatch()

  useEffect(()=>{
  if(cart.length>0){
    settotal(cart.map(product=>product.totalprice).reduce((p1,p2)=>p1+p2).toFixed(2))
  }
  },[])
  return (
   <div className="container" style={{marginTop:'100px'}}>
  {   cart?.length>0?
     <div className="row mt-5">
     <div className="col-lg-8">
       <table className='table shadow'>
         <thead>
           <tr>
             <th>#</th>
             <th>Title</th>
             <th>Image</th>
             <th>Quantity</th>
             <th>Price</th>
             <th>Action</th>
           </tr>
         </thead>
         <tbody>
         { cart?.map((product,index)=>(

              <tr>
              <td>{index+1}</td>
              <td>{product.title}</td>
              <td><img  style={{width:"100%",height:"120px"}} src={product.thumbnail} alt="" /></td>
              <td><input type="text" readOnly value={product?.quantity} style={{width:"25px", textAlign:"center"}} /></td>
              <td className='text-danger fw-bolder'>${product.price}</td>
              <td> <Button style={{color:'white',padding:"10px", backgroundColor:"white"}} className='btn btn-outline-dark'  onClick={() => dispatch(removeFromCart(product.id))}> <i class="fa-solid fa-tarsh"  ></i>🗑️</Button></td>
               </tr>
         ))

           }
          </tbody>
       </table>
       <div className="d-flex justify-content-between">
           <button className='btn btn-danger' onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
           <Link to={'/'} style={{textDecoration:'none'}} className='btn btn-outline-success'>Shop More</Link>
         </div>
     </div>
     <div className="col-lg-1"></div>
     <div className="col-lg-3">
       <div className="container border rounded shadow mt-5 p-5 w-100">
         <h1>Cart Summery</h1>
         <h4>Total Products :{cart.length}</h4>
         <h5>Total: <span className='text-danger fw-bolder'>${total}</span></h5>
       </div>
       <div className="d-grid">
         <Button className='btn btn-success m-3 rounded'>Checkout</Button>
       </div>
     </div>
   </div>
   :<div className='d-flex align-items-center justify-content-center mt-5 p-5'>
   <img  className="p-5" src="data:image/png;base64,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" alt="" />
   <h1>Your Cart is Empty</h1>
  </div>
  
  }
   </div>
  )
}

export default Cart
