import { getCars } from '../api/cars'
import { Layout } from '../../src/components/layout'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import {
    CarDetails,
    CarDetailsProps,
} from '../../src/components/car-details/car-details'

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { id } = ctx.params as { id: string }
    const carData = await getCars()
    const car = carData.find((c) => c.id === id)

    if (!car) return { notFound: true }
    
    return {
        props: {
            id: car.id,
            imageUrl: car.imageUrl,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const carData = await getCars()
    return {
        paths: carData.map((car) => ({
            params: { id: car.id },
        })),
        fallback: true,
    }
}

export default function LearnPage({ id, imageUrl }: CarDetailsProps) {
    return (
        <Layout>
            <CarDetails id={id} imageUrl={imageUrl} />
        </Layout>
    )
}
