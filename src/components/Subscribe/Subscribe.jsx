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

    // fetch('/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: new URLSearchParams({ email }).toString(),
    // })
    //   .then(() => {
    //     //   setTimeout(openSuccessModal, 700);
    //     //   setTimeout(closeSuccessModal, 3000);
    //     console.log('Email sent');
    //   })
    //   .catch(error => console.log('Sending email failed'));

    setEmail('');
  };

  return (
    <Section>
      <Container>
        <Title>Subscribe to our news letter</Title>

        <Form
          name="subscription"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
          //   onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="subscription" />

          <InputWrap>
            <Input type="email" name="email" id="email" value={email} onChange={handleChange} />

            <Label isTransparent={!!email} htmlFor="email">
              Your Email
            </Label>
          </InputWrap>

          <Button onClick={handleSubmit} type="submit">
            Subscribe
          </Button>
        </Form>
      </Container>
    </Section>
  );
};

export default Subscribe;
