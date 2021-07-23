import { Reducer } from "redux"
import produce from 'immer'
import { cartConstants } from "./constants"
import { ICartState } from "./types"

const INITIAL_STATE: ICartState = {
  items: []
}

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartConstants.ADD_PRODUCT_TO_CART: {
      const { product } = action.payload
      return produce(state, (draft) => {
        draft.items.push({ product, quantity: 1 })
      })

      // return {
      //   ...state,
      //   items: [...state.items, { product, quantity: 1 }]
      // }
    }

    default: {
      return state;
    }
  }
}