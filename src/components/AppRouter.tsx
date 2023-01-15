import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { routes } from '../router';
import ProtectedRoute from './ProtectedRoute';

const AppRouter: React.FC = () => {
  const {isAuth} = useAppSelector(state => state.auth);

  return (
    <Routes>
      {routes.map(route => <Route key={route.path} path={route.path} element={
        route.auth
          ? <ProtectedRoute authType={route.authType}><route.element /></ProtectedRoute>
          : <route.element />
      }/>
      )}
      <Route path="*" element={<Navigate to={isAuth ? '/' : '/login'} />} />
    </Routes>
  )
}

export default AppRouter;