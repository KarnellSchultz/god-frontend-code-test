import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { Text, Link as VLink } from "vcc-ui";

import { CarType } from "../../types";

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const CardHeading = styled.div`
  padding: 0px;
  padding-bottom: 1rem;
`;

export const CardContainer = styled.div`
  margin: 2rem 1rem;
`;

export const CarTextDetials = styled.div`
  display: flex;
  p {
    padding-right: 0.3rem;
  }
`;

type CarCardProps = { car: CarType };
export const CarCard = ({ car }: CarCardProps) => {
  return (
    <CardContainer>
      <CardHeading>
        <Text variant="columbus" subStyle={"inline-link"}>
          {car.bodyType}
        </Text>
        <CarTextDetials>
          <Text variant={"amundsen"} subStyle="emphasis">
            {car.modelName}
          </Text>
          <Text subStyle={"inline-link"}>{car.modelType}</Text>
        </CarTextDetials>
      </CardHeading>
      <Image src={car.imageUrl} alt="cool car stuff" width={256} height={192} />
      <LinkContainer>
        <Link href={`/learn/${car.id}`} passHref>
          <VLink arrow="right">Learn</VLink>
        </Link>
        <Link href={`/shop/${car.id}`} passHref>
          <VLink arrow="right">Shop</VLink>
        </Link>
      </LinkContainer>
    </CardContainer>
  );
};
