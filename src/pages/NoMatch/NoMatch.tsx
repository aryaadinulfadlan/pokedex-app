import styled from "styled-components"

const NoMatchPage = () => {
  return (
    <NoMatchWrapper>
        <h1>No Matched Route (404)</h1>
    </NoMatchWrapper>
  )
}

export default NoMatchPage

const NoMatchWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`