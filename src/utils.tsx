import { useState, useEffect } from 'react'
import { CarType } from './types'

// API calls

export const ORIGIN_URL =
    process.env.NODE_ENV === 'development'
        ? process.env.localhost
        : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`

const routes = {
    cars: ORIGIN_URL + '/api/cars',
} as const

export const getCars = async () => {
    const response = await fetch(routes.cars)
    return (await response.json()) as CarType[]
}

// Hooks
export interface Size {
    width: number | undefined
    height: number | undefined
}

const MOBILE_BREAKPOINT = 768

export const useWindowSize = (mobileBreakpoint = MOBILE_BREAKPOINT) => {
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined,
    })
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const widownWidth = windowSize?.width ?? 1000
    const isMobile = widownWidth <= mobileBreakpoint ? true : false
    return { windowSize, isMobile }
}

export const useActivePage = (isMobile: boolean, filterKey: string) => {
    const initPage = 1
    const [activePage, setActivePage] = useState(initPage)
    useEffect(() => {
        setActivePage(initPage)
    }, [isMobile, filterKey])
    return [activePage, setActivePage] as const
}
