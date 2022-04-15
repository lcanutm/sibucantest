import Image from 'next/image'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks/hooks'
import {
  addToCart,
  removeToCart
} from '../../../app/redux/states/product/actions'
// Importing actions from  cart.slice.js
// import {
//   incrementQuantity,
//   decrementQuantity,
//   removeFromCart
// } from '../redux/cart.slice'
import styles from '../../../styles/Cart.module.css'

const CartPage = () => {
  const cart = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  const getTotalPrice = () => {
    let totalprice = 0
    for (const prod of cart.products) {
      totalprice += prod.precio * prod.quantity
    }
    return totalprice
  }

  return (
    <div className={styles.container}>
      {cart.products.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.products.map((item, index) => (
            <div key={index} className={styles.body}>
              <div className={styles.img}>
                <Image src={item.img} height="90" width="65" />
              </div>
              <p>{item.nombre}</p>
              <p>$ {item.precio}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
                <button onClick={() => dispatch(removeToCart(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeToCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.precio}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
        </>
      )}
    </div>
  )
}

export default CartPage
