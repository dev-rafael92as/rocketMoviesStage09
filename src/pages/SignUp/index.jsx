import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import Imgbg from "../../assets/img-signIn.png";
import { FiMail, FiLock, FiUser } from "react-icons/fi"

export function SignUp( ) {
    return (
        <Container>
            <div className="container-acess">
                <div className="container-content">
                    <h1>RocketMovies</h1>
                    <p className="text-signIn">Aplicação para acompanhar tudo que assistir.</p>

                    <p className="subtitle">
                        Crie sua conta
                    </p>

                    <Input type="text" placeholder="Nome" icon={FiUser} />
                    <Input type="email" placeholder="E-mail" icon={FiMail} />
                    <Input type="password" placeholder="Senha" icon={FiLock} />

                    <Button title="Entrar" />
                    <ButtonText title="Criar conta" />
                </div>
            </div>
            <img src={Imgbg} alt="" />
        </Container>
    )
}