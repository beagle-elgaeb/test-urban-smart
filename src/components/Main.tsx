import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Action, ReduxState } from "../redux/types";
import styled from "styled-components/macro";

function Main() {
  const history = useHistory();
  const dispatch = useDispatch();

  const login = useSelector((state: ReduxState) => state.login);
  const password = useSelector((state: ReduxState) => state.password);

  const loginInput = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch<Action>({
      type: "INPUT",
      data: { name: evt.target.name as "login" | "password", value: evt.target.value },
    });
  };

  const logIn = () => {
    dispatch({ type: "AUTH" });
    history.push("/profile");
  };

  return (
    <MainContainer>
      <Input
        onChange={loginInput}
        value={login || ""}
        name="login"
        type="text"
        placeholder="Login"
      />
      <Input
        onChange={loginInput}
        value={password || ""}
        name="password"
        type="text"
        placeholder="Password"
      />
      <Button
        type="button"
        onClick={logIn}
        disabled={!(login === "developer21" && password === "123456")}
      >
        LogIn
      </Button>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Input = styled.input`
  height: 33px;
  width: 150px;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid Green;
  border-radius: 6px;
  outline: none;
  font-size: 20px;
  line-height: 22px;
  color: Green;
  cursor: pointer;
  margin: 0 10px 0 0;

  ::placeholder {
    color: LightGreen;
  }

  :hover {
    box-shadow: 1px 1px 5px Green;
  }
`;

const Button = styled.button`
  height: 33px;
  width: 100px;
  box-sizing: border-box;
  background: ${({ disabled }) => (disabled ? "LightGray" : "LightGreen")};
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 20px;
  line-height: 22px;
  color: ${({ disabled }) => (disabled ? "White" : "Green")};
  cursor: pointer;
  margin: 0;

  :hover {
    box-shadow: 1px 1px 5px Green;
  }
`;
