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
        background-color: #d6ecff;
        color: #000;
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

export const FontSize1 = 'clamp(0.9rem, 0.7962rem + 0.4615vw, 1.2rem)'
export const FontSize2 = 'clamp(0.9rem, 0.7615rem + 0.6154vw, 1.3rem)'
export const FontSize3 = 'clamp(0.9rem, 0.7269rem + 0.7692vw, 1.4rem)'
export const FontSize5 = 'clamp(1rem, 0.7231rem + 1.2308vw, 1.8rem)'
export const FontSize10 = 'clamp(1.3rem, 0.9538rem + 1.5385vw, 2.3rem)'
export const LogoFontSize = 'clamp(1.6rem, 1.3577rem + 1.0769vw, 2.3rem)'