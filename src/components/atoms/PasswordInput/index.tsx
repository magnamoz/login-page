import React from 'react';

import * as S from './styles';

export const PasswordInput: React.FC = () => {
  return (
    <S.Input
      aria-label="Senha"
      autoComplete="on"
      placeholder="Digite sua senha"
    />
  );
};
