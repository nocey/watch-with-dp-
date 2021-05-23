import * as types from "../types";
import { saveToken } from "middlewares/Token";
import { useMutation } from "@apollo/client";

export const loginAuth = (user) => async (dispatch) => {
  
  dispatch({
    type: types.LOGIN,
    payload: user,
  });
  
};
