import { z } from 'zod';
import { validateCpf, validatePassword } from '../utils';

export const LoginFormSchema = z.object({
  cpf: z
    .string({ required_error: 'Necessário informar um CPF' })
    .min(1, { message: 'Campo obrigatório' })
    .refine(
      (value) => {
        return validateCpf(value);
      },
      { message: 'CPF inválido' },
    ),
  password: z
    .string({
      required_error: 'Necessário informar a senha',
    })
    .min(1, { message: 'Campo obrigatório' })
    .refine(
      (value) => {
        return validatePassword(value);
      },
      { message: 'Senha inválida' },
    ),
});

export type LoginFormSchemaInput = z.input<typeof LoginFormSchema>;
export type LoginFormSchemaOutput = z.output<typeof LoginFormSchema>;
