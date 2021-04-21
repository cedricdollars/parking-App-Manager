import styled from "styled-components";

export const Container = styled.div`
    min-height: 90%;
    height: 100%;
`
export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
`
export const ParkContainer = styled.div`
    border: 1px solid black;
    height: 100%;
    background: #051937;
    position: relative;
`
export const Title = styled.h1`
    color: #fff;
    font-family: Montserrat;
    text-align: center;
    margin-bottom: 3rem;
`
export const ParkingArea = styled.div`
    margin: 50px 10px;
    width: 280px;
    height: 400px;
    border-left: 2px dashed gray;
    border-right: 2px dashed gray;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
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
    background: #051937;
    border: 1px #98a0e0 solid;
    position: absolute;
    bottom: -30px;
    left: 40%;
    transform: translate(-50%, -50%);
    font-family: Montserrat;
    color: #98a0e0;
    &:hover {
        cursor: pointer;
    }
`
export const Line = styled.hr`
    width: 100%;
    color: gray;
`
export const MessageText = styled.strong`
    color: red;
    font-family: "Montserrat";
    position: absolute;
    bottom: -30px;
    display: inline;
    left: 50%;
    font-size: 18px;
    transform: translate(-50%, -50%);
`
export const NoPlace = styled.p`
    color: #fff;
    font-family: "Montserrat";
    font-size: 1.5rem;
    text-align: center;
`
export const Img = styled.img`
    width: 120px;
    margin-left: 75px;
    transition: 500ms all ease-in-out
`
export const Select = styled.select`
    background: #051937;
    color: #98a0e0;
    padding: 10px;
    font-size: 17px;
    font-family: "Montserrat";
    border: 1px #98a0e0 solid;
    border-radius: 10px;
    margin-top: 3rem;
    margin-bottom: 5rem;
    position: absolute;
    right: 10px;
    outline: none;
    
     option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         min-height: 20px;
         padding: 0px 5px 5px;
       }
`