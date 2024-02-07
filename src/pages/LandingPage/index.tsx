import React from 'react';
import { useNavigate } from 'react-router-dom';

import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import { Button } from '../../components/atoms/Button';
import { ROUTES } from '../../constants';

import * as S from './styles';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <DefaultTemplate>
      <S.Title>Olá,</S.Title>
      <S.Space />
      <S.Paragraph>esta é uma aplicação de estudo</S.Paragraph>
      <S.Space />
      <Button
        title="Ir para página de login"
        type="button"
        onClick={goToLogin}
      />
    </DefaultTemplate>
  );
};
