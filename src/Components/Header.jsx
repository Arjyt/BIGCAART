import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProducts } from '../Redux/productsSlice';
import { Badge } from 'react-bootstrap';

function Header({ insideHome }) {
  const [wishlistcount, setWishlistCount] = useState(0);
  const [cartcount, setCartCount] = useState(0);

  const { Wishlist } = useSelector((state) => state.WishlistReducer);
  const cart  = useSelector((state) => state.cart.cart);

  useEffect(() => {
    setWishlistCount(Wishlist.length);
  }, [Wishlist]);

  useEffect(() => {
    setCartCount(cart?.length || 0); // Update cart count whenever cart changes
  }, [cart]);

  const dispatch = useDispatch();

  return (
    <div>
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i className="fa-solid fa-store"></i> Big Cart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {insideHome && (
                <Nav.Link as={Link} to="/">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products"
                    style={{ paddingRight: "20px" }}
                    onChange={(e) => dispatch(searchProducts(e.target.value.toLowerCase()))}
                  />
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="/" style={{ paddingLeft: "20px", marginTop: "20px" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/wishlist" style={{ marginTop: "20px" }}>
                Wishlist <i className="fa-solid fa-heart"></i>
                <Badge bg="dark">{wishlistcount}</Badge>
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" style={{ marginTop: "20px" }}>
                Cart <i className="fa-solid fa-cart-shopping"></i>
                <Badge bg="dark">{cartcount}</Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
