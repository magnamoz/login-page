import React from 'react';

import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import { GenericButton } from '../../components/atoms/Button';
import { useLogoutPage } from './LogoutPage.logic';

import * as S from './styles';

export const LogoutPage: React.FC = () => {
  const { logoutAndRedirect } = useLogoutPage();

  return (
    <DefaultTemplate>
      <S.Title>Logout</S.Title>
      <S.Space />
      <S.Paragraph>esta é a página para sair da aplicação</S.Paragraph>
      <S.Space />
      <GenericButton
        title="Sair da aplicação"
        type="button"
        onClick={logoutAndRedirect}
      />
    </DefaultTemplate>
  );
};
