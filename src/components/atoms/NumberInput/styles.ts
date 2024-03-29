import styled from 'styled-components';

export const Input = styled.input`
  border: solid 2px ${(props) => props.theme['gray-800']};
  background-color: ${(props) => props.theme['gray-700']};
  width: 16rem;
  padding: 0.375rem;
  border-radius: 0.5rem;
`;
