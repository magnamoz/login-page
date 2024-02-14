import React from 'react';

import { Modal } from '../../atoms/Modal';
import { PasswordErrorModalProps } from './types';

import * as S from './styles';

export const PasswordErrorModal: React.FC<PasswordErrorModalProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Modal open={open} onClose={handleClose} title="Atenção">
      <S.Paragraph>Regras para a senha ser considera válida:</S.Paragraph>
      <S.List>
        <S.ItemList>
          deve conter apenas caracteres alfanuméricos: A-Z, a-z, 0-9
        </S.ItemList>
        <S.ItemList>
          deve ter ao menos: 1 letra maiúscula, 1 minúscula e 1 número
        </S.ItemList>
        <S.ItemList>deve ter entre 5 e 8 caracteres no total</S.ItemList>
      </S.List>
    </Modal>
  );
};
