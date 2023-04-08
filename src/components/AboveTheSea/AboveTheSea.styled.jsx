import styled from 'styled-components';
import { colors, device } from '../../utils/styles';

export const Section = styled.section`
  display: flex;

  ${device.narrow} {
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0 20px;
    gap: 20px;
    padding-bottom: 60px;
  }

  ${device.wide} {
    padding: 60px 118px 60px 0;
    gap: 120px;
  }
`;

export const ImageWrap = styled.div`
  background-color: ${colors.minorText};

  ${device.narrow} {
    height: 280px;
    width: 280px;
  }

  ${device.limited} {
    height: 350px;
    width: 350px;
  }

  ${device.wide} {
    height: 600px;
    width: 600px;
  }
`;

export const Image = styled.img`
  object-fit: cover;

  ${device.narrow} {
    height: 280px;
  }

  ${device.limited} {
    height: 350px;
  }

  ${device.wide} {
    height: 600px;
  }
`;

export const Content = styled.div`
  ${device.narrow} {
    width: 280px;

    button {
      display: block;
      margin-left: auto;
    }
  }

  ${device.limited} {
    width: 350px;
  }

  ${device.wide} {
    height: 100%;
  }
`;

export const Title = styled.h2`
  width: 250px;
  margin-bottom: 44px;

  font-size: 48px;
  font-weight: 700;
  text-transform: capitalize;

  ${device.narrow} {
    margin-left: auto;
    text-align: end;
  }

  ${device.wide} {
    height: 100%;
  }
`;

export const Quote = styled.p`
  display: flex;
  gap: 8px;

  margin-bottom: 54px;

  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.descrText};

  ${device.wide} {
    width: 480px;
  }
`;

export const Descr = styled.div`
  margin-bottom: 54px;

  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: ${colors.descrText};

  ${device.narrow} {
    text-align: end;
  }

  ${device.wide} {
    max-width: 356px;
  }
`;
