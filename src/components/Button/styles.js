import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.FC_PINK};
    height: 56px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    gap: 0 8px;

`