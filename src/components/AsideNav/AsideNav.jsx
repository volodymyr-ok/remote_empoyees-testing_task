import React from 'react';
import { NavLink } from 'react-router-dom';
import { Item, List, Nav } from './AsideNav.styled';

const AsideNav = () => {
  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Recommendation',
      path: '/recommendation',
    },
    {
      name: 'Explore',
      path: '/explore',
    },
    {
      name: 'Help',
      path: '/help',
    },
    {
      name: 'About us',
      path: '/about',
    },
  ];

  return (
    <Nav>
      <List>
        {navLinks.map(({ name, path }) => (
          <Item>
            <NavLink to={path}>{name}</NavLink>
          </Item>
        ))}
      </List>
    </Nav>
  );
};

export default AsideNav;
