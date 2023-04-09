import styled from 'styled-components';
import { colors, device } from '../../utils/styles';

export const Section = styled.section`
  box-shadow: 0px calc(-100vh + 90vh) 100px 100px ${colors.background};

  ${device.narrow} {
    padding-bottom: 60px;
  }

  ${device.wide} {
    min-height: 100vh;
    overflow: hidden;
  }
`;

export const Container = styled.div`
  ${device.narrow} {
    padding: 0 20px 20px;
  }

  ${device.wide} {
    display: flex;
    gap: 118px;
    padding-right: 118px;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  ${device.narrow} {
    gap: 12px;
    margin-bottom: 20px;
  }

  ${device.wide} {
    align-items: flex-end;
    width: 270px;
    min-height: 100%;
  }
`;

export const MainTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-transform: capitalize;

  ${device.wide} {
    line-height: 30px;
    max-width: 146px;
    text-align: end;

    margin-bottom: 18px;
  }
`;

export const MainDescr = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;

  ${device.wide} {
    text-align: end;
    max-width: 146px;
  }
`;

export const MainLink = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;

  font-size: 12px;
  font-weight: 700;
  text-align: end;

  :before {
    content: '';
    display: inline-block;
    right: 0;
    width: 90px;
    height: 1px;
    background-color: white;
  }

  ${device.narrow} {
    justify-content: flex-end;
  }

  ${device.wide} {
    line-height: 18px;
    margin-top: 118px;

    :hover,
    :focus {
      color: ${colors.hoveredAccent};
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const List = styled.ul`
  display: flex;
  gap: 60px;

  ${device.narrow} {
    justify-content: center;
    flex-wrap: wrap;
  }

  ${device.wide} {
    padding-top: 64px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 480px;

  ${device.narrow} {
    flex-basis: 45%;
    min-width: 270px;

    gap: 12px;
  }

  ${device.wide} {
    width: 270px;
  }
`;

export const CardWrap = styled.div``;

export const ImageWrap = styled.div`
  width: 100%;
  height: 270px;
  margin-bottom: 24px;
  background-color: ${colors.minorText};
  /* ${device.wide} {
    overflow: hidden;
  } */
  ${device.wide} {
    width: 270px;
  }
`;

export const Image = styled.img`
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
