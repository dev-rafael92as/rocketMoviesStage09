import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme, isNew }) => isNew ? "none" : `${theme.COLORS.BACKGROUND_INPUT}`};
    padding: 16px;
    border-radius: 10px;
    border: ${({ isNew, theme }) => isNew ? `1px dashed ${theme.COLORS.FC_GRAY1}` : "none"};
    
    display: flex;
    align-items: center;
    gap: 0 16px;
    
    input {
        font-family: 'Roboto', sans-serif;
        border: none;
        display: block;
        width: min-content;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.FC_GRAY1};
    }

    button {
        display: flex;
        align-items: center;
        border: none;
        background: transparent;
    }

    svg {
        color: ${({ theme }) => theme.COLORS.FC_PINK};
    }
`