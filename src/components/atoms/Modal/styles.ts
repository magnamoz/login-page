import styled from 'styled-components';

export const Modal = styled.div<{ $open?: boolean }>`
  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.$open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(17, 12, 15, 0.8);
`;

export const Content = styled.div`
  width: 26rem;
  height: 19rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme['gray-800']};;
  border-radius: 1rem;
`;

export const ImageButton = styled.span`
  display: flex;
  justify-content: flex-end;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Title = styled.h1`
   color: ${(props) => props.theme['yellow-500']};
   text-decoration: underline;
   padding-bottom: 0.5rem;
   padding-top: 0.5rem
`;

export const ModalContent = styled.span``;
