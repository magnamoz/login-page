import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PasswordErrorModal } from '..';

describe('[components] - PasswordErrorModal', () => {
  it('should render generic Modal', () => {
    render(<PasswordErrorModal open={true} handleClose={jest.fn()} />);

    const modal = screen.getByText(/Regras para a senha ser considera válida/i);

    expect(modal).toBeInTheDocument();
  });

  it('should close generic Modal with a user click', () => {
    const onClose = jest.fn();

    const container = render(
      <PasswordErrorModal open={true} handleClose={onClose} />,
    );

    fireEvent.click(container.getByLabelText('Fechar'));

    expect(onClose).toHaveBeenCalled();
  });
});
