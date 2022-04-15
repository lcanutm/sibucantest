import { IProducts } from './state'
import * as productActions from './actions'

const initialState: IProducts = {
  products: []
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case productActions.UPDATE_PRODUCT:
      return { products: action.products }
    default:
      return state
  }
}
