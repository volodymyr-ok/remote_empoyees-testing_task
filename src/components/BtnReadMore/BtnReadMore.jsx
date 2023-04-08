import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../utils/styles';

export const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 20px;
  border: none;
  background-color: ${colors.mainAccent};
  width: 128px;
  height: 36px;
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 600;

  :hover,
  :focus {
    background-color: ${colors.hoveredAccent};
  }
  ${device.wide} {
  }
`;

const BtnReadMore = () => {
  return <StyledButton>Read more</StyledButton>;
};

export default BtnReadMore;
