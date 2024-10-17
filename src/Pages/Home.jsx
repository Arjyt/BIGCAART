import React, { useEffect } from 'react';
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../Redux/productsSlice';
import { addTowishList } from '../Redux/wishListslice';
import { addToCart } from '../Redux/cartSlice';
import Header from '../Components/Header';

function Home() {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.productReducer);
  const { Wishlist } = useSelector((state) => state.WishlistReducer);
  const cart = useSelector((state) => state.cart.cart); // ✅ Corrected access to cart state

  console.log(loading);
  console.log(products);
  console.log(error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleWishlist = (product) => {
    const existingProduct = Wishlist.find(item => item?.id === product?.id);
    if (existingProduct) {
      alert("Item already exists in wishlist");
    } else {
      dispatch(addTowishList(product));
    }
  };

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
   
    <>
    
    <div style={{display:"flex",  justifyContent:"center"}}>
      {
        
          loading?

          <div className='text-center mt-5'>
              <Spinner animation="border" variant="dark" /> Loading ...
              
          </div>
        :

        <Row className='mt-2 container  '>
        {
           products?.length>0?products.map((product,index)=>(

            <Col className='mt-5' sm={12} md={6} lg={4} xl={3} style={{}}>
          <Card style={{ width: '18rem', height:'410px' }}>
            <Link to={`/view/${product.id}`}>
            <Card.Img variant="top" style={{width:"100%",height:"200px"}} src={product.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title style={{minHeight:"90px"}}>{product.title}</Card.Title>
              <Card.Text>
               {product.description.slice(0,20)}...
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button style={{
                  backgroundColor:"orange"
                }} onClick={()=>handleWishlist(product)}>
                  ❤️
                </Button>
                <Button style={{backgroundColor:"#edd1e0"}}  onClick={()=>handleAddToCart(product)}>
                🛒
                </Button>
              </div>

              
            </Card.Body>
          </Card>
        </Col>

           )):
           <p>Nothing to display</p>
          }

      </Row>}
    </div>
    </>
  )
}


export default Home
