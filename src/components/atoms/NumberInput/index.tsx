import React from 'react';

import * as S from './styles';

export const NumberInput: React.FC = () => {
  return (
    <S.Input
      aria-label="Número do CPF"
      onChange={(e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
      }}
      autoComplete="on"
      placeholder="Digite seu CPF"
    />
  );
};
