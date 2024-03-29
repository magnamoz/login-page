import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LandingPage } from '../pages/LandingPage';
import { LogoutPage } from '../pages/LogoutPage';
import { PrivatePage } from '../pages/PrivatePage';
import { ErrorPage } from 'pages/ErrorPage';
import { LoginPage } from '../pages';

import { PrivateRoute } from './PrivateRoute';
import { ROUTES } from '../constants/routes';
import { isAuthenticated } from '../service';

const Routes = () => {
  const publicRoutes = [
    {
      path: ROUTES.LANDING_PAGE,
      element: <LandingPage />,
    },
  ];

  const protectedRoutes = [
    {
      path: '/',
      element: <PrivateRoute />,
      children: [
        {
          path: ROUTES.LOGOUT,
          element: <LogoutPage />,
        },
        {
          path: ROUTES.PROTECTED,
          element: <PrivatePage />,
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: ROUTES.LOGIN,
      element: <LoginPage />,
    },
  ];

  const ErrorRoutes = [
    {
      path: ROUTES.ERROR,
      element: <ErrorPage />,
    },
  ];

  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!isAuthenticated() ? routesForNotAuthenticatedOnly : ErrorRoutes),
    ...protectedRoutes,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
