import { Tag } from "../Tag";
import { Container } from "./styles";
import { AiFillStar, AiOutlineStar} from "react-icons/ai"

export function MovieCard({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h2>{data.title}</h2>
            <div className="container-review">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                {data.review}
            </div>
            <p>{data.description}</p>
            <div className="container-tags">
                <Tag title="Família"/>
                <Tag title="Drama"/>
                <Tag title="Ação"/>
            </div>
        </Container>
    )
}