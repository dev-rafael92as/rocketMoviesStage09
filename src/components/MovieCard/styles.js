import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    border-radius: 16px;
    width: 100%;
    max-width: 1121px;
    padding: 32px;
    margin-bottom: 24px;

    h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({ theme }) => theme.COLORS.FC_NAME_LOGIN};
        margin-bottom: 8px;
    }

    .container-review {
        max-width: 94px;
        width: 100%;
        margin-bottom: 15px;
        color: ${({ theme }) => theme.COLORS.FC_PINK};
    }

    .container-tags {
        display: flex;
        gap: 0 8px;
    }
    > p {
        text-align: justify;
        height: 34px;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 30px;
        font-family: 'Roboto', sans-serif;
    }
`