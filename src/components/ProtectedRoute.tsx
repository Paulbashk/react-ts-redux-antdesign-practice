import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { RouteNames } from '../router';

interface ProtectedRouteProps {
  authType?: boolean
}

const ProtectedRoute: React.FC<React.PropsWithChildren<ProtectedRouteProps>> = ({ authType = true, children }) => {
  const {isAuth} = useAppSelector(state => state.auth);
  const location = useLocation();

  if(!authType && isAuth) {
    return <Navigate to={RouteNames.EVENT} replace state={{ from: location }} />
  }

  if(!authType && !isAuth) {
    return (
      <>{children}</>
    );
  }

  if(!isAuth) {
    return <Navigate to={RouteNames.LOGIN} replace state={{ from: location }} />
  }

  return (
    <>{children}</>
  );
}

export default ProtectedRoute;