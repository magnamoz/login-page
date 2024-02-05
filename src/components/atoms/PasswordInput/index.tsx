import React, { useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

import { InputProps } from '../../../types';

import * as S from './styles';

export const PasswordInput = ({ label, required, register }: InputProps) => {
  const [eyeIsOpen, setEyeOpen] = useState(false);

  const toggleEye = () => {
    setEyeOpen(!eyeIsOpen);
  };

  return (
    <S.Container>
      <>
        <S.Input
          aria-label="Senha"
          autoComplete="on"
          placeholder="Digite sua senha"
          type={!eyeIsOpen ? 'password' : 'text'}
          {...register(label, { required })}
        />
        <S.ImageButton onClick={toggleEye}>
          {eyeIsOpen ? <VscEye /> : <VscEyeClosed />}
        </S.ImageButton>
      </>
    </S.Container>
  );
};
