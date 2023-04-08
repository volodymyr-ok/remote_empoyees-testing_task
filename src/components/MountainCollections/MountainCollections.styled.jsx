import styled from 'styled-components';
import { colors, device } from '../../utils/styles';
const mainBG = require('../../assets/img/starrynight.jpg');

export const Section = styled.section`
  position: relative;
  z-index: 1;
`;

export const Background = styled.div`
  background-image: url(${mainBG});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  box-shadow: inset 0px 300px 300px 0 ${colors.background},
    inset 0px -100px 100px 0 ${colors.background};

  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  min-height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  padding: 0 20px;

  ${device.wide} {
    padding: 150px 118px 90px 270px;
  }
`;

export const MainTitle = styled.h2`
  margin-bottom: 40px;

  font-size: 54px;
  text-transform: capitalize;
`;
export const MainDescr = styled.p`
  margin-bottom: 80px;
  max-width: 450px;

  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
`;

export const List = styled.ul`
  ${device.narrow} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export const Item = styled.li`
  display: flex;
  padding: 56px 0;

  :not(:last-child) {
    border-bottom: 2px solid ${colors.border};
  }

  ${device.narrow} {
    flex-basis: 45%;
    min-width: 280px;

    flex-direction: column-reverse;
    gap: 12px;
  }

  ${device.wide} {
    justify-content: space-between;
  }
`;

export const DescrWrapper = styled.div``;

export const Title = styled.h3`
  margin-bottom: 8px;

  font-size: 24px;
  font-weight: 700;
`;

export const SubTitle = styled.h4`
  margin-bottom: 24px;

  color: ${colors.subTitle};
  font-size: 18px;
  font-weight: 700;
`;

export const Descr = styled.p`
  margin-bottom: 28px;

  color: ${colors.descrText};
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;

  ${device.wide} {
    max-width: 600px;
  }
`;

export const SubDescr = styled(Descr)`
  margin-bottom: 44px;
`;

export const ImageWrapper = styled.div`
  background-color: ${colors.tintShadow};
  width: 100%;
  height: 268px;

  ${device.wide} {
    min-width: 268px;
    max-width: 268px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;
