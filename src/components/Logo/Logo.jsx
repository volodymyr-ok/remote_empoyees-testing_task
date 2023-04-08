import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/styles';
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  position: relative;
  color: ${colors.minorText};

  :after {
    position: absolute;
    bottom: 5px;
    right: -22px;

    content: '';
    display: block;
    width: 18px;
    height: 2px;
    background-color: ${colors.minorText};
  }
`;

const Logo = () => {
  return <LogoLink to="./">trppd</LogoLink>;
};

export default Logo;
