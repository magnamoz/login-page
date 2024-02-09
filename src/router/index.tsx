import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import { useAuth } from '../provider/authProvider';
import { LandingPage, LoginPage, LogoutPage, PrivatePage } from '../pages';
import { PrivateRoute } from './PrivateRoute';
import { ROUTES } from '../constants/routes';
import { isAuthenticated } from '../service';

const Routes = () => {
  //const { token } = useAuth();

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

  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!isAuthenticated() ? routesForNotAuthenticatedOnly : []),
    ...protectedRoutes,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
