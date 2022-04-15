import React from 'react'
import { Product } from './Product'

const ProductList = ({ products }) => {
  return (
    <div className="min-h-screen bg-red">
      <p className="text-center text-4xl font-semibold py-4">Tailwind CSS</p>
      <div className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 select-none">
        {products.map((productItem, index) => (
          <Product product={productItem} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
