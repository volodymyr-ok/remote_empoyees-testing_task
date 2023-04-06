import React from 'react';
import { Aside, Container, Item, List, Section } from './Hero.styled';

const Hero = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '#',
    },
    {
      name: 'Recommendation',
      link: '#',
    },
  ];

  return (
    <Section>
      <Container>
        <Aside>
          <List>
            {navLinks.map(({ name, link }) => (
              <Item>
                <a href={link}>{name}</a>
              </Item>
            ))}
          </List>
        </Aside>
      </Container>
    </Section>
  );
};

export default Hero;
