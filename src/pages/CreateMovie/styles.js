import styled from "styled-components";

export const Container = styled.div`
    margin-top: 156px;
    overflow: hidden;

    form {
        max-width: 1137px;
        width: 100%;
        margin: 0 auto;
        height: 80vh;
        overflow: auto;
        padding-right: 24px;

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

        h1 { 
            font-weight: 500;
            font-size: 36px;
            line-height: 47px;
            color: ${({ theme }) => theme.COLORS.FC_NAME_LOGIN};

            margin-top: 24px;
        }

        .input-container {
            display: flex;
            gap: 40px;
            margin: 40px 0;
        }

        textarea {
            height: 274px;
        }

        .tags-container {
            padding: 16px;
            background: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
            border: none;
            border-radius: 8px;
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
        }

        > h2 {
            margin: 40px 0 24px;
            font-weight: 400;
            font-size: 20px;
            line-height: 26px;
            color: #999591;
        }

        .button-container {
            display: flex;
            gap: 0 40px;
            margin: 40px 0 93px;
        }

        .btn-delete {
            width: 100%;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
            color: ${({ theme }) => theme.COLORS.FC_PINK};
            border: none;
            border-radius: 10px;
            font-weight: 500;
            font-size: 16px;
            line-height: 21px;
        }
    }
`