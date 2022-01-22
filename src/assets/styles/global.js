import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --background: #252849;
        --pink: #FA51F4;
        --white: #FFFFFF;
        --opacity-white: rgba(255, 255, 255, 0.09);
        --font-input: 16px;
        --font-label: 16px;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }
    
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: var(--background);
    }

    input,label,p,button {
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyle;
