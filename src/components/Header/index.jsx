import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Input } from "../Input";
import { Container } from "./styles";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useState } from "react";

export function Header() {

    const { signOut, user, setSearch } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <div className="header">
                <Link to="/">RocketMovies</Link>

                <Input 
                    placeholder="Pesquisar pelo título" 
                    onChange={e => setSearch(e.target.value)}    
                />

                <div className="container-acess">
                    <div className="container-login">
                        <p>{user.name}</p>
                        <a onClick={signOut} href="#">Sair</a>
                    </div>
                    <Link to="/profile">
                        <img src={avatarUrl} alt={user.name} />
                    </Link>
                </div>
            </div>
        </Container>
    )
}