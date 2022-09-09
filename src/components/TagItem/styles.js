import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme, isNew }) => isNew ? "none" : `${theme.COLORS.BACKGROUND_INPUT}`};
    padding: 16px;
    border-radius: 10px;
    border: ${({ isNew, theme }) => isNew ? `1px dashed ${theme.COLORS.FC_GRAY1}` : "none"};
    font-family: 'Roboto', sans-serif;

    display: flex;
    align-items: center;
    gap: 0 16px;

    svg {
        color: ${({ theme }) => theme.COLORS.FC_PINK};
    }
`