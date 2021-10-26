import { useDispatch, useSelector } from 'react-redux';

function Main() {
  const disputch = useDispatch();
  const login = useSelector(state => state.login);
  const password = useSelector(state => state.password);

  return (
    <div>
      <input type="text" placeholder="Login" />
      <input type="text" placeholder="Password" />
      <button type="submit">LogIn</button>
    </div>
  );
}

export default Main;