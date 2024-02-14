import { cpfMask } from '..';

describe('[utils] - CPF mask', () => {
  it('should apply mask', () => {
    const masked = cpfMask('12345678910');
    expect(masked).toBe('123.456.789-10');
  });
});
