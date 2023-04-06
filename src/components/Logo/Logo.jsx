import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';

const LogoLink = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.primaryText};
`;

const Logo = () => {
  return <LogoLink href="./">trppd_</LogoLink>;
};

export default Logo;
