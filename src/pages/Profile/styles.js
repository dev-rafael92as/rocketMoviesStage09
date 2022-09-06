import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    header {
        background-color: ${({ theme}) => theme.COLORS.BACKGROUND_PINK};
        width: 100%;

        > div {
            display: flex;
            align-items: center;
            max-width: 1137px;
            margin: 0 auto;
            justify-content: flex-start;
            height: 144px;
        }
    }
`

export const Form = styled.form`
    max-width: 340px;
    width: 100%;
    margin: -90px auto 0;
    text-align: center;

    input {
        color: ${({ theme }) => theme.COLORS.FC_WHITE};
    }

    .container-photo {
        position: relative;
    }

    .container-icon-camera {
        height: 48px;
        width: 48px;
        background-color: ${({ theme }) => theme.COLORS.FC_PINK};
        display: block;
        position: absolute;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateX(206px) translateY(-112px);
        cursor: pointer;

        svg {
            width: 25px;
            height: 25px;
            color: ${({ theme}) => theme.COLORS.BACKGROUND_TAG};
        }

        input {
            display: none;
        }
    }

    img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
        margin-bottom: 64px;
    }

    .form-input {
        margin-bottom: 24px;
        div:first-child {
            margin-bottom: 8px;
        }
    }

    button {
        text-align: center;
    }
`