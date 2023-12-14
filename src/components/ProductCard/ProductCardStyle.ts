import styled from "styled-components";
import { FontSize2 } from "../../GlobalStyles";

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
    /* height: 100%; */
`
export const ImgWrapper = styled.div`
    background-color: #ddd;
    display: flex;
    justify-content: center;
    padding: 10px;
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
    }   
    span {
        font-weight: 600;
    }
    & > h3 {
        text-transform: capitalize;
        font-size: ${FontSize2};
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
    }
`