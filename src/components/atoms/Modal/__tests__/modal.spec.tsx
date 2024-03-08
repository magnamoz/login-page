import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Modal } from '..';

describe('[components] - Modal', () => {
  it('should render generic Modal', () => {
    render(
      <Modal title="Teste" open={true} onClose={jest.fn()}>
        <h1>Generic Modal</h1>
      </Modal>,
    );

    const modal = screen.getByText('Generic Modal');

    expect(modal).toBeInTheDocument();
  });
});
