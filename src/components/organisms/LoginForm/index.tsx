import React from 'react';

import { NumberInput } from '../../atoms/NumberInput';
import { PasswordInput } from '../../atoms/PasswordInput';
import { Button } from '../../atoms/Button';

import * as S from './styles';

export const LoginForm: React.FC = () => {
  return (
    <S.Container>
      <NumberInput />
      <PasswordInput />
      <Button />
    </S.Container>
  );
};
