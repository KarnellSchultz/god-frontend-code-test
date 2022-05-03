import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

import { Spacer, Text, Link as VLink, Icon } from "vcc-ui";

import { CarType } from "../src/types";
import { getCars } from "./api/cars";
import { Layout } from "../src/components/layout";
import { ArrowButtons } from "../src/components/ArrowButtons";

const CarsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const CarCard = styled.div`
  margin: 0 1rem;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CardHeading = styled.div`
  padding: 0px;
  paddingbottom: "1rem";
`;

const App = () => {
  const [cars, setCars] = React.useState([]);
  useEffect(() => {
    fetch("/api/cars/")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);



  return (
    <Layout>
      <CarsContainer>
        {cars?.map((car: CarType) => (
          <CarCard key={car.id}>
            <CardHeading>
              <Text variant="columbus" subStyle={"inline-link"}>
                {car.bodyType}
              </Text>
              <div style={{ display: "flex" }}>
                <Text variant={"amundsen"} subStyle="emphasis">
                  {car.modelName}
                </Text>
                <Text subStyle={"inline-link"}>{car.modelType}</Text>
              </div>
            </CardHeading>
            <Image
              src={car.imageUrl}
              alt="cool car stuff"
              width={256}
              height={192}
            />
            <LinkContainer>
              <Link href={`/learn/${car.id}`} passHref>
                <VLink arrow="right">Learn</VLink>
              </Link>
              <Link href={`/shop/${car.id}`} passHref>
                <VLink arrow="right">Shop</VLink>
              </Link>
            </LinkContainer>
          </CarCard>
        ))}
      </CarsContainer>

      <ArrowButtons />
    </Layout>
  );
};

export async function getServerSideProps() {
  const cars = await getCars();
  return {
    props: {
      cars,
    },
  };
}

export default App;
