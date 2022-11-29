import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import Imgbg from "../../assets/img-signIn.png";
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function SignUp( ) {
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const navigate = useNavigate()

    const handleSingUp = () => {
        if (!email || !setEmail || !setPassword) {
            alert("Por favor preencha todos os campos")
        }

        api.post("/users", {name, email, password}).then(() => {
            alert("Usuário cadastrado com sucesso")
            navigate("/")
        }).catch((error) => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar!")
            }
        })
    }

    return (
        <Container>
            <div className="container-acess">
                <div className="container-content">
                    <h1>RocketMovies</h1>
                    <p className="text-signIn">Aplicação para acompanhar tudo que assistir.</p>

                    <p className="subtitle">
                        Crie sua conta
                    </p>

                    <Input 
                        type="text" 
                        placeholder="Nome" 
                        icon={FiUser} 
                        onChange={e => setName(e.target.value)}
                    />
                    <Input 
                        type="email" 
                        placeholder="E-mail" 
                        icon={FiMail} 
                        onChange={e => setEmail(e.target.value)}    
                    />
                    <Input 
                        type="password" 
                        placeholder="Senha" 
                        icon={FiLock} 
                        onChange={e => setPassword(e.target.value)}
                    />

                    <div className="container-buttons">
                        <Button 
                            title="Cadastrar" 
                            onClick={handleSingUp}
                        />
                        <ButtonText to="/" title="Voltar para login" icon={AiOutlineArrowLeft} />
                    </div>
                </div>
            </div>
            <img src={Imgbg} alt="" />
        </Container>
    )
}