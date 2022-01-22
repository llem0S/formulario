import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --background: #252849;
        --pink: #FA51F4;
        --white: #FFFFFF;
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
`;

export default GlobalStyle;
