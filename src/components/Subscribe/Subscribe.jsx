import React, { useState } from 'react';
import {
  Container,
  Section,
  Button,
  Form,
  Title,
  Input,
  Label,
  InputWrap,
} from './Subscribe.styled';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const handleChange = ({ target: { value } }) => setEmail(value);
  const handleSubmit = event => {
    event.preventDefault();
    setEmail('');
  };

  return (
    <Section>
      <Container>
        <Title>Subscribe to our news letter</Title>

        <Form data-netlify="true" onSubmit={handleSubmit}>
          <InputWrap>
            <Input type="email" name="email" id="email" value={email} onChange={handleChange} />

            <Label isTransparent={!!email} htmlFor="email">
              Your Email
            </Label>
          </InputWrap>

          <Button type="submit">Subscribe</Button>
        </Form>
      </Container>
    </Section>
  );
};

export default Subscribe;
