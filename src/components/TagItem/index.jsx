import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi"

export function TagItem({value, isNew, ...rest}) {
    return (
        <Container isNew={isNew} {...rest}>
            {value}
            {isNew ? <FiPlus/> : <FiX />}
        </Container>
    )
}