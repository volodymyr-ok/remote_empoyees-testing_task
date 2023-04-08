import styled from 'styled-components';
import { colors, device } from '../../utils/styles';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  ${device.narrow} {
    background-color: ${colors.mainAccent};
    padding: 20px;
    color: ${colors.minorText};
    font-size: 12px;
    font-weight: 700;
    height: 80px;
  }

  ${device.wide} {
    position: absolute;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  ${device.wide} {
    background-color: ${colors.mainAccent};
    padding: 24px 56px;
    width: 360px;
    height: 90px;
    width: 400px;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;

  ${device.wide} {
    margin-right: 118px;
  }
`;

export const Item = styled.li`
  ${device.wide} {
    :nth-child(1):after {
      content: '';
      min-height: 100%;
      border: 1px solid ${colors.mainText};
      margin-left: 48px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  ${device.wide} {
    gap: 48px;
    flex-direction: row;
    align-items: center;
  }
`;

export const NavLink = styled(Link)`
  ${device.wide} {
    font-size: 12px;
    font-weight: 700;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${device.wide} {
    width: 30px;
    height: 30px;
    background-color: ${colors.background};
    border-radius: 50%;
  }
`;
