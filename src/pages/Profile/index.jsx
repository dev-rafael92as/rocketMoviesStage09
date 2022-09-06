import { ButtonText } from "../../components/ButtonText";
import { Container, Form } from "./styles";
import { FiArrowLeft, FiLock, FiUser, FiMail } from "react-icons/fi";
import { BiCamera } from "react-icons/bi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"

export function Profile() {
    return (
        <Container>
            <header>
                <div>
                    <ButtonText title="Voltar" icon={FiArrowLeft}/>
                </div>
            </header>
            
            <Form>
                <div className="container-photo">
                    <img src="https://github.com/dev-rafael92as.png" alt="Logo Usuário" />
                    <label htmlFor="avatar" className="container-icon-camera">
                        <BiCamera />
                        <input type="file" id="avatar"/>
                    </label>
                </div>
                <div className="form-input">
                    <Input icon={FiUser} type="text" placeholder="Nome"/>
                    <Input icon={FiMail} type="email" placeholder="E-mail"/>
                </div>
                <div className="form-input">
                    <Input icon={FiLock} type="password" placeholder="Senha Antiga"/>
                    <Input icon={FiLock} type="password" placeholder="Nova Senha"/>
                </div>
                <Button title="Salvar" />
            </Form>
        </Container>
    )
}