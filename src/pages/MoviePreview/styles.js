import styled from "styled-components";

export const Container = styled.div`
    margin-top: 156px;
    overflow: hidden;
`

export const CardInfo = styled.div`
    max-width: 1137px;
    width: 100%;
    margin: 0 auto 156px;
    padding-right: 24px;
    overflow: auto;
    height: 581px;

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.FC_PINK};
        border-radius: 20px;
    }

    ::-webkit-scrollbar {
        background-color: transparent;
        width: 8px;
        height: 96px;
    }

    .container-name-review {
        display: flex;
        align-items: center;
        gap: 0 19px;
        margin-top: 24px;

        > div {
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.COLORS.FC_PINK};
        }
    }

    .container-info-acess {
        display: flex;
        gap: 0 8px;
        font-family: "Roboto", sans-serif;
        margin-top: 24px;

        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: ${({ theme }) => theme.COLORS.FC_NAME_LOGIN};
        }

        > img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }
    }

    .container-tags__movie-preview {
        display: flex;
        gap: 0 8px;
        margin-top: 40px;
    }

    .container-text__mobie-preview {
        margin-top: 40px;
        text-align: justify;

        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            color: ${({ theme }) => theme.COLORS.FC_NAME_LOGIN};
        }
    }
`