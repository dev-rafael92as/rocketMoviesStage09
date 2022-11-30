import { ButtonText } from "../../components/ButtonText";
import { Container, Form } from "./styles";
import { FiArrowLeft, FiLock, FiUser, FiMail } from "react-icons/fi";
import { BiCamera } from "react-icons/bi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from "../../services/api";

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [ name, setName ] = useState(user.name);
    const [ email, setEmail ] = useState(user.email);
    const [ passwordOld, setPasswordOld  ] = useState();
    const [ passwordNew, setPasswordNew  ] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [ avatar, setAvatar ] = useState(avatarUrl)
    const [ avatarFile, setAvatarFile ] = useState(null)

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        await updateProfile({user, avatarFile})
    }

    const handleChangeAvatar = (event) => {
        const file = event.target.files[0];
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <div>
                    <ButtonText to="/" title="Voltar" icon={FiArrowLeft}/>
                </div>
            </header>
            
            <Form>
                <div className="container-photo">
                    <img src={avatar} alt="Logo Usuário" />
                    <label htmlFor="avatar" className="container-icon-camera">
                        <BiCamera />
                        <input type="file" id="avatar" onChange={handleChangeAvatar}/>
                    </label>
                </div>
                <div className="form-input">
                    <Input 
                        icon={FiUser} 
                        type="text" 
                        placeholder="Nome"
                        onChange={e => setName(e.target.value)}
                        value={name}    
                    />
                    <Input 
                        icon={FiMail} 
                        type="email" 
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                        value={email}    
                    />
                </div>
                <div className="form-input">
                    <Input 
                        icon={FiLock} 
                        type="password" 
                        placeholder="Senha Antiga"
                        onChange={e => setPasswordOld(e.target.value)}    
                    />
                    <Input 
                        icon={FiLock} 
                        type="password" 
                        placeholder="Nova Senha"
                        onChange={e => setPasswordNew(e.target.value)}    
                    />
                </div>
                <Button 
                    title="Salvar" 
                    onClick={handleUpdate}    
                />
            </Form>
        </Container>
    )
}