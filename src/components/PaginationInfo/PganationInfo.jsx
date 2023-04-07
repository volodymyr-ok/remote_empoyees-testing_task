import React from 'react';

import {
  Container,
  SectionDescr,
  PaginationDetails,
  FirstDivision,
  PageDescr,
  SecondDivision,
} from './PaginationInfo.styled';

const PaginationInfo = ({ info: { currentPage, pagesCount }, sectionName }) => {
  return (
    <Container>
      <PaginationDetails>
        <SectionDescr>{sectionName}</SectionDescr>

        <FirstDivision />

        <PageDescr>{`${currentPage} / ${pagesCount}`}</PageDescr>

        <SecondDivision />
      </PaginationDetails>
    </Container>
  );
};

export default PaginationInfo;
