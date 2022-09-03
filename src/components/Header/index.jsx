import { Input } from "../Input";
import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <div className="header">
                <a href="#">RocketMovies</a>

                <Input placeholder="Pesquisar pelo título" />

                <div className="container-acess">
                    <div className="container-login">
                        <p>Rafael Barros</p>
                        <a href="#">Sair</a>
                    </div>
                    <img src="https://github.com/dev-rafael92as.png" alt="Miniatura Logo Header" />
                </div>
            </div>
        </Container>
    )
}