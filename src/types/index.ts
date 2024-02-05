import { FieldErrors, UseFormRegister, Path } from 'react-hook-form';

export interface IFormValues {
  cpf: number;
  password: string;
}

export interface InputProps {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  error?: FieldErrors;
  placeholder?: string;
}
