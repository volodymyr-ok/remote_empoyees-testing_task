import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';
const mainBG = require('../../assets/img/mainBg.jpg');

export const Section = styled.section`
  min-height: 120vh;
  background-image: url(${mainBG});
  background-size: center;
  background-repeat: no-repeat;

  box-shadow: inset 0px 0px 200px calc(100vw) rgba(146, 146, 146, 0.3);
  -webkit-box-shadow: inset 0px 0px 200px calc(100vw) rgba(146, 146, 146, 0.3);
`;

export const Container = styled.div`
  width: 100%;
  padding-top: 90px;
  height: calc(100vh);
  display: flex;
`;

export const Aside = styled.div`
  background-color: ${colors.backdrop};
  height: calc(120vh - 90px);
  width: 270px;
  padding-top: calc(80px);
  padding-left: 56px;
`;

export const List = styled.ul`
  position: relative;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  font-weight: 700;

  :first-child:after {
    content: '';
    position: absolute;
    right: 0;
    width: 90px;
    height: 1px;
    background-color: white;
  }

  :not(:first-child) {
    color: ${colors.notActive};
  }
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

export const Button = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  background-color: ${colors.mainAccent};
  width: 128px;
  height: 36px;
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 700;
`;
