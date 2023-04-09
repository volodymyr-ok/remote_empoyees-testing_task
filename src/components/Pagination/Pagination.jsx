import React, { useEffect, useState } from 'react';

import {
  Container,
  BtnsWrapper,
  ArrowBtn,
  SectionDescr,
  DetailsWrapper,
  FirstDivision,
  PageDescr,
  SecondDivision,
  Selector,
  Option,
} from './Pagination.styled';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';

const PaginationBar = ({
  config: {
    currentPage,
    pagesCount,
    setCurrentPage,
    sectionName,
    needCtrls,
    needSort,
    setSortingType,
  },
}) => {
  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = useState(false);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(false);

  useEffect(() => {
    if (currentPage === 1) setIsPrevBtnDisabled(true);
    else setIsPrevBtnDisabled(false);

    if (currentPage === pagesCount) setIsNextBtnDisabled(true);
    else setIsNextBtnDisabled(false);
  }, [currentPage, pagesCount]);

  const toPrevPage = () => (currentPage === 1 ? null : setCurrentPage(currentPage - 1));

  const toNextPage = () => (currentPage === pagesCount ? null : setCurrentPage(currentPage + 1));

  const changeSortingType = ({ target }) => {
    setSortingType(target.value);
    setCurrentPage(1);
  };

  const needToPosition = () => {
    if (sectionName === 'Outdoors Edition' && needCtrls) return true;
    return false;
  };

  return (
    <Container needToPosition={needToPosition()}>
      {needCtrls && (
        <BtnsWrapper>
          <ArrowBtn type="button" disabled={isPrevBtnDisabled} onClick={toPrevPage}>
            <FaChevronLeft />
          </ArrowBtn>

          <ArrowBtn type="button" disabled={isNextBtnDisabled} onClick={toNextPage}>
            <FaChevronRight />
          </ArrowBtn>
        </BtnsWrapper>
      )}

      <DetailsWrapper>
        <SectionDescr>{sectionName}</SectionDescr>

        <FirstDivision />

        <PageDescr>{`${currentPage} / ${pagesCount}`}</PageDescr>

        <SecondDivision />
      </DetailsWrapper>

      {needSort && (
        <>
          <Selector onChange={changeSortingType} name="pets" id="pet-select">
            <Option value="default">sort by</Option>
            <Option value="place">place</Option>
            <Option value="location">country</Option>
          </Selector>
          <MdArrowDropDown />

          <SecondDivision />
        </>
      )}
    </Container>
  );
};

export default PaginationBar;
