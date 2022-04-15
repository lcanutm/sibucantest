import React from 'react'
import Header from './Header'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  )
}
