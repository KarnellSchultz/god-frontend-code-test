import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Text, Link as VLink } from "vcc-ui";
import { CarType } from "../../types";
import {
  CardContainer,
  CardHeading,
  CarTextDetials,
  LinkContainer,
} from "./styles";

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
