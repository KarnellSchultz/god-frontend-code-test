import React from "react";
import styled from "styled-components";
import { Icon } from "vcc-ui/lib/components/icon";

import { useWindowSize } from "../../hooks/useWindowSize";
import { Dot, DotContainer, DotHitBox } from "./dots";

const ArrowButton = styled.button`
  background-color: white;
  border: none;
  :hover {
    cursor: ${({ disabled }) => disabled && `pointer`};
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

type PaginationProps = {
  totalPages: number;
  activePage: number;
  count: number;
  carsPerPage: number;
  prevPage: () => void;
  nextPage: () => void;
  setActivePage: (value: number) => void;
};

export const Pagination = ({
  totalPages,
  activePage,
  prevPage,
  nextPage,
  setActivePage,
}: PaginationProps) => {
  const { isMobile } = useWindowSize();

  const renderDots = () => {
    const Dots = Array(totalPages).fill(null);
    return (
      <DotContainer>
        {Dots.map((_, idx) => {
          return (
            <DotHitBox key={idx + 1} onClick={() => setActivePage(idx + 1)}>
              <Dot active={activePage === idx + 1} />
            </DotHitBox>
          );
        })}
      </DotContainer>
    );
  };

  const renderButtons = () => (
    <ButtonContainer>
      <ArrowButton disabled={activePage === 1} onClick={prevPage}>
        <Icon type="media-previous-40" />
      </ArrowButton>
      <ArrowButton disabled={totalPages === activePage} onClick={nextPage}>
        <Icon type="media-next-40" />
      </ArrowButton>
    </ButtonContainer>
  );

  return (
    <>
      {!isMobile && renderButtons()}
      {renderDots()}
    </>
  );
};
