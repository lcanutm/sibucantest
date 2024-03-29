import React from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { store } from '../app/redux/store'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
