import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import {Layout} from 'antd';
import './App.css';
import { IUser } from './models/IUser';
import useAction from './hooks/useAction';

const App: React.FC = () => {
  const { setAuth, setUser } = useAction();

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setAuth(true);
      setUser({ username: localStorage.getItem('username') || ''} as IUser);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
