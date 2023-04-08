import styled from 'styled-components';
import { colors, device } from '../../utils/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  transform: translateY(-300%);

  ${device.wide} {
    position: absolute;
    justify-content: flex-start;

    padding-left: calc(270px + 118px);
    padding-right: 118px;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const ArrowBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  padding: 0;
  cursor: pointer;
  background-color: ${colors.mainText};
  border-color: transparent;
  border-radius: 50%;
  :not(:disabled):hover {
    background-color: ${colors.mainAccent};
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${device.narrow} {
    gap: 12px;
    margin-left: 12px;
    line-height: 18px;
  }

  ${device.wide} {
    margin-left: 20px;

    justify-content: space-between;
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
    width: 570px;
    height: 1px;
    background-color: ${colors.notActive};
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
  width: 26px;
`;
