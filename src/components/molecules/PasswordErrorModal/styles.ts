import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${(props) => props.theme['yellow-500']};
`;

export const List = styled.ul`
  padding: 1rem;
`;

export const ItemList = styled.li`
  color: ${(props) => props.theme['gray-300']};
  list-style-type: circle;

  padding: 0.25rem;
`;
