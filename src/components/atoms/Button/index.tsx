import React from 'react';

import * as S from './styles';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
  title: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ type, title, onClick }) => {
  return (
    <S.Button type={type} onClick={onClick}>
      {title}
    </S.Button>
  );
};
