import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 0 6px;

    color: ${({ theme }) => theme.COLORS.FC_PINK};
`