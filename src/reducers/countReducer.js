import { INCREMENT, DECREMENT } from "../actions/actionTypes";

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return [...state, action.payload];
    case DECREMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default countReducer;
