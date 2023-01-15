import { useAppSelector } from './redux';

const useAuth = () => {
  const { isAuth } = useAppSelector(state => state.auth);

  return isAuth;
}

export default useAuth;