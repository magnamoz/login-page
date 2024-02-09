import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import { LoginFormSchema } from '../../../validations/loginForm';
import { IFormValues } from '../../../types';
import { login } from '../../../service';
import { ROUTES } from '../../../constants';

export const useLoginForm = () => {
  const form = useForm<IFormValues>({
    resolver: zodResolver(LoginFormSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const password = data.password;
    login(password);

    navigate(ROUTES.PROTECTED, { replace: true });
  };

  return {
    form,
    onSubmit,
  };
};
