import styled from "styled-components";

export const Container = styled.div`
    margin-top: 156px;

    main {
        max-width: 1137px;
        width: 100%;
        margin: 0 auto;

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
    }
`