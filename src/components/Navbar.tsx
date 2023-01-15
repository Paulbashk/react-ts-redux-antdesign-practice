import { Layout, Row, Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import useAction from '../hooks/useAction';
import { RouteNames } from '../router';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { userLogout } = useAction();
  const { isAuth, user } = useAppSelector(state => state.auth);

  const menuItemsAuth = [
    {
      key: 0,
      label: 'Главная',
      onClick: () => navigate(RouteNames.EVENT)
    },
    {
      key: 1,
      label: 'Выйти',
      onClick: () => userLogout()
    }
  ];

  const menuItems = [
    {
      key: 0,
      label: 'Главная',
      onClick: () => navigate(RouteNames.EVENT)
    },
    {
      key: 1,
      label: 'Авторизоваться',
      onClick: () => navigate(RouteNames.LOGIN)
    }
  ];

  return (
    <Layout.Header>
      <Row justify="end">
        {
          isAuth
          ?
          (
          <>
            <div style={{ color: 'white' }}>{user.username}</div>
            <Menu theme='dark' mode='horizontal' selectable={false} items={menuItemsAuth} />
          </>
          )
          : <Menu theme='dark' mode='horizontal' selectable={false} items={menuItems} />
          
        }
      </Row>
    </Layout.Header>
  )
}

export default Navbar;