import styled from 'styled-components';
import { colors, device } from '../../utils/styles';

export const FooterSection = styled.footer`
  padding: 0 20px;
  height: 90px;
  background-color: ${colors.mainAccent};
  display: flex;
  align-items: center;
  color: ${colors.minorText};
  ${device.wide} {
    padding: 0 118px 0 56px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  ${device.wide} {
  }
`;

export const LogoWrapper = styled.div`
  display: inline-block;
  width: 94px;

  ${device.wide} {
    width: 156px;
  }
`;

export const Copyright = styled.p`
  font-size: 12px;
  font-weight: 700;
  ${device.wide} {
    font-weight: 900;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  ${device.wide} {
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  :hover,
  :focus {
    transform: scale(1.5);
  }
`;

export const Link = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: ${colors.minorText};
`;
