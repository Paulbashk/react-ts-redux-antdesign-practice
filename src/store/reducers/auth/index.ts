import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import { AuthState } from './types';


const initialState: AuthState = {
  isAuth: false,
  error: null,
  isLoading: false,
  user: {} as IUser
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchingUser(state) {
      state.isLoading = true;
      state.error = null;
      state.user = {} as IUser;
      state.isAuth = false;
    },
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.isLoading = false;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { actions, reducer } = authSlice;

export const authActions = actions;

export const authReducer = reducer;

