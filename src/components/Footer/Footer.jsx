import React from 'react';
import {
  Container,
  Copyright,
  FooterSection,
  IconFace,
  IconInsta,
  IconTwit,
  Item,
  Link,
  List,
} from './Footer.styled';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Logo />

        <Copyright>&copy; 2017 - 2018</Copyright>

        <List>
          <Item>
            <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
              <IconInsta size={18} />
            </Link>
          </Item>

          <Item>
            <Link href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer noopener">
              <IconFace size={18} />
            </Link>
          </Item>

          <Item>
            <Link href="https://twitter.com/?lang=uk" target="_blank" rel="noreferrer noopener">
              <IconTwit size={18} />
            </Link>
          </Item>
        </List>
      </Container>
    </FooterSection>
  );
};

export default Footer;
