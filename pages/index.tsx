import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-3xl font-bold underline">Hello world!</p>
    </div>
  )
}

export default Home
