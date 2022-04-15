import { IProduct } from './state'

export const UPDATE_PRODUCT = '[Product] update'

export const updateProducts = (products: IProduct[]) => dispatch => {
  return dispatch({ type: UPDATE_PRODUCT, products })
}
