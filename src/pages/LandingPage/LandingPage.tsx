import React from 'react';

import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import { Button } from '../../components/atoms/Button';

import * as S from './styles';
import { useLandingPage } from './LandingPage.logic';

export const LandingPage: React.FC = () => {
  const { goToLogin } = useLandingPage();

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
