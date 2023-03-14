import styled, { css } from 'styled-components'

export const DotHitBox = styled.button`
    background-color: white;
    border: none;
    padding: 0.8rem;
    display: grid;
    :hover {
        cursor: pointer;
    }
`

export const DotContainer = styled.div`
    display: flex;
    justify-content: center;
`

type DotType = { active: boolean }

const activeDotMixin = ({ active }: DotType) =>
    active &&
    css`
        background-color: black;
        width: 7px;
        height: 7px;
    `

export const Dot = styled.div<DotType>`
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 5px;

    align-self: center;

    transform: translate(-50%, -50%);
    transition: all 200ms;
    background-color: lightgrey;

    ${activeDotMixin}
`
