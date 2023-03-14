import { Layout } from '../../src/components/layout'
import { GetServerSideProps, GetStaticPaths } from 'next/types'
import { getCars } from '../../src/utils'
import {
    CarDetails,
    CarDetailsProps,
} from '../../src/components/car-details/car-details'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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

export default function LearnPage({ id, imageUrl }: CarDetailsProps) {
    return (
        <Layout>
            <CarDetails id={id} imageUrl={imageUrl} />
        </Layout>
    )
}
