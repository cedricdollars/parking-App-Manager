import styled from "styled-components";
import { Link} from "react-router-dom";

export const Wrapper = styled.div`
    min-height: 90vh;
    background-color: #f7d63a;
`
export const Container = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
  
`
export const Image = styled.img`
    object-fit: cover;      
`
export const ContentImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
    
`
export const AsideContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: Montserrat;
    height: 90vh;
    background-color: #031B1A;
`
export const Title = styled.h1`
    margin-bottom: 10px; 
    color: #f7d63a;
    font-size: 2.5rem;
`
export const Subtitle = styled.h3`
    color: #e1e1e1;
    margin: 0;
    font-size: 2rem;
`
export const Section = styled.section`
   margin-top: 10vh; 
  
`
export const Button = styled(Link)`
    cursor:pointer;
    padding: 10px 55px;
    background: #fff;
    text-align: center;
    color: black;
    border: 2px solid white;
    font-size: 20px;
    transition: 200ms ease-in-out;
    text-decoration: none;
    outline: none;
    &:hover {
        
    }
`