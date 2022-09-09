import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({ theme }) => theme.COLORS.FC_GRAY1};
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;

    > input {
        border: none;
        width: 100%;
        background: transparent;
        font-family: 'Roboto', sans-serif;
        
        height: 56px;
        padding: 19px 24px;
        
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }
    

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${({ theme }) => theme.COLORS.FC_GRAY1};
    }

    > svg {
        margin-left: 16px;
    }
`