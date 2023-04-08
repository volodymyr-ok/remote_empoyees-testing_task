import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import {
  Container,
  Copyright,
  FooterSection,
  Item,
  Link,
  List,
  LogoWrapper,
} from './Footer.styled';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <Copyright>&copy; 2017 - 2018</Copyright>

        <List>
          <Item>
            <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
              <AiOutlineInstagram size={18} />
            </Link>
          </Item>

          <Item>
            <Link href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer noopener">
              <RiFacebookFill size={18} />
            </Link>
          </Item>

          <Item>
            <Link href="https://twitter.com/?lang=uk" target="_blank" rel="noreferrer noopener">
              <AiOutlineTwitter size={18} />
            </Link>
          </Item>
        </List>
      </Container>
    </FooterSection>
  );
};

export default Footer;
