import React from 'react'
import ProductList from '../../components/ProductList'
import DataJson from '../../util/products.json'

export default function Index({ products }) {
  return <ProductList products={products} />
}
export const getStaticProps = async () => {
  const { products } = DataJson
  return { props: { products } }
}
