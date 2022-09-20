import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 0 6px;

    color: ${({ theme }) => theme.COLORS.FC_PINK};
`