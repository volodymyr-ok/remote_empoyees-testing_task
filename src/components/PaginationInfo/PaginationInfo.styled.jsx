import styled from 'styled-components';
import { colors, device } from '../../utils/styles';

export const Container = styled.div`
  ${device.narrow} {
    padding: 0 20px;
  }

  ${device.wide} {
    margin-top: 66px;
    margin-right: 118px;

    padding-left: calc(270px + 118px);
    padding-right: 0px;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${device.narrow} {
    gap: 12px;
    line-height: 18px;
  }
`;

export const SectionDescr = styled.p`
  font-size: 12px;
  font-weight: 700;

  ${device.limited} {
    min-width: 108px;
  }

  ${device.wide} {
    min-width: 108px;
  }
`;

export const FirstDivision = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.notActive};

  ${device.wide} {
    margin-left: 30px;
    width: 670px;
  }
`;

export const PageDescr = styled(SectionDescr)`
  min-width: 32px;
  text-align: center;

  ${device.wide} {
    margin-left: 30px;
  }
`;

export const SecondDivision = styled(FirstDivision)`
  width: 30px;
  ${device.wide} {
  }
`;
