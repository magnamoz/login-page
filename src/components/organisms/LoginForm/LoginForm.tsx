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

  console.log('erros', errors);
  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NumberInput
          label="cpf"
          register={register}
          required
          placeholder="Digite seu CPF"
        />
        {errors.cpf && <S.ErrorSpan>{errors.cpf.message}</S.ErrorSpan>}
        <PasswordInput
          label="password"
          register={register}
          required
          placeholder="Digite sua senha"
        />
        {errors.password && (
          <S.ErrorSpan>{errors.password.message}</S.ErrorSpan>
        )}
        <Button title="Fazer Login" type="submit" />
      </form>
    </S.Container>
  );
};
