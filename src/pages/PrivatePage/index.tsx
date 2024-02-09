import React from 'react';
import { useNavigate } from 'react-router-dom';

import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import { Button } from '../../components/atoms/Button';
import { ROUTES } from '../../constants';

import * as S from './styles';

export const PrivatePage: React.FC = () => {
  const navigate = useNavigate();

  const goToLogout = () => {
    navigate(ROUTES.LOGOUT);
  };

  return (
    <DefaultTemplate>
      <S.Title>PrivatePage</S.Title>
      <S.Space />
      <S.Paragraph>
        esta é uma página protegida, só acessada com login
      </S.Paragraph>
      <S.Space />
      <Button
        title="Ir para página de logout"
        type="button"
        onClick={goToLogout}
      />
    </DefaultTemplate>
  );
};
