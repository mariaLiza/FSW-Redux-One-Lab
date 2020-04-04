import { INCREMENT, DECREMENT, CLEAR_COUNT } from "../actions/actionTypes";

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return [...state, action.payload];
    case DECREMENT:
      return [...state, action.payload];

    case CLEAR_COUNT:
      return [];
    default:
      return state;
  }
};

export default countReducer;
