import { IProduct } from "./types";
import { cartConstants } from './constants'

export function addProductToCart(product: IProduct) {
  return {
    type: cartConstants.ADD_PRODUCT_TO_CART,
    payload: { product }
  }
}