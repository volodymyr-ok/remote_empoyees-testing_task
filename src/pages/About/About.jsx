import React from 'react';
import styled from 'styled-components';
import AsideNav from '../../components/AsideNav/AsideNav';

const Section = styled.section`
  min-height: 100vh;
  padding-top: 90px;
`;

const About = () => {
  return (
    <Section>
      <AsideNav />
    </Section>
  );
};

export default About;
