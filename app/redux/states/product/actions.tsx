import { IProduct } from './state'

export const UPDATE_PRODUCT = '[Product] update'

export const updateAnnouncement = (products: IProduct[]) => dispatch => {
  return dispatch({ type: UPDATE_PRODUCT, products })
}
