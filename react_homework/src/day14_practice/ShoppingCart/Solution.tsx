import React, { useState } from "react";
import "./style.css";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  { id: 1, name: "Apple", price: 0.99, quantity: 0 },
  { id: 2, name: "Banana", price: 3.99, quantity: 0 },
  { id: 3, name: "Orange", price: 2.99, quantity: 0 },
  { id: 4, name: "Mango", price: 1.99, quantity: 0 },
];

export default function Solution() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  //   let totalPrice = 0;
  //   cartItems.forEach((item) => {
  //     totalPrice += item.quantity * item.price;
  //   });
  //   totalPrice = Number(totalPrice.toFixed(2));

  const totalPrice = +cartItems
    .reduce((accu, curr) => {
      return accu + curr.price * curr.quantity;
    }, 0)
    .toFixed(2);

  const handleClearCart = () => {
    setCartItems(
      cartItems.map((item) => {
        return {
          ...item,
          quantity: 0,
        };
      })
    );
  };
  const handleCheckout = () => {};

  const handleChangeQuantity = (id: number, action: "add" | "minus") => {
    setCartItems((prev) =>
      prev.map((cartItem) => {
        return cartItem.id === id
          ? {
              ...cartItem,
              quantity:
                action === "add"
                  ? cartItem.quantity + 1
                  : Math.max(cartItem.quantity - 1, 0),
            }
          : cartItem;

        if (cartItem.id === id) {
          return {
            ...cartItem,
            quantity:
              action === "add"
                ? cartItem.quantity + 1
                : Math.max(cartItem.quantity - 1, 0),
          };
        } else {
          return cartItem;
        }
      })
    );
  };

  const handleAddItem = (id: number) => {
    // const newCartItems = [...cartItems];
    // const item = newCartItems.find((_item) => _item.id === id);
    // //state is mutated here. Although still works, but against the philosophy
    // item!.quantity += 1;
    // setCartItems(newCartItems);

    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        // by returning a new object, we're not mutating the state
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      } else {
        return cartItem;
      }
    });
    setCartItems(newCartItems);
  };

  const handleRemoveItem = (id: number) => {
    // when new state is derived from old state, better to use the callback function syntax
    // check this doc: https://react.dev/learn/queueing-a-series-of-state-updates

    setCartItems((prev) =>
      prev.map((cartItem) => {
        if (cartItem.id === id) {
          // by returning a new object, we're not mutating the state

          return {
            ...cartItem,
            quantity: Math.max(cartItem.quantity - 1, 0),
          };
        } else {
          return cartItem;
        }
      })
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => {
            const { id, name, quantity, price } = cartItem;

            return (
              <tr key={id}>
                <td>{name}</td>
                <td>${price}</td>
                <td>
                  <button onClick={() => handleRemoveItem(id)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleAddItem(id)}>+</button>
                </td>
                {/* <td>
                  <button onClick={() => handleChangeQuantity(id, "minus")}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => handleChangeQuantity(id, "add")}>
                    +
                  </button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>Total price: ${totalPrice.toFixed(2)}</div>
      <button onClick={handleCheckout}>Checkout</button>
      <button onClick={handleClearCart}>Empty Cart</button>
    </div>
  );
}
