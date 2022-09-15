import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;

    > img {
        width: 100%;
    }

    .container-acess {
        max-width: 637px;
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 235px 0 0;
    } 

    .container-content {
        max-width: 340px;
        width: 100%;

        > h1 {
            font-weight: 700;
            font-size: 48px;
            line-height: 63px;
            color: ${({ theme }) => theme.COLORS.FC_PINK};
        }

        .text-signIn {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: ${({ theme }) => theme.COLORS.FC_SIGNIN};
        }
    }
`