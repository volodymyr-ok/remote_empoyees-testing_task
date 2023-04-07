import React, { useState } from 'react';
import {
  Container,
  Section,
  Button,
  //   Form,
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

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch(error => alert(error));

    setEmail('');
  };

  return (
    <Section>
      <Container>
        <Title>Subscribe to our news letter</Title>

        <form data-netlify="true" name="subscription" method="post" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="subscription" />

          {/* <InputWrap> */}
          <Input type="email" name="email" id="email" value={email} onChange={handleChange} />

          <Label isTransparent={!!email} htmlFor="email">
            Your Email
          </Label>
          {/* </InputWrap> */}

          <Button onClick={handleSubmit} type="submit">
            Subscribe
          </Button>
        </form>
      </Container>
    </Section>
  );
};

export default Subscribe;
