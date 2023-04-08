import React from 'react';

import {
  Container,
  SectionDescr,
  DetailsWrapper,
  FirstDivision,
  PageDescr,
  SecondDivision,
} from './PaginationInfo.styled';

const PaginationInfo = ({ info: { currentPage, pagesCount }, sectionName }) => {
  return (
    <Container>
      <DetailsWrapper>
        <SectionDescr>{sectionName}</SectionDescr>

        <FirstDivision />

        <PageDescr>{`${currentPage} / ${pagesCount}`}</PageDescr>

        <SecondDivision />
      </DetailsWrapper>
    </Container>
  );
};

export default PaginationInfo;
