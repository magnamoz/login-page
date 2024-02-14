import { ReactNode } from 'react';

export type ModalProps = {
  open?: boolean;
  title?: string;
  onClose: (boolean: boolean) => void;
  children?: ReactNode;
};
