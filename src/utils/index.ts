/**
 * remove todo carácter que não é número
 * @argument value 04201351342
 * @returns 042.013.513.42
 */
export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

/**
 * verifica se o CPF é válido
 * @argument value CPF
 * @returns 'true' caso seja válido e 'false' caso o CPF seja inválido
 */
export const validateCpf = (cpf: string) => {
  // tirar formatação e armazenar apenas os números
  const digits = cpf.replace(/\D/g, '');

  // verificar se o CPF tem 11 dígitos e se os dígitos são de mesmo valor
  if (digits.length !== 11 || digits.match(/(\d)\1{10}/)) return false;

  return true;
};

/**
 * verifica se a senha é válida
 * @argument value senha
 * @returns 'true' caso seja válido e 'false' caso a senha seja inválida
 */
export const validatePassword = (password: string) => {
  // deve conter apenas caracteres alfanuméricos: A-Z, a-z, 0-9
  // deve ter tenha ao menos: 1 letra maiúscula, 1 minúscula e 1 número
  // deve ter entre 5 e 8 caracteres no total
  if (password.match('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{5,8}$'))
    return true;

  return false;
};
