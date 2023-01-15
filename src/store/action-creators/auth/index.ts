import { AppDispatch } from "../..";
import { authActions } from "../../reducers/auth";
import { IUser } from "../../../models/IUser";
import UserService from "../../../api/UserService";

export const {
  fetchingUser,
  setAuth,
  setUser,
  setError
} = authActions;

export const userLogin = (username: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchingUser());
    const response = await UserService.getUsers();
    const mockUser = response.data.find(user => user.username === username && user.password === password);

    setTimeout(async () => {
      if(mockUser) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', mockUser.username);
        dispatch(setUser(mockUser));
        dispatch(setAuth(true));
      } else {
        dispatch(setError('Некорректный логин или пароль'));
      }
    }, 2000);
  } catch(error: any) {
    dispatch(setError(error));
  }
}

export const userLogout = () => async (dispatch: AppDispatch) => {
  try {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(setAuth(false));
    dispatch(setUser({} as IUser));
  } catch(error: any) {
    dispatch(setError(error));
  }
}