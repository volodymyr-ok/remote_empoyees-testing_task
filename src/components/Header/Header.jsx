import React from 'react';

import {
  Avatar,
  Item,
  NavLink,
  List,
  LogoWrapper,
  NavWrapper,
  StyledHeader,
} from './Hedader.styled';
import { HiUser } from 'react-icons/hi';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <NavWrapper>
        <List>
          <Item>
            <NavLink to={'./'}>My Collection</NavLink>
          </Item>

          <Item>
            <NavLink to={'./'}>Galih Pambudi</NavLink>
          </Item>
        </List>

        <Avatar>
          <HiUser size={20} />
        </Avatar>
      </NavWrapper>
    </StyledHeader>
  );
};

export default Header;
