import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import { getToken } from '../service';

export const PrivateRoute = () => {
  const token = getToken();

  if (!token) {
    return <Navigate to={ROUTES.LANDING_PAGE} />;
  }

  return <Outlet />;
};
