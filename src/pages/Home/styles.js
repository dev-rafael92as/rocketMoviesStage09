import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    overflow: auto;

    main {
        max-width: 1137px;
        margin: 166px auto 0;

        .container-title-home {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 37px;

            > a {
                height: 46px;
                width: 207px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                border-radius: 10px;
                border: none;
                background-color: ${({ theme }) => theme.COLORS.FC_PINK};
                color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
            }
        }
        section {
            height: 716px;
            overflow: auto;

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
        }

    }
    
`