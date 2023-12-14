import styled from "styled-components";
import { FontSize1, FontSize10, FontSize3, LogoFontSize } from "../../GlobalStyles";

export const HomeContainer = styled.div`
    /* background-color: yellow; */
    height: 100%;
    display: grid;
    gap: 2rem;
    grid-template-rows: 1fr 1.5fr;
    align-items: center;
    @media (min-width: 1000px) {
        grid-template-rows: initial;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        justify-items: space-between;
    }
    @media (min-width: 1300px) {
        gap: 3rem;
        padding: 0 3vw;
    }
`
export const DescWrap = styled.div`
    /* background-color: blue; */
    display: grid;
    gap: 1rem;
    align-self: end;
    @media (min-width: 1000px) {
        align-self: initial;
    }
    @media (min-width: 1300px) {
        gap: 2rem;
    }
    & > h3 {
        font-size: ${FontSize10};
        text-transform: uppercase;
        width: 80%;
        font-weight: 800;
        background: linear-gradient(to right, #2f0070, #09dada);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    & > p {
        font-size: ${FontSize3};
        text-align: justify;
    }
`
export const BtnBannerWrap = styled.div`
    display: grid;
    grid-template-columns: max-content max-content;
    gap: 1rem;
    @media (min-width: 1300px) {
        gap: 2rem;
    }
`
export const ImgWrap = styled.div`
    /* background-color: red; */
    padding: 5px;
    align-self: start;
    display: flex;
    justify-content: center;
    @media (min-width: 1000px) {
        align-self: initial;
        /* max-width: 600px; */
    }
    img {
        object-fit: cover;
        width: 100%;
        max-width: 450px;
        @media (min-width: 1000px) {
            max-width: 1300px;
        }
    } 
`
export const DemoButton = styled.button`
    background-color: transparent;
    border: 1px solid black;
    padding: 5px 1rem;
    text-transform: capitalize;
    border-radius: 5px;
    font-weight: bold;
    font-size: ${FontSize1};
    cursor: pointer;
`
export const TryButton = styled.button`
    border: 1px solid #fbd3a9;
    padding: 5px 1rem;
    text-transform: capitalize;
    border-radius: 5px;
    font-weight: bold;
    font-size: ${FontSize1};
    color: white;
    background-image: linear-gradient(to right, #1c1caa, #657ec0);
    cursor: pointer;
`
export const WaIconWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #389fe5;
    border-radius: 50%;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (min-width: 1000px) {
        width: 3.5rem;
        height: 3.5rem;
        bottom: 2rem;
        right: 2rem;
    }
    @media (min-width: 1300px) {
        width: 4rem;
        height: 4rem;
        bottom: 3rem;
        right: 3rem;
    }
    svg {
        color: white;
        font-size: ${LogoFontSize};
    }
`