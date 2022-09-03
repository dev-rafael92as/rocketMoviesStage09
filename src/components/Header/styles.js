import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.FC_BORDER};
    position: fixed;
    top: 0;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
    
    .header {
    max-width: 1137px;
    margin: 0 auto;
    width: 100%;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: space-between;    
    
        > a {
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            color: ${({ theme }) => theme.COLORS.FC_PINK};
            margin-right: 64px;
        }

        .container-login {
            width: 100%;
            max-width: 125px;

            > p {
                font-weight: 700;
                font-size: 14px;
                line-height: 18px;
                color: ${({ theme }) => theme.COLORS.FC_NAME_LOGIN};
            }

            > a {
                font-weight: 400;
                font-size: 14px;
                line-height: 18px;
                color: ${({ theme }) => theme.COLORS.FC_GRAY1};
            }
        }

        .container-acess {
            max-width: 198px;
            width: 100%;
        }

        > div {
            max-width: 630px;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 0 9px;

            > img {
                border-radius: 50%;
                width: 64px;
                height: 64px;
            }

            > div {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }
        }
    }

`