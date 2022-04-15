export interface IProduct {
  id: string
  precio: number
  nombre: string
  descripcion: string
}
export interface ICart {
  products: []
  total: number
  subtotal: number
}
export interface IProducts {
  products: []
}

export const ShopTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_TO_CART: 'REMOVE_TO_CART',
  REMOVE_ALL_TO_CART: 'REMOVE_ALL_TO_CART',
  UPDATE_PRODUCTS: 'UPDATE_PRODUCTS'
}
