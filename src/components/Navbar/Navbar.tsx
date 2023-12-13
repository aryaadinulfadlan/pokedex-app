import { useNavigate } from "react-router-dom"
import { Nav, NavTitle, NavWrapper } from "./Style"
import { useState } from "react"
import BarButton from "../BarButton"
import Sidebar from "../Sidebar/Sidebar"

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false)
  const toggleShow = () => setShow(prev => !prev)
  const navigate = useNavigate()
  const goToHome = () => navigate('/')
  return (
    <Nav>
        <NavWrapper>
            <NavTitle onClick={goToHome}>
                <img src="/favicon.png" alt="Pokedex" />
                <span>Pokedex App</span>
            </NavTitle>
            <BarButton toggleShow={toggleShow} />
            <Sidebar show={show} setShow={setShow} />
        </NavWrapper>
    </Nav>
  )
}

export default Navbar

