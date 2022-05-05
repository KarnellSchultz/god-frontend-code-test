import React, { useEffect, useMemo, useState } from "react";

import { Layout } from "../src/components/layout";
import { BodyTypeFilterKeys, CarsPerPage, CarType } from "../src/types";
import { Pagination } from "../src/components/pagination";
import { Nav } from "../src/components/nav";
import { CarsContainer } from "../src/components/cars-container";

import { useWindowSize } from "../src/hooks/useWindowSize";

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
      <CarsContainer cars={calculatedCars} />
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
