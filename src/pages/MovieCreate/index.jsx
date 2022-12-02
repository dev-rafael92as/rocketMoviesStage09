import { Container } from "./styles";
import { Header } from "../../components/Header"
import { FiArrowLeft } from "react-icons/fi"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { TagItem } from "../../components/TagItem";
import { Button } from "../../components/Button";
import { useState } from "react";

export function MovieCreate() {
    const [ title, setTitle ] = useState('');
    const [ review, setReview ] = useState('');
    const [ observation, setObservation ] = useState('');

    const [ tags, setTags ] = useState([]);
    const [ newTag, setNewTag ] = useState('');

    const handleAddTag = () => {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    const handleRemoveTag = (deleted) => {
        console.log("Passei")
        setTags(prevState => prevState.filter(tag => tag !== deleted))
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
                    // onChange={e => setTitle(e.target.valeu)}    
                />
                <Input 
                    placeholder="Sua nota (de 0 a 5)"
                    // onChange={e => setReview(e.target.value)}    
                />
            </div>
            <Textarea 
                placeholder="Observações" 
                // onChange={e => setObservation(e.target.value)}    
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
                <Button title="Salvar alterações" />
            </div>
            </form>
        </Container>
    )
}