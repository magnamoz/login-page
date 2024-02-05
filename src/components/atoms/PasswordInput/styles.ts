import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  border: solid 2px ${(props) => props.theme['gray-800']};
  background-color: ${(props) => props.theme['gray-700']};
  width: 14rem;
  padding: 0.375rem;
  /* border-radius: 4px 0 0 4px; */
  border-radius: 0.5rem;;

  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const ImageButton = styled.span`
  padding: 0.5rem;
  /* border: solid 1px ${(props) => props.theme['gray-800']};
  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 0 4px 4px 0; */

  position: absolute;
  right: 2px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme['gray-300']};
    opacity: 0;
    animation: fadeIn 0.3s forwards
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;
