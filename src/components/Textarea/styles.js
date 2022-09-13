import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    border: none;
    border-radius: 10px;
    resize: none;
    padding: 19px 16px;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.FC_GRAY1};
`