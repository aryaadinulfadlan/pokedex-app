import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #eee;
    position: sticky;
    top: 0;
    padding: 1rem;
    z-index: 1;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.3);
`
export const NavWrapper = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    /* background-color: yellow; */
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
        max-width: 1.5rem;
    }
    span {
        font-weight: 700;
        font-size: 1.2rem;
    }
`