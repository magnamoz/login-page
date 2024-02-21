import React from 'react';

import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import { useErrorPage } from './ErrorPage.logic';

import * as S from './styles';

export const ErrorPage: React.FC = () => {
  const { goToLandingPage } = useErrorPage();

  return (
    <DefaultTemplate>
      <S.Title>Ops!</S.Title>
      <S.Space />
      <S.Paragraph>Que tal voltar para página inicial?</S.Paragraph>
      <S.Space />
      <S.ParagraphWithDecoration onClick={() => goToLandingPage()}>
        Clique aqui.
      </S.ParagraphWithDecoration>
    </DefaultTemplate>
  );
};
