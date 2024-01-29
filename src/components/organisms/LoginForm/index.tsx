import React from 'react';

import * as S from './styles';
import { NumberInput } from '../../atoms/NumberInput';
import { PasswordInput } from '../../atoms/PasswordInput';

export const LoginForm: React.FC = () => {
  return (
    <S.Container>
      <NumberInput />
      <PasswordInput />
    </S.Container>
  );
};
