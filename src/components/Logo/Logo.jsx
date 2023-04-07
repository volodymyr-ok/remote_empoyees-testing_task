import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/repeatStyles';
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
  position: relative;

  font-size: 24px;
  font-weight: bold;
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
    /* margin-top: 10px; */
  }
`;

const Logo = () => {
  return <LogoLink to="./">trppd</LogoLink>;
};

export default Logo;
