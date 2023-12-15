import styled from "styled-components";
import { FontSize4, FontSize6, LabelFontSize, TextFontSize } from "../../GlobalStyles";

export const Card = styled.div`
    border-radius: 10px;
    background-color: #fafafa;
    display: grid;
    grid-template-rows: 170px 1fr;
    gap: 1rem;
    max-width: 250px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    cursor: pointer;
    /* height: 100%; */
`
export const ImageBackdrop = styled.div`
    position: absolute;
    top: 0;
    left: 100%;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: left 500ms ease;
    transition-delay: 200ms;
    svg {
        font-size: ${FontSize6};
        color: darkblue;
        cursor: pointer;
    }
`
export const ImgWrapper = styled.div`
    background-color: #ddd;
    display: flex;
    justify-content: center;
    padding: 10px;
    overflow: hidden;
    position: relative;
    &:hover > img {
        transform: scale(1.3);
    }
    &:hover > ${ImageBackdrop} {
        left: 0;
    }
    & > img {
        transition: transform 300ms ease;
    }
`
export const DescWrapper = styled.div`
    /* background-color: plum; */
    display: grid;
    grid-template-rows: auto auto;
    align-content: space-between;
    gap: 1.5rem;
    padding: 6px;
`
export const TopContent = styled.div`
    ol {
        list-style: decimal inside;
        padding-left: 10px;
        font-weight: 600;
        text-transform: capitalize;
        font-size: ${TextFontSize};
    }   
    span {
        font-weight: 600;
        font-size: ${TextFontSize};
    }
    & > h3 {
        text-transform: capitalize;
        font-size: ${FontSize4};
    }
    display: flex;
    flex-direction: column;
    gap: 6px;
`
export const BottomContent = styled.div`
    /* background-color: blue; */
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    span {
        background-color: darkblue;
        color: white;
        padding: 2px 1rem;
        border-radius: 1rem;
        font-weight: bold;
        text-transform: capitalize;
        font-size: ${LabelFontSize};
    }
`