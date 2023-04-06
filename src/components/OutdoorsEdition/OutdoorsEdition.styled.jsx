import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';

export const Section = styled.section`
  min-height: 100vh;
  height: 100%;
  positon: relative;
  z-index: 1;
  box-shadow: 0px calc(-100vh + 90vh) 100px 100px ${colors.background};
`;
