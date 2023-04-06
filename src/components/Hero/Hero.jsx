import React from 'react';
import {
  Aside,
  Button,
  Container,
  Item,
  List,
  MainContent,
  Section,
  Text,
  Title,
} from './Hero.styled';

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
    {
      name: 'Explore',
      link: '#',
    },
    {
      name: 'Help',
      link: '#',
    },
    {
      name: 'About Us',
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
                <a className="active" href={link} target="_blank" rel="noreferrer noopener">
                  {name}
                </a>
              </Item>
            ))}
          </List>
        </Aside>

        <MainContent>
          <Title>The Walchen Lake</Title>

          <Text>
            One of the deepest and largest alpine lakes in Germany and one of the best outdoors
            place that you never imagine before.
          </Text>

          <Button>Read more</Button>
        </MainContent>
      </Container>
    </Section>
  );
};

export default Hero;
