//Composant Cart
import { Button, Col, Container, Row } from "react-bootstrap";


const Cart = (cartItems,setCartItems) => {
  

  const decrementQuantity = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity -= 1;

      if (existingItem.quantity === 0) {
        removeItem(item);
      } else {
        // mise  à jour le panier en utilisant une nouvelle copie du tableau cartItems
        //permet de déclencher la mise à jour de l'interface utilisateur.
        setCartItems([...cartItems]);
      }
    }
  };

  const removeItem = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.prixHT * item.quantity;
    }
    return totalPrice.toFixed(2);
  };

  return (
    <Container className="py-4">
      <Row>
        <Col md={8}>
      
          {/* //<Cards addToCart={addToCart} /> */}
        </Col>
        <Col md={4}>
          <h2>Panier</h2>
          {cartItems.length === 0 ? (
            <p>Aucun article dans le panier</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div key={index}>
                  <p>
                    <strong>{item.description}</strong> - Prix : {item.prixHT} € - Quantité : {item.quantity}
                  </p>
                  <Button variant="danger" onClick={() => decrementQuantity(item)}>
                    -
                  {/* </Button>{" "}
                  <Button variant="danger" onClick={() => addToCart(item)}> */}
                    +
                  </Button>{" "}
                  <Button variant="danger" onClick={() => removeItem(item)}>
                    Supprimer
                  </Button>
                </div>
              ))}
              <h4>Total : {calculateTotalPrice()} €</h4>
              <Button variant="primary">Valider la commande</Button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;

















// import React from "react";
// import { Card, Button } from "react-bootstrap";


// const Cart = ({ cartItems, removeFromCart }) => {
//   return (
//     <div>
//       <h2>Panier</h2>
//       {cartItems && cartItems.length === 0 ? (
//         <p>Votre panier est vide.</p>
//       ) : (
//         cartItems.map((article) => (
//           <Card key={article.id} className="mb-4">
//             <Card.Body>
//               <Card.Title>{article.titre}</Card.Title> 
//               <Card.Text>{article.description}</Card.Text> 
//               <Card.Text>Prix : {article.prixHT} €</Card.Text> 
//               <Button
//                 variant="danger"
//                 onClick={() => {
//                   removeFromCart(article);
//                   console.log("Article supprimé du panier :", article);
//                 }}
//               >
//                 Supprimer du panier
//               </Button>
//             </Card.Body>
//           </Card>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;

// import React, { useState } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       existingItem.quantity += 1;
//       setCartItems([...cartItems]);
//     } else {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const decrementQuantity = (item) => {
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       existingItem.quantity -= 1;

//       if (existingItem.quantity === 0) {
//         removeItem(item);
//       } else {
//         setCartItems([...cartItems]);
//       }
//     }
//   };

//   const removeItem = (item) => {
//     const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
//     setCartItems(updatedCartItems);
//   };

//   const calculateTotalPrice = () => {
//     let totalPrice = 0;
//     for (const item of cartItems) {
//       totalPrice += item.prixHT * item.quantity;
//     }
//     return totalPrice.toFixed(2);
//   };

//   return (
//     <Container className="py-4">
//       <Row>
//         <Col md={8}>
//           <h2>Mon panier</h2>
//           {cartItems.length === 0 ? (
//             <p>Votre panier est vide</p>
//           ) : (
//             <div>
//               {cartItems.map((item, index) => (
//                 <div key={index} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px", paddingBottom: "10px" }}>
//                   <Row>
//                     <Col md={2}>
//                       <img src={item.image} alt={item.titre} style={{ width: "50px" }} />
//                     </Col>
//                     <Col md={4}>
//                       <div>
//                         <h6>{item.titre}</h6>
//                         <p>{item.description}</p>
//                       </div>
//                     </Col>
//                     <Col md={2}>
//                       <p>Prix : {item.prixHT} €</p>
//                     </Col>
//                     <Col md={2}>
//                       <div>
//                         <Button variant="secondary" size="sm" onClick={() => decrementQuantity(item)}>
//                           -
//                         </Button>
//                         <span style={{ margin: "0 5px" }}>{item.quantity}</span>
//                         <Button variant="secondary" size="sm" onClick={() => addToCart(item)}>
//                           +
//                         </Button>
//                       </div>
//                     </Col>
//                     <Col md={2}>
//                       <Button variant="danger" size="sm" onClick={() => removeItem(item)}>
//                         <i className="bi bi-trash"></i>
//                       </Button>
//                     </Col>
//                   </Row>
//                 </div>
//               ))}
//             </div>
//           )}
//         </Col>
//         <Col md={4}>
//           <h2>Total</h2>
//           <p>Total price: {calculateTotalPrice()} €</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Cart;






// import React, { useState } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import Cards from "./Cards";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       existingItem.quantity += 1;
//       setCartItems([...cartItems]);
//     } else {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const decrementQuantity = (item) => {
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       existingItem.quantity -= 1;

//       if (existingItem.quantity === 0) {
//         removeItem(item);
//       } else {
//         setCartItems([...cartItems]);
//       }
//     }
//   };

//   const removeItem = (item) => {
//     const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
//     setCartItems(updatedCartItems);
//   };

//   const calculateTotalPrice = () => {
//     let totalPrice = 0;
//     for (const item of cartItems) {
//       totalPrice += item.price * item.quantity;
//     }
//     return totalPrice.toFixed(2);
//   };

//   return (
//     <Container className="py-4">
//       <Row>
//         <Col md={8}>
//           <Cards addToCart={addToCart} />
//           <h2>Mon panier</h2>
//           {cartItems.length === 0 ? (
//             <p>Votre panier est vide</p>
//           ) : (
//             <div>
//               {cartItems.map((item, index) => (
//                 <div key={index} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px", paddingBottom: "10px" }}>
//                   <img src={item.image} alt={item.description} style={{ width: "50px", marginRight: "10px" }} />
//                   <span>{item.description}</span>
//                   <span>Price: {item.price}</span>
//                   <Button variant="secondary" size="sm" style={{ marginLeft: "10px" }} onClick={() => decrementQuantity(item)}>
//                     -
//                   </Button>
//                   <span>{item.quantity}</span>
//                   <Button variant="secondary" size="sm" style={{ marginLeft: "10px" }} onClick={() => addToCart(item)}>
//                     +
//                   </Button>
//                   <Button variant="danger" size="sm" style={{ marginLeft: "10px" }} onClick={() => removeItem(item)}>
//                     <i className="bi bi-trash"></i>
//                   </Button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </Col>
//         <Col md={4}>
//           <h2>Total</h2>
//           <p>Total price: {calculateTotalPrice()} €</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Cart;












// import React, { useState } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import Cards from "./Cards";


// const Cart = (item) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
//     console.log(item);

//     if (existingItem) {
//       existingItem.quantity += 1;
//       setCartItems([...cartItems]);
//     } else {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const decrementQuantity = (item) => {
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       existingItem.quantity -= 1;

//       if (existingItem.quantity === 0) {
//         removeItem(item);
//       } else {
//         setCartItems([...cartItems]);
//       }
//     }
//   };

//   const removeItem = (item) => {
//     const updatedCartItems = cartItems.filter(
//       (cartItem) => cartItem.id !== item.id
//     );
//     setCartItems(updatedCartItems);
//   };

//   const calculateTotalPrice = () => {
//     let totalPrice = 0;
//     for (const item of cartItems) {
//       totalPrice += item.price * item.quantity;
//     }
//     return totalPrice.toFixed(2);
//   };
// console.log(item);
//   return (
//     <Container className="py-4">
//       <Row>
//         <Col md={8}>
//           <Cards  key={item.id} article={item}addToCart={addToCart} />
//           <h2>Mon panier</h2>
//           {cartItems.length === 0 ? (
//             <p>Votre panier est vide</p>
//           ) : (
//             <div>
//               {cartItems.map((item, index) => (
//                 <div key={index} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px", paddingBottom: "10px" }}>
//                   <img src={item.image} alt={item.description} style={{ width: "50px", marginRight: "10px" }} />
//                   <span>{item.description}</span>
//                   <span>Price: {item.price}</span>
//                   <Button variant="secondary" size="sm" style={{ marginLeft: "10px" }} onClick={() => decrementQuantity(item)}>
//                     -
//                   </Button>
//                   <span>{item.quantity}</span>
//                   <Button variant="secondary" size="sm" style={{ marginLeft: "10px" }} onClick={() => addToCart(item)}>
//                     +
//                   </Button>
//                   <Button variant="danger" size="sm" style={{ marginLeft: "10px" }} onClick={() => removeItem(item)}>
//                     <i className="bi bi-trash"></i>
//                   </Button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </Col>
//         <Col md={4}>
//           <h2>Total</h2>
//           <p>Total price: {calculateTotalPrice()} €</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Cart;








// import React from "react";
// import { Table, Button } from "react-bootstrap";

// const Cart = ({ cartItems, addToCart, removeFromCart }) => {
//     console.log(cartItems);
//   return (
//     <div>
//       <h2>Panier</h2>
//       {cartItems.length === 0 ? (
//         <p>Votre panier est vide.</p>
//       ) : (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Description</th>
//               <th>Quantité</th>
//               <th>Prix unitaire</th>
//               <th>Prix total</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.description}</td>
//                 <td>{item.quantity}</td>
//                 <td>{item.prixHT} €</td>
//                 <td>{item.prixHT * item.quantity} €</td>
//                 <td>
//                   <Button variant="danger" onClick={() => removeFromCart(item)}>
//                     Supprimer
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default Cart;


              







// import React from 'react';

// const Cart = ({ cartItems, setCartItems }) => {
//     console.log("article du panier",cartItems);
//   const removeItem = (index) => { 
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     setCartItems(updatedCart);
//   };

//   const incrementItem = (index) => {
//     const updatedCart = [...cartItems];
//     updatedCart[index].quantity += 1;
//     setCartItems(updatedCart);
//   };

//   const decrementItem = (index) => {
//     const updatedCart = [...cartItems];
//     if (updatedCart[index].quantity > 1) {
//       updatedCart[index].quantity -= 1;
//       setCartItems(updatedCart);
//     }
//   };

//   const calculateTotalAmount = () => {
//     let total = 0;
//     cartItems.forEach((item) => {
//       total += item.quantity * item.price;
//     });
//     return total.toFixed(2);
//   };

//   return (
//     <div>
//       <h2>Panier</h2>
//       {cartItems.length === 0 ? (
//         <p>Le panier est vide.</p>
//       ) : (
//         <div>
//           {cartItems.map((item, index) => (
//             <div key={index}>
//               <img src={item.image} alt={item.description} style={{ width: "50px" }} />
//               <p>{item.description}</p>
//               <p>Prix : {item.prixHT} €</p>
//               <p>Quantité : {item.quantity}</p>
//               <button onClick={() => removeItem(index)}>Supprimer</button>
//               <button onClick={() => incrementItem(index)}>+</button>
//               <button onClick={() => decrementItem(index)}>-</button>
//             </div>
//           ))}
//           <p>Montant total : {calculateTotalAmount()} €</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
