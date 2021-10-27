import defaultState from "./defaultState";
import { RedaxState, Action } from "./types";

function reducer(state = defaultState, action: Action): RedaxState {
  switch (action.type) {
    case "INPUT":
      return { ...state, [action.data.name]: action.data.value };
    case "AUTH":
      return { ...state, isLogin: action.data.isLogin };

    default:
      return state;
  }
}

export default reducer;
