import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 25rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme['gray-800']};
  padding: 2rem;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ErrorSpan = styled.span`
  color: ${(props) => props.theme['red-500']};
  font-size: 0.875rem;
`;
