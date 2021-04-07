import styled from "styled-components";
import bgImg from '../../assets/background-login.png'
import {Link} from "react-router-dom";

export const Container = styled.div`
    min-height: 90%;
    height: 900px;
    background: url("${bgImg}");
    background-size: cover;
    background-repeat: no-repeat; 
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 30%;
    height: 520px;
    background: #000;
    border-radius: 5px;
   
`
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
   
`
export const TitleLogin = styled.strong`
    text-align: center;
    font-family: Montserrat;
    color: #fff;
    font-size: 2rem;
    margin: 3rem 0;
`
export const Input = styled.input`
  margin: 8px 0 20px 0;
  color: #010101;
  font-size: 1rem;
  padding: 10px 5px;
  border-color: #fff
  font-family: 'Avenir';
  &:focus {
    outline: none;
  }
`
export const Label = styled.label`
    font-family: 'Avenir';
    font-size: 20px;
    color: #fff;
`
export const Button = styled.button`
  background-color: #3c5cc5;
  color: #fff;
  margin-top: 2rem;
  font-family: 'Montserrat';
  font-weight: 800;
  padding: 15px 20px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.4rem;
  width: 100%;
  border: none;
  transition: all 100ms ease-in-out;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 0.7;
  }
`
export const PasswordForgot = styled(Link)`
    font-family: 'Montserrat';
    color: #fff;
    text-align: center;
    margin-top: 20px;
    font-weight: 100;
`