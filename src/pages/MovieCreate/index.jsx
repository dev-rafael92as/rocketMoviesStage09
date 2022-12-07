import { Container } from "./styles";
import { Header } from "../../components/Header"
import { FiArrowLeft } from "react-icons/fi"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { TagItem } from "../../components/TagItem";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function MovieCreate() {
    const [ title, setTitle ] = useState('');
    const [ rating, setRating ] = useState('');
    const [ description, setDescription ] = useState('');

    const [ tags, setTags ] = useState([]);
    const [ newTag, setNewTag ] = useState('');

    const navigate = useNavigate()

    const handleAddTag = () => {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    const handleRemoveTag = (deleted) => {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewMovie() {
        if (!title) {
            alert("Faltou o título do filme, preencha para poder cadastrar :)")
            return
        }

        if (!rating) {
            alert("Faltou a nota do filme, preencha para poder cadastrar :)")
            return
        }

        if (!description) {
            alert("Faltou a descrição do filme, preencha para poder cadastrar :)")
            return
        }

        if (newTag) {
            alert("Você deixou uma tag sem cadastrar, clique para adicionar e prosseguir!")
            return
        }

        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        })

        alert("Filme adicionado com sucesso!")
        navigate("/")
    }

    return (
        <Container>
            <Header />
            <form>
            <ButtonText to="/" icon={FiArrowLeft} title="Voltar"/>
            <h1>
                Novo filme
            </h1>
            <div className="input-container">
                <Input 
                    placeholder="Título"
                    onChange={e => setTitle(e.target.value)}    
                />
                <Input 
                    placeholder="Sua nota (de 0 a 5)"
                    type="number"
                    max="5"
                    min="0"
                    onChange={e => setRating(e.target.value)}    
                />
            </div>
            <Textarea 
                placeholder="Observações" 
                onChange={e => setDescription(e.target.value)}    
            />
        
            <h2>
                Marcadores
            </h2>
            <div className="tags-container">
                {
                    tags.map((tag, index) => (
                        <TagItem 
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTag(tag)}
                        />
                    ))
                }
                {/* <TagItem value="React" isNew={false} /> */}
                <TagItem
                    placeholder = "Nova Tag"
                    value={newTag} 
                    isNew={true} 
                    onChange={e => setNewTag(e.target.value)}
                    onClick={handleAddTag}
                />
            </div>

            <div className="button-container">
                <button className="btn-delete">Excluir</button>
                <Button onClick={handleNewMovie} title="Salvar alterações" />
            </div>
            </form>
        </Container>
    )
}