import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(20px);
  background-color: ${colors.backdropModal};
  opacity: 1;
`;
