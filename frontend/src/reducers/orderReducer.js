import {
  ORDER_CREAT_FAIL,
  ORDER_CREAT_REQUEST,
  ORDER_CREAT_RESET,
  ORDER_CREAT_SUCCESS,
} from "../constants/orderConstant";

export const orderCreateReducer = (state: {}, action) => {
  switch (action.type) {
    case ORDER_CREAT_REQUEST:
      return { loading: true };
    case ORDER_CREAT_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case ORDER_CREAT_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_CREAT_RESET:
      return {};
    default:
      return state;
  }
};
