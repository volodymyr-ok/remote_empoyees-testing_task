import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';
const mainBG = require('../../assets/img/starrynight.jpg');

export const Section = styled.section`
  position: relative;
  z-index: 1;
  /* box-shadow: inset 0px 300px 300px 0 ${colors.background},
    inset 0px -10vh 100px 0 ${colors.background}; */
  /* min-height: 300vh; */
  /* background-image: url(${mainBG});
  background-size: 100%;
  background-position: top;
  background-repeat: no-repeat; */
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  box-shadow: inset 0px 300px 300px 0 ${colors.background},
    inset 0px -100px 100px 0 ${colors.background};

  min-height: 100vh;
  width: 100%;

  background-image: url(${mainBG});
  background-size: cover;
  /* background-size: 100%; */
  background-position: top;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  /* padding-top: 150px;
  padding-left: 270px; */
  padding: 150px 118px 90px 270px;
  /* min-width: 100%; */
`;

export const MainTitle = styled.h2`
  text-transform: capitalize;
  margin-bottom: 40px;
  font-size: 54px;
`;
export const MainDescr = styled.p`
  max-width: 450px;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;

  margin-bottom: 80px;
`;

export const List = styled.ul``;

export const Item = styled.li`
  padding: 56px 0;
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    /* margin-bottom: 30px; */
    border-bottom: 2px solid ${colors.border};
  }
`;

export const DescrWrapper = styled.div``;
export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const SubTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.subTitle};
  margin-bottom: 24px;
`;

export const Descr = styled.p`
  max-width: 600px;
  font-size: 11px;
  line-height: 18px;
  font-weight: 500;
  color: ${colors.descrText};
  margin-bottom: 28px;
`;

export const SubDescr = styled(Descr)`
  margin-bottom: 44px;
`;

export const ImageWrapper = styled.div`
  min-width: 268px;
  width: 100%;
  max-width: 268px;

  height: 268px;

  background-color: ${colors.tintShadow};
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;
