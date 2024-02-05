import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoginFormSchema } from '../../../validations/loginForm';
import { IFormValues } from '../../../types';

export const useLoginForm = () => {
  const form = useForm<IFormValues>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) =>
    alert(JSON.stringify(data));

  return {
    form,
    onSubmit,
  };
};
