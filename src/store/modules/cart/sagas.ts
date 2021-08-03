import { all, takeLatest, select } from 'redux-saga/effects';
import { IState } from '../..';
import { addProductToCartPending } from './actions';

import { cartConstants } from './constants'

type CheckProductStockAction = ReturnType<typeof addProductToCartPending>;

function* checkProductStock({ payload }: CheckProductStockAction) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  console.info(currentQuantity)
}

export default all([
  takeLatest(cartConstants.ADD_PRODUCT_TO_CART_PENDING, checkProductStock)
])