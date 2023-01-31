import { Tag } from "../Tag";
import { Container } from "./styles";
import { AiFillStar, AiOutlineStar} from "react-icons/ai"

export function MovieCard({ data, ...rest }) {
    const tags = data.tags
    console.log(data.review)
    return (
        <Container {...rest}>
            <h2>{data.title}</h2>
            <div className="container-review">
                {data.review == 1 ? 
                <>
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </> : data.review == 2 ? <>
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </> : data.review == 3 ? <>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </> : data.review == 4 ? <>
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
            <p>{data.description}</p>
            <div className="container-tags">
                {tags.map((tag, index) => ( 
                <Tag key={index} title={tag.name}/>
                ))}
            </div>
        </Container>
    )
}