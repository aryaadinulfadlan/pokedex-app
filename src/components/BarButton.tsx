import { ReactElement } from 'react'
import styled from 'styled-components'
import { FaBars } from "react-icons/fa";

type Props = {
    toggleShow: () => void
}

export default function BarButton({ toggleShow }: Props): ReactElement {
  return (
    <BarWrapper onClick={toggleShow}>
        <FaBars />
    </BarWrapper>
  )
}

const BarWrapper = styled.div`
    cursor: pointer;
    & > svg {
        font-size: 1.2rem;
    }
    @media (min-width: 800px) {
        display: none;
    }
`