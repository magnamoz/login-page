import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  width: 25rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme['gray-800']};
  padding: 2rem;
  border-radius: 4px;
`;