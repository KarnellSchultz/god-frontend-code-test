import Image from 'next/image'
import { Logo, Spacer, Text } from 'vcc-ui'

import { getCars } from '../api/cars'

import type { CarType } from '../../src/types'
import { Layout } from '../../src/components/layout'
import Link from 'next/link'

export async function getServerSideProps(props: { params: { id: string } }) {
    const { params } = props
    const cars = await getCars()
    const car = cars.find((c) => c.id === params.id)
    return {
        props: {
            ...car,
        },
    }
}

export default function CarDetails({ id, imageUrl }: CarType) {
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
