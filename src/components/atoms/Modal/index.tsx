import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';

import { ModalProps } from './types';

import * as S from './styles';

export const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onClose,
  title,
}) => {
  return (
    <S.Modal $open={open}>
      <S.Content>
        <S.ImageButton onClick={() => onClose(false)}>
          <VscChromeClose />
        </S.ImageButton>

        {title && <S.Title> {title} </S.Title>}
        {children && <S.ModalContent>{children}</S.ModalContent>}
      </S.Content>
    </S.Modal>
  );
};
