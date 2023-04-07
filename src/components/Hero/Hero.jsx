import React from 'react';
import { Button, Container, MainContent, Section, Text, Title } from './Hero.styled';
import AsideNav from '../AsideNav/AsideNav';

const Hero = () => {
  return (
    <Section>
      <Container>
        <AsideNav />

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
