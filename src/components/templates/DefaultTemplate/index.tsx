import React, { ReactNode } from 'react';

import * as S from './styles';

type DefaultTemplateProps = {
  children: ReactNode;
};

export const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
  return <S.Container>{children}</S.Container>;
};
