import { omit } from "lodash";

function cartReducers(state = { items: {} }, action) {
  console.log("cartReducers");
  switch (action.type) {
    case "ADD_TO_CART": {
      console.log("added", action.payload);
      const product = action.payload;

      if (state.items[product.id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity + 1,
            },
          },
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...product,
              quantity: 1,
            },
          },
        };
      }
    }
    case "REMOVE_FROM_CART": {
      console.log("removed");
      const product = action.payload;
      if (state.items[product.id].quantity <= 1) {
        return {
          ...state,
          items: omit(state.items, [product.id]),
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity - 1,
            },
          },
        };
      }
    }
    default:
      return state;
  }
}

export default cartReducers;
