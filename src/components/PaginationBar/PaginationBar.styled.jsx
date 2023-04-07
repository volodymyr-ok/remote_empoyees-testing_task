import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-left: calc(270px + 118px);
  padding-right: 118px;
  transform: translateY(-300%);
`;

export const BarWrapper = styled.div`
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

export const PaginationDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const SectionDescr = styled.p`
  min-width: 108px;

  margin-left: 20px;
  font-size: 12px;
  font-weight: 700;
`;

export const FirstDivision = styled.div`
  margin-left: 30px;

  width: 570px;
  height: 1px;
  background-color: ${colors.notActive};
`;

export const PageDescr = styled(SectionDescr)`
  margin-left: 30px;
  min-width: 32px;
  text-align: center;
`;

export const SecondDivision = styled(FirstDivision)`
  width: 26px;
`;
