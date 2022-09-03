import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > input {
        border: none;
        width: 100%;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
        border-radius: 10px;
        height: 56px;
        padding: 19px 24px;
        color: ${({ theme }) => theme.COLORS.FC_GRAY1};
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
`