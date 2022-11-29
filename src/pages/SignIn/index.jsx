import { Container } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import  Imgbg from "../../assets/img-signIn.png"
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    
    const { signIn } = useAuth();


    const handleSignIn = () => {
        signIn({email, password})
    }


    return (
        <Container>
            <div className="container-acess">
                <div className="container-content">
                    <h1>RocketMovies</h1>
                    <p className="text-signIn">Aplicação para acompanhar tudo que assistir.</p>

                    <p className="subtitle">
                        Faça seu login
                    </p>

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
                            title="Entrar" 
                            onClick={handleSignIn}
                        />
                        <Link to="/register">Criar conta</Link>
                    </div>
                </div>
            </div>
            <img src={Imgbg} alt="" />
        </Container>
    )
}