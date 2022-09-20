import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <div className="header">
                <Link to="/">RocketMovies</Link>

                <Input placeholder="Pesquisar pelo título" />

                <div className="container-acess">
                    <div className="container-login">
                        <p>Rafael Barros</p>
                        <a href="#">Sair</a>
                    </div>
                    <Link to="/profile">
                        <img src="https://github.com/dev-rafael92as.png" alt="Miniatura Logo Header" />
                    </Link>
                </div>
            </div>
        </Container>
    )
}