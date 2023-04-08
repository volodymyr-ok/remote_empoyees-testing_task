import styled from 'styled-components';
import { colors, device } from '../../utils/styles';

export const Nav = styled.nav`
  background-color: ${colors.backdrop};
  ${device.narrow} {
    padding: 20px;
  }

  ${device.wide} {
    height: calc(120vh - 90px);
    width: 270px;
    padding-top: 80px;
    padding-left: 56px;
  }
`;

export const List = styled.ul`
  ${device.narrow} {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  ${device.wide} {
    position: relative;
  }
`;

export const Item = styled.li`
  font-weight: 700;
  color: ${colors.locationText};

  .active {
    color: ${colors.mainText};
  }

  ${device.wide} {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
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
  }
`;
