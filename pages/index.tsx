import React, { useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";

import { Layout } from "../src/components/layout";
import { BodyTypeFilterKeys, CarsPerPage, CarType } from "../src/types";
import { Pagination } from "../src/components/pagination";
import { CarCard } from "../src/components/carCard";
import { Nav } from "../src/components/nav";
import { useWindowSize } from "../src/hooks/useWindowSize";

const CarsContainer = styled.div<{ isMobile: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ${({ isMobile }) =>
    isMobile &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    `}
`;

const App = () => {
  const [cars, setCars] = React.useState([]);
  const [activePage, setActivePage] = useState(1);
  const [filterKey, setFilterKey] =
    useState<keyof typeof BodyTypeFilterKeys>("ALL");

  useEffect(() => {
    fetch("/api/cars/")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const { isMobile } = useWindowSize();

  useEffect(() => {
    setActivePage(1);
  }, [isMobile, filterKey]);

  const filteredCars = useMemo(
    () =>
      filterKey !== BodyTypeFilterKeys.ALL
        ? cars.filter(
            (car: CarType) => car.bodyType.toUpperCase() === filterKey
          )
        : cars,
    [cars, filterKey]
  );

  const carsPerPage = isMobile ? CarsPerPage.Mobile : CarsPerPage.Desktop;
  const count = filteredCars.length;
  const totalPages = Math.ceil(count / carsPerPage);

  const calculatedCars = useMemo(
    () =>
      filteredCars.slice(
        (activePage - 1) * carsPerPage,
        activePage * carsPerPage
      ),
    [activePage, carsPerPage, filteredCars]
  );

  const nextPage = () => setActivePage((prev) => prev + 1);
  const prevPage = () => setActivePage((prev) => prev - 1);

  return (
    <Layout>
      <Nav setFilterKey={setFilterKey} filterKey={filterKey} />
      <CarsContainer isMobile={isMobile}>
        {calculatedCars?.map((car: CarType) => (
          <CarCard key={car.id} car={car} />
        ))}
      </CarsContainer>
      <Pagination
        totalPages={totalPages}
        activePage={activePage}
        count={count}
        carsPerPage={carsPerPage}
        nextPage={nextPage}
        prevPage={prevPage}
        setActivePage={setActivePage}
      />
    </Layout>
  );
};


export default App;
