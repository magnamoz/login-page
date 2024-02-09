import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import { isAuthenticated } from '../service';
// import { useAuth } from '../provider/authProvider';

export const PrivateRoute = () => {
  //const { token } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to={ROUTES.LANDING_PAGE} />;
  }

  return <Outlet />;
};
