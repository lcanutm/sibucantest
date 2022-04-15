import React from 'react'
import Link from 'next/link'
import { useAppSelector } from '../app/hooks/hooks'
import { RootState } from '../app/redux/store'
import styles from '../styles/Header.module.css'

export default function Header() {
  const { products } = useAppSelector((state: RootState) => state.cart)
  const getQuantity = () => {
    let total = 0
    for (const prod of products) {
      total += prod.quantity
    }
    return total
  }
  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>Sibucan test</h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/shop/cart">
            <a>Cart{getQuantity()}</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
