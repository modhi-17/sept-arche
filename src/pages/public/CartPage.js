// import React, { useState } from "react";
// import Cards from "../../components/public/Cards";
// import Cart from "../../components/public/Cart";
// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (article) => {
//     const itemIndex = cartItems.findIndex((item) => item.id === article.id);
//     console.log(addToCart);

//     if (itemIndex !== -1) {
//       const updatedCart = [...cartItems];
//       updatedCart[itemIndex].quantity += 1;
//       setCartItems(updatedCart);
//     } else {
//       setCartItems([...cartItems, { ...article, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (article) => {
//     const updatedCart = cartItems.filter((item) => item.id !== article.id);
//     setCartItems(updatedCart);
//   };

//   return (
//     <div>
//       <Cards addToCart={addToCart} />
//       <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
//     </div>
//   );
// };

// export default CartPage;


import Cart from "../../components/public/Cart";
import NavigationBar from '../../components/public/NavigationBar'
import Footer from '../../components/public/Footer';
import Cards from "../../components/public/Cards";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';

const CartPage = () => {
  
    const [cartItems, setCartItems] = useState([]);
   
  
  return (

<div>
      <h1>Ma Boutique</h1>
      <Cards cartItems={cartItems} setCartItems={setCartItems} />
      
    </div>



    // <Container fluid>
    //   <Row>
    //     <Col>
    //       <NavigationBar />
    //     </Col>
    //   </Row>
    //   <Row className="justify-content-center">
    //     <Col xs={12} md={6}>
    //       <Cart />
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col>
    //       <Footer />
    //     </Col>
    //   </Row>
    // </Container>
  );
};






// const CartPage = () => {
//   return (
//     <div className="cartpage">
//       <NavigationBar />
//       {/* <Cart /> */}
//       <Footer />
//     </div>
//   );
// };

export default CartPage;
