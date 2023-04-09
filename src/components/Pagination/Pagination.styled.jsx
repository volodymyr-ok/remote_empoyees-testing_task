import styled from 'styled-components';
import { colors, device } from '../../utils/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  transform: translateY(${({ needToPosition }) => (needToPosition ? '-600%' : 0)});

  ${device.wide} {
    position: ${({ needToPosition }) => (needToPosition ? 'absolute' : 'static')};
    min-width: 930px;
    justify-content: flex-start;
    transform: translateY(${({ needToPosition }) => (needToPosition ? '-300%' : 0)});
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 12px;

  ${device.wide} {
    margin-right: 20px;
  }
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
  border-radius: 50px;

  ${device.wide} {
    margin-left: 30px;
    width: 100%;
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

  ${device.wide} {
    width: 40px;
  }
`;

export const SelectorWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const Selector = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  text-align: center;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
  line-height: inherit;

  ${device.wide} {
    margin-left: 30px;
  }
`;

export const Option = styled.option`
  appearance: none;
  background-color: ${colors.background};
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: ${colors.mainText};
  cursor: pointer;
  line-height: inherit;
`;
