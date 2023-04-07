import styled from 'styled-components';
import { StyledButton } from '../BtnReadMore/BtnReadMore';
import { ReactComponent as DottedWorldMap } from '../../assets/svg/world-map-dots.svg';
// const background = require('../../assets/svg/world-map-dots.svg');

export const Section = styled.section`
  position: relative;

  min-height: 504px;
  /* background-image: url(${DottedWorldMap});
  background-size: center;
  background-repeat: no-repeat; */
`;

export const Background = styled(DottedWorldMap)`
  position: absolute;
  margin: 0 auto;
  width: 200px;
  height: 100px;
`;

export const Container = styled.div`
  margin: 0 118px;
  padding: 118px 0;
  border-top: 1px solid white;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: white;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(StyledButton)`
  font-weight: 700;
`;
