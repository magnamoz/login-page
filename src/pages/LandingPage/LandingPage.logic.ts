import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants';

import { logout } from '../../service';

export const useLandingPage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  useEffect(() => {
    //caso haja token no storage remover antes de ir para login
    logout();
  }, []);

  return { goToLogin };
};
