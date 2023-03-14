import Image from 'next/image'
import { Logo, Spacer, Text } from 'vcc-ui'
import Link from 'next/link'

export type CarDetailsProps = {
    id: string
    imageUrl: string
}

export const CarDetails = ({ id, imageUrl }: CarDetailsProps) => (
    <>
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
    </>
)
