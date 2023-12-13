import { Dispatch, SetStateAction } from "react"
import { CloseIcon, NavItem, NavMenu, SidebarContainer } from "./Style"
import { useNavigate } from "react-router-dom"

type SidebarProps = {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({ show, setShow} : SidebarProps) => {
  const navigate = useNavigate()
  const handleNavigate = (url: string) => {
    setShow(false)
    navigate(url)
  }
  return (
    <SidebarContainer $show={show}>
        <CloseIcon onClick={() => setShow(false)} />
        <NavMenu>
            <NavItem onClick={() => handleNavigate('/products')}>
                Products
            </NavItem>
            <NavItem onClick={() => handleNavigate('/services')}>
                Services
            </NavItem>
            <NavItem onClick={() => handleNavigate('/account')}>
                Account
            </NavItem>
            <NavItem onClick={() => handleNavigate('/others')}>
                Others
            </NavItem>
        </NavMenu>
    </SidebarContainer>
  )
}

export default Sidebar