import styled from "styled-components";

export const ProductContainer = styled.div`
    background-color: pink;
    height: 100%;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 3rem 0 2rem;
`
export const ProductList = styled.div`
    background-color: hotpink;
    display: grid;
    gap: 1.5rem;
    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
`