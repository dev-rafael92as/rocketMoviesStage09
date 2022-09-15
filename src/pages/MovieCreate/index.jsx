import { Container } from "./styles";
import { Header } from "../../components/Header"
import { FiArrowLeft } from "react-icons/fi"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { TagItem } from "../../components/TagItem";
import { Button } from "../../components/Button";

export function MovieCreate() {
    return (
        <Container>
            <Header />
            <form>
            <ButtonText icon={FiArrowLeft} title="Voltar"/>
            <h1>
                Novo filme
            </h1>
            <div className="input-container">
                <Input placeholder="Título"/>
                <Input placeholder="Sua nota (de 0 a 5)"/>
            </div>
            <Textarea placeholder="Observações" />
        
            <h2>
                Marcadores
            </h2>
            <div className="tags-container">
                <TagItem value="React" isNew={false} />
                <TagItem value="React" isNew={false} />
                <TagItem value="React" isNew={false} />
                <TagItem value="React" isNew={false} />
                <TagItem value="React" isNew={false} />
                <TagItem value="React" isNew={false} />
                <TagItem value="Novo Marcador" isNew={true} />
            </div>

            <div className="button-container">
                <button className="btn-delete">Excluir</button>
                <Button title="Salvar alterações" />
            </div>
            </form>
        </Container>
    )
}