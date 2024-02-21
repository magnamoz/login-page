import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants';

export const useErrorPage = () => {
  const navigate = useNavigate();

  const goToLandingPage = () => {
    navigate(ROUTES.LANDING_PAGE);
  };

  return { goToLandingPage };
};
