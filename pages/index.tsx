import { useEffect, useState } from 'react'

import { Layout } from '../src/components/layout'
import { BodyTypes, BodyTypeKeysType, CarsPerPage, CarType } from '../src/types'
import { Nav } from '../src/components/nav'
import { CarsContainer } from '../src/components/cars-container'

import { getCars, useActivePage, useWindowSize } from '../src/utils'

import { GetStaticProps } from 'next'
import { Pagination } from '../src/components/Pagination'

export const getStaticProps: GetStaticProps = async () => {
    const carData = await getCars()
    return {
        props: {
            carData,
        },
    }
}

type Props = {
    carData: CarType[]
}

const App = ({ carData }: Props) => {
    const { isMobile } = useWindowSize()
    const [cars] = useState(carData)
    const [filterKey, setFilterKey] = useState<BodyTypeKeysType>(BodyTypes.ALL)

    const handleFilterKeyChange = (key: BodyTypeKeysType) => {
        setFilterKey(key)
    }

    const [activePage, setActivePage] = useActivePage(isMobile, filterKey)

    const filteredCars =
        filterKey !== BodyTypes.ALL
            ? cars.filter(
                  (car: CarType) => car.bodyType.toUpperCase() === filterKey
              )
            : cars

    const carsPerPage = isMobile ? CarsPerPage.Mobile : CarsPerPage.Desktop
    const count = filteredCars.length
    const totalPages = Math.ceil(count / carsPerPage)

    const calculatedCars = filteredCars.slice(
        (activePage - 1) * carsPerPage,
        activePage * carsPerPage
    )

    const nextPage = () => setActivePage((prev) => prev + 1)
    const prevPage = () => setActivePage((prev) => prev - 1)

    return (
        <Layout>
            <Nav handleClick={handleFilterKeyChange} filterKey={filterKey} />
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
    )
}

export default App
