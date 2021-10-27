import { useSelector } from 'react-redux';
import { ReduxState } from '../redux/types';

function Profile() {
  const login = useSelector((state: ReduxState) => state.login);
  const isLogin = useSelector((state: ReduxState) => state.isLogin);

  return (
    <div>
      <h1>{isLogin ? `${login}` : "Необходимо авторизоваться"}</h1>
    </div>
  );
}

export default Profile;