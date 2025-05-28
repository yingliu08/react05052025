import { useState, useEffect } from "react";

export default function ShoppingCart() {
  //mock async api call
  async function fetchShoppingCart() {
    return new Promise((resolve) => {
      resolve([
        { id: 1, name: "Apple", price: 0.99, action: 0 },
        { id: 2, name: "Banana", price: 0.49, action: 0 },
        { id: 3, name: "Mango", price: 1.99, action: 0 },
        { id: 4, name: "Strawberry", price: 2.49, action: 0 },
      ]);
    });
  }
  const [cartItems, setCartItems] = useState([]);
  //fetch cart items
  useEffect(() => {
    async function getCartItems() {
      const res = await fetchShoppingCart();
      setCartItems(res);
    }
    getCartItems();
  }, []);
  //handle button +
  function handleIncrement(id) {
    setCartItems((cartItems) =>
      cartItems.map((item) => {
        return item.id === id ? { ...item, action: (item.action += 1) } : item;
      })
    );
  }
  //handle button -
  function handleDecrement(id) {
    setCartItems((cartItems) =>
      cartItems.map((item) => {
        return item.id === id && item.action > 0
          ? { ...item, action: (item.action -= 1) }
          : item;
      })
    );
  }

  function handleEmptyCart() {
    setCartItems((cartItems) =>
      cartItems.map((item) => {
        return { ...item, action: 0 };
      })
    );
  }
  const total = cartItems.reduce((sum, item) => {
    return sum + item.action * item.price;
  }, 0);
  return (
    <div>
      <h2>ShoppingCart</h2>
      <table style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            const { id, name, price, action } = item;
            return (
              <tr key={id}>
                <th>{name}</th>
                <th>{price}</th>
                <th>
                  <button onClick={() => handleDecrement(id)}>-</button>
                  {action}
                  <button onClick={() => handleIncrement(id)}>+</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>total price: {total.toFixed(2)} </h3>
      <button>Check Out</button>
      <button onClick={handleEmptyCart}>Empty Cart</button>
    </div>
  );
}
