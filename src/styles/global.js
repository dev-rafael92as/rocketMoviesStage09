import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700&family=Roboto:wght@400;500&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }



    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
        color: ${({ theme }) => theme.COLORS.FC_WHITE};

        -webkit-font-smoothing: antialiased;
    }

    body, button, textarea, input {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`