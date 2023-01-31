import { Header } from "../../components/Header";
import { Container, CardInfo } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle} from "react-icons/ai";
import { Tag } from "../../components/Tag"
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function MoviePreview() {
    const { moviePreviewPage, user } = useAuth()

    const formattedDate = (dateString) => {
        const dataHoraObjeto = new Date(dateString);
        const dataFormatada = dataHoraObjeto?.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        return dataFormatada
    }

    const formattedOclok = (oclockString) => {
        const dataHoraObjeto = new Date(oclockString);
        const horaFormatada = dataHoraObjeto?.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }).replace(/:/g, 'h');
        return horaFormatada
    }

    return (
        <Container>
            <Header />

            <CardInfo>
                <ButtonText to="/" icon={FiArrowLeft} title="Voltar"/>

                <div className="container-name-review">
                    <h1>{moviePreviewPage.title}</h1>
                    <div>
                        {moviePreviewPage.rating === 1 ? 
                        <>
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                        </> : moviePreviewPage.rating === 2 ? 
                        <>
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                        </> : moviePreviewPage.rating === 3 ? 
                        <>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                        </> : moviePreviewPage.rating === 4 ? 
                        <>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </> : <>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </>
                        }
                    </div>
                </div>
                <div className="container-info-acess">
                    <img src={`${api.defaults.baseURL}/files/${user.avatar}`} alt="Imagem Logo Perfil" />
                    <p>Por {user.name}</p>
                    < AiOutlineClockCircle />
                    <p>{formattedDate(moviePreviewPage.created_at)} às {formattedOclok(moviePreviewPage.created_at)}</p>
                </div>

                <div className="container-tags__movie-preview">
                    {moviePreviewPage.tags.map((tagName) => (
                        <Tag title={tagName.name}/>
                    ))}
                </div>

                <div className="container-text__mobie-preview">
                    <p>
                        {moviePreviewPage.description}
                    </p>
                </div>
            </CardInfo>
        </Container>
    )
}