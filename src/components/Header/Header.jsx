import React from 'react';

import { Avatar, Item, Link, List, LogoWrapper, NavWrapper, StyledHeader } from './Hedader.styled';
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
            <Link>My Collection</Link>
          </Item>

          <Item>
            <Link>Galih Pambudi</Link>
          </Item>
        </List>

        <Avatar></Avatar>
      </NavWrapper>
    </StyledHeader>
  );
};

export default Header;
