import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import App from "./components/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const defaultState = {
  login: "",
  password: "",
  isLogin: false,
}

function reducer(state = defaultState, action: { type: string, data: { login: string, password: string, isLogin: boolean } }) {
  switch (action.type) {
    case "INPUT": return { ...state };
    case "LOGIN": return { ...state };

    default: return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
