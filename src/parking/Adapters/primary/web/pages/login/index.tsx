import React, {ChangeEvent, useState} from 'react'
import {Container, LoginContainer, LoginForm, Input, TitleLogin, Label, Button, PasswordForgot} from "./loginStyle";
import Header from "../../components/header";


// @ts-ignore
const Login: React.FC = ({history}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        history.push('/parking-home')
    }
    return (
        <>
            <Header />
            <Container>
                <LoginContainer>
                    <LoginForm onSubmit={handleSubmit}>
                        <TitleLogin>Bienvenue</TitleLogin>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) }
                        />
                        <Label>Mot de passe</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                        <Button>Se connecter</Button>
                        <PasswordForgot to={"/"} >Mot de passe oublié?</PasswordForgot>
                    </LoginForm>

                </LoginContainer>
            </Container>
        </>

    )
}
export default Login