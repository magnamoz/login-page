import React from 'react';

import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import { Button } from '../../components/atoms/Button';
import { usePrivatePage } from './PrivatePage.logic';

import * as S from './styles';

export const PrivatePage: React.FC = () => {
  const { goToLogout } = usePrivatePage();

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
