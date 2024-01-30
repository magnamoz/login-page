import styled from 'styled-components';

export const Button = styled.button`
  border: solid 2px ${(props) => props.theme['gray-800']};
  background-color: ${(props) => props.theme['green-300']};
  width: 16.3rem;
  padding: 0.375rem;
  border-radius: 3px;

  color: ${(props) => props.theme['gray-300']};
`;
