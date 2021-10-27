import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Action, ReduxState } from "../redux/types"

function Main() {
  const history = useHistory();
  const dispatch = useDispatch();

  const login = useSelector((state: ReduxState) => state.login);
  const password = useSelector((state: ReduxState) => state.password);

  const loginInput = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch<Action>({ type: "INPUT", data: { name: evt.target.name as "login" | "password", value: evt.target.value } });
  };

  const logIn = () => {
    dispatch({ type: "AUTH" });
    history.push('/profile');
  };

  return (
    <div>
      <input onChange={loginInput} value={login || ""} name="login" type="text" placeholder="Login" />
      <input onChange={loginInput} value={password || ""} name="password" type="text" placeholder="Password" />
      <button type="button" onClick={logIn} disabled={!(login === "developer21" && password === "123456")}>LogIn</button>
    </div>
  );
}

export default Main;
