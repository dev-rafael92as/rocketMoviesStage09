import { Container } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import  Imgbg from "../../assets/img-signIn.png"
import { Link } from "react-router-dom";

export function SignIn() {
    return (
        <Container>
            <div className="container-acess">
                <div className="container-content">
                    <h1>RocketMovies</h1>
                    <p className="text-signIn">Aplicação para acompanhar tudo que assistir.</p>

                    <p className="subtitle">
                        Faça seu login
                    </p>

                    <Input type="email" placeholder="E-mail" icon={FiMail} />
                    <Input type="password" placeholder="Senha" icon={FiLock} />

                    <div className="container-buttons">
                        <Button title="Entrar" />
                        <Link to="/register">Criar conta</Link>
                    </div>
                </div>
            </div>
            <img src={Imgbg} alt="" />
        </Container>
    )
}