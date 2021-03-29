import React from 'react'
import illustration from '../../assets/illustration.png';
import Header from "../../components/header";
import { Wrapper, Container, Image, AsideContent, Title, Subtitle, ContentImg, Section, Button} from "./home.style";

const Home :React.FC = () => {

    return (
        <div>
            <Header />
            <Wrapper>
                <Container>
                    <ContentImg>
                        <Image
                            src={illustration}
                            alt="illustration"
                            style={{marginBottom: '70px'}}
                        />
                    </ContentImg>
                    <AsideContent>
                        <Title>Trouvez votre place rapidement</Title>
                        <Subtitle>C'est simple, rapide et gratuit </Subtitle>
                        <Section>
                            <Button to="/parking-home">Accéder!</Button>
                        </Section>
                    </AsideContent>
                </Container>
            </Wrapper>
        </div>
    )
}
export default Home;