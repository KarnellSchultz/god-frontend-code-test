import styled from "styled-components";

export const DotHitBox = styled.button`
  background-color: white;
  border: none;
  padding: 0.8rem;
  display: grid;
  :hover {
    cursor: pointer;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Dot = styled.div<{ active: boolean }>`
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 5px;

  align-self: center;

  transform: translate(-50%, -50%);
  transition: all 200ms;
  background-color: ${({ active }) => (active ? "black" : "lightgrey")};
  ${({ active }) =>
    active &&
    `
  width: 7px;
  height: 7px;`}
`;
