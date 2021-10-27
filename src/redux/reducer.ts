import defaultState from "./defaultState";
import { ReduxState, Action } from "./types";

function reducer(state = defaultState, action: Action): ReduxState {
  switch (action.type) {
    case "INPUT":
      return { ...state, [action.data.name]: action.data.value };
    case "AUTH":
      return { ...state, isLogin: true };

    default:
      return state;
  }
}

export default reducer;
