import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { logout } from '../../service';

export const useLogoutPage = () => {
  const navigate = useNavigate();

  const logoutAndRedirect = () => {
    logout();
    navigate(ROUTES.LANDING_PAGE);
  };

  return { logoutAndRedirect };
};
