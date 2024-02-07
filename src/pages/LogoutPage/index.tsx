import React from 'react';

import { DefaultTemplate } from '../../components/templates/DefaultTemplate';

import * as S from './styles';

export const LogoutPage: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Title>Logout</S.Title>
      <S.Space />
    </DefaultTemplate>
  );
};
