import { Link, useNavigate } from "react-router-dom"
import { Nav, NavItem, NavMenu, NavTitle, NavWrapper } from "./Style"

const Navbar = () => {
  const navigate = useNavigate()
  const goToHome = () => navigate('/')
  return (
    <Nav>
        <NavWrapper>
            <NavTitle onClick={goToHome}>
                <img src="/favicon.png" alt="Pokedex" />
                <span>Pokedex App</span>
            </NavTitle>
            <NavMenu>
                <NavItem>
                    <Link to="/products">Products</Link>
                </NavItem>
                <NavItem>
                    <Link to="/services">Services</Link>
                </NavItem>
                <NavItem>
                    <Link to="/account">Account</Link>
                </NavItem>
                <NavItem>
                    <Link to="/others">Others</Link>
                </NavItem>
            </NavMenu>
        </NavWrapper>
    </Nav>
  )
}

export default Navbar

