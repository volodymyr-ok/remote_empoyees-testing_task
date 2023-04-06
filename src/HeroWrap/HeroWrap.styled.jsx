import styled from 'styled-components';
const mainBG = require('../assets/img/mainBg.jpg');

export const HeroWrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  background-image: url(${mainBG});
  background-size: center;
  background-repeat: no-repeat;
  -webkit-box-shadow: inset 0px 0px 200px 20px rgba(0, 0, 0, 0.5);
`;
