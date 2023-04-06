import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  background-color: ${colors.mainAccent};
  padding: 24px 56px;
  width: 360px;
  height: 90px;
  display: inline-flex;
  align-items: center;
  width: 400px;
`;

export const NavWrapper = styled.nav`
  display: flex;
  margin-right: 118px;
  align-items: center;
`;

export const Item = styled.li`
  :nth-child(1):after {
    content: ' ';
    min-height: 100%;
    border: 1px solid ${colors.mainText};
    margin-left: 48px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
`;

export const Link = styled.a`
  font-size: 12px;
  font-weight: 700;
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${colors.avaBg};
  border-radius: 50%;
  margin-left: 12px;
`;
