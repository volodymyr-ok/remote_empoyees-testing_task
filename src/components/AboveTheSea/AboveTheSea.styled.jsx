import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';

export const Section = styled.section`
  padding: 60px 118px 60px 0;
  display: flex;
  gap: 120px;
`;

export const ImageWrap = styled.div`
  height: 600px;
  width: 600px;
  background-color: ${colors.minorText};
`;

export const Image = styled.img`
  height: 600px;
  object-fit: cover;
`;

export const Content = styled.div`
  height: 100%;
`;

export const Title = styled.h2`
  width: 250px;
  margin-bottom: 44px;

  font-size: 48px;
  font-weight: 700;
  height: 100%;
  text-transform: capitalize;
`;

export const Quote = styled.p`
  margin-bottom: 54px;
  width: 480px;

  display: flex;
  gap: 8px;

  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.descrText};
`;

export const Descr = styled.div`
  max-width: 356px;
  margin-bottom: 54px;

  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  color: ${colors.descrText};
`;
