import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';

export const Section = styled.section`
  min-height: 100vh;
  positon: relative;
  z-index: 1;
  box-shadow: 0px calc(-100vh + 90vh) 100px 100px ${colors.background};
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

  /* padding-top: 84px; */
`;

export const MainTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-transform: capitalize;
  max-width: 146px;
  text-align: end;
  line-height: 30px;

  margin-bottom: 18px;
`;

export const MainDescr = styled.p`
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
  padding-top: 64px;

  display: flex;
  gap: 60px;
`;

export const Item = styled.li`
  width: 270px;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardWrap = styled.div``;

export const ImageWrap = styled.div`
  width: 270px;
  height: 270px;
  margin-bottom: 24px;
  background-color: ${colors.minorText};
  overflow: hidden;
`;
export const Image = styled.img`
  width: 270px;
  height: 270px;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4px;
`;
export const SubTitle = styled.h4`
  color: ${colors.subTitle};
  margin-bottom: 24px;
`;
export const Description = styled.p`
  color: ${colors.descrText};
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
`;
export const Link = styled.a`
  text-transform: lowercase;
  font-size: 11px;
  font-weight: 500;
  color: ${colors.mainAccent};

  :hover,
  :focus {
    color: ${colors.hoveredAccent};
  }
`;
