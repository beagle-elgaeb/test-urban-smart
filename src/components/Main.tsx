import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

interface RedaxState {
  login: string;
  password: string;
  isLogin: boolean;
} //вынести к редьюсу

function Main() {
  const dispatch = useDispatch();

  const login = useSelector((state: RedaxState) => state.login);

  const password = useSelector((state: RedaxState) => state.password);

  const loginInput = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", data: { login: evt.target.value } });
  };

  const passwordInput = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", data: { password: evt.target.value } });
  };

  return (
    <div>
      <input onChange={loginInput} value={login} type="text" placeholder="Login" />
      <input onChange={passwordInput} value={password} type="text" placeholder="Password" />
      <button type="submit">LogIn</button>
    </div>
  );
}

export default Main;
