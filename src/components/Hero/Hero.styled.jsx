import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';
const mainBG = require('../../assets/img/mainBg.jpg');

export const Section = styled.section`
  min-height: 120vh;
  background-image: url(${mainBG});
  background-size: center;
  background-repeat: no-repeat;

  box-shadow: inset 0px 0px 200px calc(100vw) ${colors.tintShadow};
  -webkit-box-shadow: inset 0px 0px 200px calc(100vw) ${colors.tintShadow};
`;

export const Container = styled.div`
  width: 100%;
  padding-top: 90px;
  height: calc(100vh);
  display: flex;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin: auto 0 auto 118px;
`;

export const Title = styled.h1`
  font-size: 54px;
  font-weight: 700;
  max-width: 360px;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 700;
  max-width: 360px;
  line-height: 20px;
`;
