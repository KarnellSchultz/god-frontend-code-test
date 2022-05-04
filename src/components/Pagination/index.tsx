import React from "react";
import styled from "styled-components";
import { Icon } from "vcc-ui/lib/components/icon";

const ArrowButton = styled.button`
  background-color: #fff;
  border: none;
  :hover {
    cursor: ${({ disabled }) => disabled && `pointer`};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Dot = styled.div<{ active: boolean }>`
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 5px;

  transform: translate(-50%, -50%);
  margin-right: 0.5rem;
  background-color: ${({ active }) => (active ? "black" : "lightgrey")};
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
`;

type PaginationProps = {
  totalPages: number;
  activePage: number;
  count: number;
  carsPerPage: number;
  prevPage: () => void;
  nextPage: () => void;
};

export const Pagination = ({
  totalPages,
  activePage,
  count,
  carsPerPage,
  prevPage,
  nextPage,
}: PaginationProps) => {
  const beginning = activePage === 1 ? 1 : carsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + carsPerPage - 1;

  console.log(activePage === 1);

  const renderDots = () => {
    const Dots = Array(totalPages).fill(null);
    return (
      <DotContainer>
        {Dots.map((_, idx) => {
          return <Dot key={idx + 1} active={activePage === idx + 1} />;
        })}
      </DotContainer>
    );
  };

  console.log(renderDots());

  return (
    <>
      <ButtonContainer>
        <ArrowButton disabled={activePage === 1} onClick={prevPage}>
          <Icon type="media-previous-40" />
        </ArrowButton>
        <ArrowButton disabled={totalPages === activePage} onClick={nextPage}>
          <Icon type="media-next-40" />
        </ArrowButton>
      </ButtonContainer>
      {renderDots()}
      <p>
        total: {beginning === end ? end : `${beginning} - ${end}`} of {count}
      </p>
    </>
  );
};
