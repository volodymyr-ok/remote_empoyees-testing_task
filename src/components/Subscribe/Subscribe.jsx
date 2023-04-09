import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
    Notify.success('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <>
      <Section>
        <Container>
          <Title>Subscribe to our newsletter</Title>

          <Form onSubmit={handleSubmit}>
            <InputWrap>
              <Input type="email" name="email" id="email" value={email} onChange={handleChange} />

              <Label isTransparent={!!email} htmlFor="email">
                Your Email
              </Label>
            </InputWrap>

            <Button disabled={email ? false : true} type="submit">
              Subscribe
            </Button>
          </Form>
        </Container>
      </Section>
    </>
  );
};

export default Subscribe;
