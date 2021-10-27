import { useSelector } from 'react-redux';
import { RedaxState } from '../redux/types';

function Profile() {
  const login = useSelector((state: RedaxState) => state.login);
  const isLogin = useSelector((state: RedaxState) => state.isLogin);

  console.log(login, isLogin);


  return (
    <div>
      <h1>{isLogin ? `${login}` : "Необходимо авторизоваться"}</h1>
    </div>
  );
}

export default Profile;