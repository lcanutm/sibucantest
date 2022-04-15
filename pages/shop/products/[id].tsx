import React from 'react'
import Link from 'next/link'
import DataJson from '../../../util/products.json'

const Detalles = ({ data }) => {
  return (
    <>
      <Link href="/shop">
        <h1 className="ml-5">Back</h1>
      </Link>
      <p>{data.nombre}</p>
    </>
  )
}
export default Detalles

export const getStaticPaths = async () => {
  const { products } = DataJson
  const paths = products.map(({ id }) => ({ params: { id: `${id}` } }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { products } = DataJson
  const data = products.find(({ id }) => id === params.id)
  return { props: { data } }
}
