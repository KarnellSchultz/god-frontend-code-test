import React, { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { getCars } from "./api/cars";
import { CarType } from "../src/types";
import { Layout } from "../src/components/layout";
import { Card, CardContent, Spacer, Text, Link as VLink, Icon } from "vcc-ui";

import styled from "styled-components";

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

const ArrowButton = styled.div`
  :hover {
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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
            <Card
              style={{
                width: "384px",
                height: "388px",
                borderRadius: "0px",
                boxShadow: "none",
              }}
            >
              <CardContent style={{ padding: "0px", paddingBottom: "1rem" }}>
                <Text variant="columbus" subStyle={"inline-link"}>
                  {car.bodyType}
                </Text>
                <div style={{ display: "flex" }}>
                  <Text variant={"amundsen"} subStyle="emphasis">
                    {car.modelName}
                  </Text>
                  <Text subStyle={"inline-link"}>{car.modelType}</Text>
                </div>
              </CardContent>
              <Image
                src={car.imageUrl}
                alt="cool car stuff"
                width={250}
                height={400}
              />
              <LinkContainer>
                <Link href={`/learn/${car.id}`} passHref>
                  <VLink arrow="right">Learn</VLink>
                </Link>
                <Link href={`/shop/${car.id}`} passHref>
                  <VLink arrow="right">Shop</VLink>
                </Link>
              </LinkContainer>
            </Card>
          </CarCard>
        ))}
      </CarsContainer>

      <ButtonContainer>
        <ArrowButton>
          <Icon type="media-arrowleft-40" />
        </ArrowButton>
        <ArrowButton>
          <Icon type="media-next-40" />
        </ArrowButton>
      </ButtonContainer>
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
