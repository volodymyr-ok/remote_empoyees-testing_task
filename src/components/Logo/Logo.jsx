import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.minorText};
`;

const Logo = () => {
  return <LogoLink to="./">trppd_</LogoLink>;
};

export default Logo;
