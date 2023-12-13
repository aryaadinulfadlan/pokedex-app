import { createGlobalStyle } from "styled-components";

// CSS Reset
export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        scroll-behavior: smooth;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        font-family: 'Nunito Sans', sans-serif;
        letter-spacing: 1px;
    }
    img, video, picture, canvas, svg {
        display: block;
        max-width: 100%;
        height: auto;
    }
    input, button, textarea, select {
        font: inherit;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`