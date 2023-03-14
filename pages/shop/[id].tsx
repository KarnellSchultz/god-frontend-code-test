import Image from 'next/image'
import { Logo, Spacer, Text } from 'vcc-ui'
import { getCars } from '../api/cars'
import { Layout } from '../../src/components/layout'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next/types'

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { id } = ctx.params as { id: string }
    const carData = await getCars()
    const car = carData.find((c) => c.id === id)
    return {
        props: {
            id: car?.id,
            imageUrl: car?.imageUrl,
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

type Props = {
    id: string
    imageUrl: string
}

export default function CarDetails({ id, imageUrl }: Props) {
    return (
        <Layout>
            <div>
                <Text>Shop - {id}</Text>
                <Image
                    src={`${imageUrl}`}
                    alt="cool car stuff"
                    width={640}
                    height={480}
                />
            </div>
            <Spacer size={4} />
            <Link href={'/'} passHref>
                <a>
                    <Logo type="spreadmark" height={12} />
                </a>
            </Link>
        </Layout>
    )
}
