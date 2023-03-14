import styled, { css } from 'styled-components'

import { CarType } from '../../types'
import { CarCard } from './car-card'

import { useWindowSize } from '../../utils'

const Container = styled.div<{ isMobile: boolean }>`
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
`

type CarContainerProps = {
    cars: CarType[]
}
export const CarsContainer = ({ cars }: CarContainerProps) => {
    const { isMobile } = useWindowSize()

    return (
        <Container isMobile={isMobile}>
            {cars?.map((car: CarType) => (
                <CarCard key={car.id} car={car} />
            ))}
        </Container>
    )
}
