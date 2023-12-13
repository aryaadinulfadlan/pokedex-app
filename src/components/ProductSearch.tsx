import styled from "styled-components"
import { FontSize3 } from "../GlobalStyles"
import { FaSearch } from "react-icons/fa"

const ProductSearch = () => {
  return (
    <SearchWrapper>
        <input type="text" placeholder='Search Pokemon Here..' />
        <FaSearch />
    </SearchWrapper>
  )
}

export default ProductSearch

const SearchWrapper = styled.div`
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 1rem;
    padding: 5px 12px;
    background-color: #fff;
    border-radius: 5px;
    @media (min-width: 700px) {
      padding: 10px 1rem;
    }
    & > svg {
        font-size: ${FontSize3};
        color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
    & > input {
        border: none;
        outline: none;
        width: 100%;
        background-color: transparent;
    }
`