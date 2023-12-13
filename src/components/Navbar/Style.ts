import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #ddd;
    position: sticky;
    top: 0;
    padding: 10px 1rem;
`
export const NavWrapper = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const NavTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    img {
        max-width: 1.7rem;
    }
    span {
        font-weight: 700;
    }
`