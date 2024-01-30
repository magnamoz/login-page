import React, { useState } from 'react';

import { VscEye, VscEyeClosed } from 'react-icons/vsc';

import * as S from './styles';

export const PasswordInput: React.FC = () => {
  const [eyeIsOpen, setEyeOpen] = useState(false);

  const toggleEye = () => {
    setEyeOpen(!eyeIsOpen);
  };

  return (
    <S.Container>
      <S.Input
        aria-label="Senha"
        autoComplete="on"
        placeholder="Digite sua senha"
        type={!eyeIsOpen ? 'password' : 'text'}
      />
      <S.ImageButton onClick={toggleEye}>
        {eyeIsOpen ? <VscEye /> : <VscEyeClosed />}
      </S.ImageButton>
    </S.Container>
  );
};
