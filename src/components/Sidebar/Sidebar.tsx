import { Dispatch, SetStateAction } from "react"
import { CloseIcon, NavItem, NavMenu, SidebarContainer } from "./SideStyle"
import { NavLink } from "react-router-dom"

type SidebarProps = {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({ show, setShow} : SidebarProps) => {
  return (
    <SidebarContainer $show={show}>
        <CloseIcon onClick={() => setShow(false)} />
        <NavMenu>
            <NavItem onClick={() => setShow(false)}>
                <NavLink to='/products'>Products</NavLink>
            </NavItem>
            <NavItem onClick={() => setShow(false)}>
                <NavLink to='/services'>Services</NavLink>
            </NavItem>
            <NavItem onClick={() => setShow(false)}>
                <NavLink to='/account'>Account</NavLink>
            </NavItem>
            <NavItem onClick={() => setShow(false)}>
                <NavLink to='/others'>Others</NavLink>
            </NavItem>
        </NavMenu>
    </SidebarContainer>
  )
}

export default Sidebar