// @ts-nocheck
import Link from 'next/link'
import styled from 'styled-components'
import { StyleProvider, ThemePicker, View, Logo } from 'vcc-ui'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

type Props = { children: React.ReactNode }
export const Layout = ({ children }: Props) => {
    return (
        <Container>
            <StyleProvider>
                <ThemePicker variant="light">
                    <View padding={6}>
                        <Link href={'/'} passHref>
                            <Logo type="spreadmark" height={8} />
                        </Link>
                    </View>
                    {children}
                </ThemePicker>
            </StyleProvider>
        </Container>
    )
}
