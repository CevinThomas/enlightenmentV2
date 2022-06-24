import { Dispatch } from "redux";
import { UserActions } from "../reducers/UserReducer";

type UserDispatch = Dispatch<UserActions>;

export const loginUser = (dispatch: UserDispatch) => {
  return dispatch({
    type: "LOGIN",
    payload: true,
  });
};
