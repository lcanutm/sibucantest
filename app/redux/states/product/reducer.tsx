import { ICart, IProduct, ShopTypes } from './type'

type ShopState = {
  products: IProduct[]
  cart: ICart
}
const initialState: ShopState = {
  products: [],
  cart: {
    products: [],
    total: 0,
    subtotal: 0
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ShopTypes.UPDATE_PRODUCTS:
      return { ...state, products: action.payload }
    case ShopTypes.ADD_TO_CART: {
      const products: any = [...state.cart.products]
      let existe = false
      const prodUpdate = products.map((item: any) => {
        if (item.id === action.payload.id) {
          existe = true
          return { ...item, quantity: item.quantity + 1 }
        } else return item
      })
      !existe && prodUpdate.push({ ...action.payload, quantity: 1 })
      return {
        ...state,
        cart: {
          ...state.cart,
          products: prodUpdate,
          total: state.cart.total + action.precio
        }
      }
    }
    case ShopTypes.REMOVE_TO_CART: {
      const products: any = [...state.cart.products]
      const pos = products.findIndex((item: any) => item.id === action.payload)
      if (products[pos]?.quantity - 1 === 0) {
        products.splice(pos, 1)
      } else {
        products[pos] = {
          ...products[pos],
          quantity: products[pos].quantity - 1
        }
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          products: products,
          total:
            products.length > 0 ? state.cart.total - products[pos].precio : 0
        }
      }
    }
    case ShopTypes.REMOVE_ALL_TO_CART: {
      const products: any = [...state.cart.products]
      const pos = products.findIndex((item: any) => item.id === action.payload)

      products.splice(pos, 1)

      return {
        ...state,
        cart: {
          ...state.cart,
          products: products,
          total:
            state.cart.total - products[pos].precio * products[pos].quantity
        }
      }
    }
    default:
      return state
  }
}
