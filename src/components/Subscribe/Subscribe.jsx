import React, { useState } from 'react';
import { Container, Section, Button, Form, Title, Background } from './Subscribe.styled';

// import { ReactComponent as DottedWorldMap } from '../../assets/svg/world-map-dots.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <Section>
      <Background />
      <Container>
        <Title>Subscribe to our news letter</Title>

        <Form>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={handleChange}
          />

          <Button type="submit">Subscribe</Button>
        </Form>
      </Container>
    </Section>
  );
};

export default Subscribe;
