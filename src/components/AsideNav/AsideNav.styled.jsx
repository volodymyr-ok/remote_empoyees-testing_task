import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';

export const Nav = styled.nav`
  background-color: ${colors.backdrop};
  height: calc(120vh - 90px);
  width: 270px;
  padding-top: calc(80px);
  padding-left: 56px;
`;

export const List = styled.ul`
  position: relative;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  font-weight: 700;
  color: ${colors.notActive};
  text-transform: capitalize;

  :hover,
  :focus {
    color: ${colors.mainText};
  }

  .active {
    color: ${colors.mainText};

    :after {
      content: '';
      position: absolute;
      right: 0;
      transform: translateY(8px);
      width: 90px;
      height: 1px;
      background-color: ${colors.mainText};
    }
  }
`;
