import {
  ORDER_CREAT_FAIL,
  ORDER_CREAT_REQUEST,
  ORDER_CREAT_SUCCESS,
} from "../constants/orderConstant";
import Axios from "Axios";
import { CART_EMPTY } from "../constants/cartConstants";

export const creatOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREAT_REQUEST, payload: order });
  try {
    const {
      userSignin: { UserInfo },
    } = getState();
    const { data } = await Axios.post("api/orders", order, {
      headers: { Authorization: `Bearer ${UserInfo.tokem}` },
    });
    dispatch({ type: ORDER_CREAT_SUCCESS, payload: data.order });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: ORDER_CREAT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
