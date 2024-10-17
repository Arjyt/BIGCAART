import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <style>
        {
          `
                      
              footer {
                background-color: #343a40; 
                height:280px;
                margin-top:20px;
              }

              footer h5 {
                font-size: 1.2rem;
                color: #f8f9fa;
              }

              footer a {
                text-decoration: none;
              }

              footer a:hover {
                text-decoration: underline;
              }

              footer ul {
                padding-left: 0;
              }

              footer ul li {
                margin-bottom: 5px;
              }

              footer ul li a {
                color: #f8f9fa;
              }

              footer ul li a:hover {
                color: #adb5bd;
              }

              hr {
                border-top: 1px solid #adb5bd;
              } `
        }
      </style>
      <Container>
        <Row>
          {/* Column 1 - About */}
          <Col md={4}>
            <h5 className="mb-3">Big Cart</h5>
            <p>Your one-stop solution for all your shopping needs. Explore a wide range of products at the best prices.</p>
          </Col>

          {/* Column 2 - Quick Links */}
          <Col md={4}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/wishlist" className="text-light">Wishlist</Link></li>
              <li><Link to="/cart" className="text-light">Cart</Link></li>
              <li><Link to="/contact" className="text-light">Contact Us</Link></li>
            </ul>
          </Col>

          {/* Column 3 - Social Media */}
          <Col md={4}>
            <h5 className="mb-3">Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com" className="text-light"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
              <li><a href="https://www.instagram.com" className="text-light"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
              <li><a href="https://www.twitter.com" className="text-light"><i className="fa-brands fa-twitter"></i> Twitter</a></li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2024 Big cart. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
