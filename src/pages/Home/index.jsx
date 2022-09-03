import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Home() {
    return (
        <Container>
            <Header />

            <div className="container-title-home">
                <h1>Meus filmes</h1>
                <Button title="Adicionar Filme" />
            </div>

        </Container>
    )
}