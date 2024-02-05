import React from 'react';

import { cpfMask } from '../../../utils';
import { InputProps } from '../../../types';

import * as S from './styles';

export const NumberInput = ({
  placeholder,
  label,
  required,
  register,
}: InputProps) => {
  return (
    <>
      <S.Input
        aria-label="Número do CPF"
        placeholder={placeholder}
        maxLength={14}
        {...register(label, {
          required,
          onChange: (e) => (e.target.value = cpfMask(e.target.value)),
        })}
      />
    </>
  );
};
