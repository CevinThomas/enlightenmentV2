export type UserState = {
  loggedIn: boolean;
  completedOnboard: boolean;
};

export type UserActions =
  | {
      type: "LOGIN";
      payload: boolean;
    }
  | {
      type: "ONBOARD";
      payload: boolean;
    };

const initialState: UserState = {
  loggedIn: false,
  completedOnboard: false,
};
const userReducer = (state: UserState = initialState, action: UserActions) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: action.payload,
      };
    case "ONBOARD":
      return {
        ...state,
        completedOnboard: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
