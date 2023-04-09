import styled from 'styled-components';
import { colors, device } from '../../utils/styles';

export const Container = styled.div`
  position: relative;

  display: flex;
  gap: 20px;

  align-items: center;
  justify-content: center;

  max-width: 80%;
  max-height: 80%;
  padding: 20px;

  background-color: ${colors.backdrop};
  border-radius: 10px;
  overflow: hidden;

  ${device.narrow} {
    flex-wrap: wrap;
  }
  ${device.limited} {
    padding: 56px;
  }

  ${device.wide} {
    padding: 60px;
    gap: 60px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;

  background-color: ${colors.mainText};
  border-radius: 50%;
  border: none;

  cursor: pointer;

  :hover,
  :focus {
    background-color: ${colors.mainAccent};
  }
`;

export const ImageWrapper = styled.div`
  margin-right: auto;
  overflow: hidden;
  background-color: ${colors.background};
  border-radius: 10px;

  width: 200px;
  height: 250px;

  ${device.wide} {
    width: 300px;
    height: 350px;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  height: 250px;

  ${device.wide} {
    height: 350px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;

  flex-direction: column;
  align-items: center;
  justify-content: start;

  text-align: end;
`;

export const Title = styled.h5`
  margin: 0;
  text-transform: capitalize;
  font-size: 34px;
  max-width: 280px;

  ${device.wide} {
    font-size: 54px;
    max-width: 360px;
  }
`;
export const Descr = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;

  ${device.narrow} {
    max-width: 280px;
  }

  ${device.wide} {
    max-width: 360px;
  }
`;
