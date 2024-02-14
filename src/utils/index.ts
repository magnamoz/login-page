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
