import styled from "styled-components";

export const Container = styled.div`
    min-height: 90%;
    height: 100%;
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
    margin: 50px 10px;
    width: 200px;
    height: 400px;
    border-left: 2px dashed #fff;
    border-right: 2px dashed #fff;
    border-top: 2px solid #fff;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
`
export const ParkingPlace = styled.p`
    text-align: center;
    font-family: Montserrat;
    font-size: 1.5rem;
    color: #fff;

`
export const H3 = styled.strong`
    color: #000;
    font-family: "Montserrat";
    margin-left: 30px;
    background: #fff;
    padding: 5px;
    text-align: center;
`
export const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    position: absolute;
    bottom: -30px;
    left: 40%;
    transform: translate(-50%, -50%);
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
export const Line = styled.hr`
    width: 80%;
    color: #fff;
`
export const NoPlace = styled.p`
    color: #fff;
    font-family: "Montserrat";
    position: absolute;
    top: -50px;
    left: 50%;
    font-size: 18px;
    transform: translate(-50%, -50%);
`
export const Img = styled.img`
    width: 120px;
    margin-left: 35px;
`