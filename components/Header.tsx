import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        width: '100%',
        backgroundColor: 'rgba(94, 92, 92, 0.22)',
        boxShadow: '-7px 3px 13px -14px rgba(0,0,0,0.7)'
      }}
    >
      <Link href="/">
        <h1 className="ml-5">Home</h1>
      </Link>
      <Link href="/shop">
        <h1 className="ml-5">Shop</h1>
      </Link>
    </header>
  )
}
