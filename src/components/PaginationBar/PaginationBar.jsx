import React, { useEffect, useState } from 'react';

import {
  Container,
  BarWrapper,
  ArrowBtn,
  SectionDescr,
  PaginationDetails,
  FirstDivision,
  PageDescr,
  SecondDivision,
} from './PaginationBar.styled';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PaginationBar = ({ info: { currentPage, pagesCount }, setPage, sectionName }) => {
  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = useState(false);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(false);

  useEffect(() => {
    if (currentPage === 1) setIsPrevBtnDisabled(true);
    else setIsPrevBtnDisabled(false);

    if (currentPage === pagesCount) setIsNextBtnDisabled(true);
    else setIsNextBtnDisabled(false);
  }, [currentPage, pagesCount]);

  const toPrevPage = () => (currentPage === 1 ? null : setPage(currentPage - 1));

  const toNextPage = () => (currentPage === pagesCount ? null : setPage(currentPage + 1));

  return (
    pagesCount > 1 && (
      <Container>
        <BarWrapper>
          <ArrowBtn type="button" disabled={isPrevBtnDisabled} onClick={toPrevPage}>
            <FaChevronLeft />
          </ArrowBtn>

          {/* <NumBar>
            {renderButtons().map(el => (
              <li key={'buttonId' + el}>
                <NumBtn type="button" active={turnToActive(el)} onClick={changePage}>
                  {el}
                </NumBtn>
              </li>
            ))}
          </NumBar> */}
          <ArrowBtn type="button" disabled={isNextBtnDisabled} onClick={toNextPage}>
            <FaChevronRight />
          </ArrowBtn>
        </BarWrapper>

        <PaginationDetails>
          <SectionDescr>{sectionName}</SectionDescr>

          <FirstDivision />

          <PageDescr>{`${currentPage} / ${pagesCount}`}</PageDescr>

          <SecondDivision />
        </PaginationDetails>
      </Container>
    )
  );
};

export default PaginationBar;
