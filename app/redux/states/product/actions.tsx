import { Dispatch } from 'react'
import { IProduct } from './type'

export const updateProducts = (products: IProduct[]) => {
  return (dispatch: Dispatch<ShopAction>) => {
    dispatch({
      type: 'UPDATE_PRODUCTS',
      payload: products
    })
  }
}

export const addToCart = (product: IProduct) => {
  return (dispatch: Dispatch<ShopAction>) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }
}
export const removeToCart = (idProduct: string) => {
  return (dispatch: Dispatch<ShopAction>) => {
    dispatch({
      type: 'REMOVE_TO_CART',
      payload: idProduct
    })
  }
}
export const removeAllToCart = (idProduct: string) => {
  return (dispatch: Dispatch<ShopAction>) => {
    dispatch({
      type: 'REMOVE_ALL_TO_CART',
      payload: idProduct
    })
  }
}

export type ShopAction =
  | IAddToCart
  | IUpdateProducts
  | IRemoveToCart
  | IRemoveAllToCart

export interface IAddToCart {
  readonly type: 'ADD_TO_CART'
  payload: IProduct
}
export interface IRemoveToCart {
  readonly type: 'REMOVE_TO_CART'
  payload: string
}
export interface IRemoveAllToCart {
  readonly type: 'REMOVE_ALL_TO_CART'
  payload: string
}
export interface IUpdateProducts {
  readonly type: 'UPDATE_PRODUCTS'
  payload: IProduct[]
}
