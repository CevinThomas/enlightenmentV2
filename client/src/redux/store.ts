import { combineReducers, createStore } from "redux";
import userReducer, { UserState } from "./reducers/UserReducer";

export type GlobalState = {
  user: UserState;
};

const rootReducer = combineReducers({ user: userReducer });
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
