import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { ReduxState } from "../redux/types";

function Profile() {
  const login = useSelector((state: ReduxState) => state.login);
  const isLogin = useSelector((state: ReduxState) => state.isLogin);

  return (
    <ProfileContainer>
      <Title>{isLogin ? `${login}` : "Необходимо авторизоваться"}</Title>
    </ProfileContainer>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 50px;
  line-height: 52px;
  color: MediumVioletRed;
`;
