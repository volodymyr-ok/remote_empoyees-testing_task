import React from 'react';
import styled from 'styled-components';
import AsideNav from '../../components/AsideNav/AsideNav';
import { device } from '../../utils/styles';

const Section = styled.section`
  min-height: calc(100vh - 170px);

  ${device.wide} {
    min-height: 100vh;
    padding-top: 90px;
  }
`;

const Help = () => {
  return (
    <Section>
      <AsideNav />
    </Section>
  );
};

export default Help;
