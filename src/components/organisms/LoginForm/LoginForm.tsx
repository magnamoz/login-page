import React from 'react';

import { NumberInput } from '../../atoms/NumberInput';
import { PasswordInput } from '../../atoms/PasswordInput';
import { Button } from '../../atoms/Button';
import { useLoginForm } from './LoginForm.logic';

import * as S from './styles';

export const LoginForm: React.FC = () => {
  const {
    form: {
      handleSubmit,
      register,
      formState: { errors },
    },
    onSubmit,
  } = useLoginForm();

  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NumberInput
          label="cpf"
          register={register}
          required
          placeholder={errors.cpf ? errors.cpf.message : 'Digite seu CPF'}
        />
        <PasswordInput
          label="password"
          register={register}
          required
          placeholder={errors.cpf ? errors.cpf.message : 'Digite sua senha'}
        />
        <Button />
      </form>
    </S.Container>
  );
};
