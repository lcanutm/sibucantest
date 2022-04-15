import React from 'react'
import { useAppDispatch } from '../app/hooks/hooks'
import { addToCart } from '../app/redux/states/product/actions'
import { Product } from './Product'

const ProductList = ({ products }) => {
  const dispatch = useAppDispatch()
  return (
    <div className="min-h-screen bg-red">
      <div className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 select-none">
        {products.map((productItem, index) => (
          <Product
            product={productItem}
            key={index}
            addToCart={() => dispatch(addToCart(productItem))}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
