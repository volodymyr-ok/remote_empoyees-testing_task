import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';

export const Container = styled.div`
  margin-top: 66px;
  margin-right: 118px;

  padding-left: calc(270px + 118px);
  padding-right: 0px;
`;

export const PaginationDetails = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const SectionDescr = styled.p`
  min-width: 108px;

  font-size: 12px;
  font-weight: 700;
`;

export const FirstDivision = styled.div`
  margin-left: 30px;

  width: 670px;
  height: 1px;
  background-color: ${colors.notActive};
`;

export const PageDescr = styled(SectionDescr)`
  margin-left: 30px;
  min-width: 32px;
  text-align: center;
`;

export const SecondDivision = styled(FirstDivision)`
  width: 30px;
`;
