import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants';

export const usePrivatePage = () => {
  const navigate = useNavigate();

  const goToLogout = () => {
    navigate(ROUTES.LOGOUT);
  };

  return { goToLogout };
};
