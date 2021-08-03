import { IProduct } from "./types";
import { cartConstants } from './constants'

export function addProductToCartPending(product: IProduct) {
  return {
    type: cartConstants.ADD_PRODUCT_TO_CART_PENDING,
    payload: { product }
  }
}

export function addProductToCartResolved(product: IProduct) {
  return {
    type: cartConstants.ADD_PRODUCT_TO_CART_RESOLVED,
    payload: { product }
  }
}

export function addProductToCartRejected(productId: number) {
  return {
    type: cartConstants.ADD_PRODUCT_TO_CART_REJECTED,
    payload: { productId }
  }
}