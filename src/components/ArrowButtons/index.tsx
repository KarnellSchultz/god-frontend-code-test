import React from "react";
import styled from "styled-components";
import { Icon } from "vcc-ui/lib/components/icon";

const ArrowButton = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ArrowButtons = () => {
  return (
    <ButtonContainer>
      <ArrowButton>
        <Icon type="media-arrowleft-40" />
      </ArrowButton>
      <ArrowButton>
        <Icon type="media-next-40" />
      </ArrowButton>
    </ButtonContainer>
  );
};
