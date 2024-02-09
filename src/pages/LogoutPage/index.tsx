import React from 'react';
import { useNavigate } from 'react-router-dom';

import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import { Button } from '../../components/atoms/Button';
import { ROUTES } from '../../constants';
import { logout } from '../../service';

import * as S from './styles';

export const LogoutPage: React.FC = () => {
  const navigate = useNavigate();

  const logoutAndRedirect = () => {
    logout();
    navigate(ROUTES.LANDING_PAGE);
  };

  return (
    <DefaultTemplate>
      <S.Title>Logout</S.Title>
      <S.Space />
      <S.Paragraph>esta é a página para sair da aplicação</S.Paragraph>
      <S.Space />
      <Button
        title="Sair da aplicação"
        type="button"
        onClick={logoutAndRedirect}
      />
    </DefaultTemplate>
  );
};
