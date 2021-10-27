import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { RedaxState } from "../redux/types"

function Main() {
  const history = useHistory();
  const dispatch = useDispatch();

  const login = useSelector((state: RedaxState) => state.login);
  const password = useSelector((state: RedaxState) => state.password);

  const state = useSelector((state: RedaxState) => state);
  console.log(state);

  const loginInput = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", data: { name: "login", value: evt.target.value } });
  };

  const passwordInput = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", data: { name: "password", value: evt.target.value } });
  };

  const logIn = () => {
    dispatch({ type: "AUTH", data: { isLogin: true } });
    history.push('/profile');
  };

  return (
    <div>
      <input onChange={loginInput} value={login || ""} type="text" placeholder="Login" />
      <input onChange={passwordInput} value={password || ""} type="text" placeholder="Password" />
      <button type="button" onClick={logIn} disabled={!(login === "developer21" && password === "123456")}>LogIn</button>
    </div>
  );
}

export default Main;
