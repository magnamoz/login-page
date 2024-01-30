import React from 'react';

import { LoginForm } from '../../components/organisms/LoginForm';
import { DefaultTemplate } from '../../components/templates/DefaultTemplate';

import * as S from './styles';

export const LoginPage: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Title>Login</S.Title>
      <S.Space />
      <S.Space />
      <LoginForm />
    </DefaultTemplate>
  );
};
