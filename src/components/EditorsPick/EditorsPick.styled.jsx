import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';

export const Section = styled.section`
  /* min-height: 100vh; */
  padding: 70px 0;
  positon: relative;
  z-index: 10;
  /* box-shadow: 0px 100px 100px 100px ${colors.background}; */

  /* box-shadow: 0px 20vh 100px 100px navy; */
`;

export const Container = styled.div`
  display: flex;
  gap: 118px;
  padding-right: 118px;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 270px;
  min-height: 100%;

  padding-top: 84px;
`;

export const AsideTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-transform: capitalize;
  max-width: 146px;
  text-align: end;
  line-height: 30px;

  margin-bottom: 18px;
`;

export const AsideDescr = styled.p`
  font-size: 12px;
  font-weight: 700;
  text-align: end;
  max-width: 146px;
  line-height: 18px;
`;

export const MainLink = styled.a`
  font-size: 12px;
  font-weight: 700;
  text-align: end;
  line-height: 18px;

  margin-top: 118px;
  display: flex;
  align-items: center;
  gap: 20px;

  :hover,
  :focus {
    color: ${colors.hoveredAccent};
  }

  :before {
    content: '';
    display: inline-block;
    right: 0;
    width: 90px;
    height: 1px;
    background-color: white;
  }
`;

export const List = styled.ul`
  max-width: 932px;
  max-height: 932px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 64px;
  grid-row-gap: 64px;
`;

export const Item = styled.li`
  position: relative;
  overflow: hidden;
  background-color: ${colors.minorText};

  :nth-child(1) {
    grid-area: 1 / 1 / 3 / 3;
  }
  :nth-child(2) {
    grid-area: 1 / 3 / 2 / 4;
  }
  :nth-child(3) {
    grid-area: 2 / 3 / 3 / 4;
  }
  :nth-child(4) {
    grid-area: 3 / 1 / 4 / 2;
  }
  :nth-child(5) {
    grid-area: 3 / 2 / 4 / 4;
  }

  :not(:nth-child(1)) {
    div {
      background-color: transparent;
      color: transparent;
      h4,
      p {
        color: transparent;
      }
    }
  }
`;

export const DescrWrap = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;

  height: 168px;
  width: 600px;
  padding: 24px 32px;

  background-color: rgba(50, 50, 50, 0.46);
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 4px;
`;

export const SubTitle = styled.h4`
  color: ${colors.locationText};
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: ${colors.descrText};
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
`;
