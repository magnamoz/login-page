import { z } from 'zod';

export const LoginFormSchema = z.object({
  cpf: z
    .string({ required_error: 'Necessário informar um CPF válido' })
    .min(1, { message: 'Campo obrigatório' }),
  password: z
    .string({
      required_error: 'Necessário informar uma senha válida',
    })
    .min(1, { message: 'Campo obrigatório' }),
});

export type LoginFormSchemaInput = z.input<typeof LoginFormSchema>;
export type LoginFormSchemaOutput = z.output<typeof LoginFormSchema>;
