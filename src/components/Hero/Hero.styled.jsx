import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';
const mainBG = require('../../assets/img/mainBg.jpg');

export const Section = styled.section`
  min-height: 100vh;
  height: 100%;
  background-image: url(${mainBG});
  background-size: center;
  background-repeat: no-repeat;
  -webkit-box-shadow: inset 0px 0px 200px 20px rgba(0, 0, 0, 0.5);
`;

export const Container = styled.section`
  padding: 90px 0 0;
  width: 100%;
`;

export const Aside = styled.aside`
  background-color: ${colors.backdrop};
  height: calc(100vh - 90px);
  width: 270px;
  padding: 60px 0 0 56px;
`;

export const List = styled.ul``;
export const Item = styled.li``;
