import React from 'react';
import styled from 'styled-components';
import AsideNav from '../../components/AsideNav/AsideNav';

const Section = styled.section`
  min-height: 100vh;
  padding-top: 90px;
`;

const Explore = () => {
  return (
    <Section>
      <AsideNav />
    </Section>
  );
};

export default Explore;
