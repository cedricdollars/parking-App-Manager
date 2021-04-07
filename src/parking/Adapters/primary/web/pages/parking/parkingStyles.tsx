import styled from "styled-components";

export const Container = styled.div`
    min-height: 90%;
    height: 869px;
`
export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ParkContainer = styled.div`
    border: 1px solid black;
    height: 100%;
    background: #051937;
    
`
export const Title = styled.h1`
    color: #fff;
    font-family: Montserrat;
    text-align: center;
    margin-bottom: 3rem;
`
export const ParkingArea = styled.div`
    margin: 5px 7px;
    width: 200px;
    height: 400px;
    border-left: 2px dashed #fff;
    border-right: 2px dashed #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const ParkingPlace = styled.p`
    text-align: center;
    font-family: Montserrat;
    font-size: 1.5rem;
    color: #fff;
`
export const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    font-family: Montserrat;
    background: transparent;
    border: 1px solid white;
    color: #fff;
    &:hover {
        cursor: pointer;
        background: #fff;
        color: #f7d63a;
    }
`
