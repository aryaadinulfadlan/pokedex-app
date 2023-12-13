import styled from "styled-components"
import { FaTimes } from 'react-icons/fa'

type SidebarContainerProps = {
    $show: boolean
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: ${({ $show }) => !$show ? '100%' : '0' };
    right: 0;
    bottom: 0;
    transition: left 500ms ease;
    background-color: #dceeee;
    display: grid;
    @media (min-width: 800px) {
      position: static;
      width: auto;
      background-color: transparent;
    }
`
export const CloseIcon = styled(FaTimes)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.3rem;
    cursor: pointer;
    display: block;
    @media (min-width: 800px) {
        display: none;
    }
`
export const NavMenu = styled.ul`
    display: grid;
    align-items: center;
    align-content: center;
    justify-items: center;
    gap: 5rem;
    /* background-color: blue; */
    @media (min-width: 800px) {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
`
export const NavItem = styled.li`
    font-weight: bold;
    cursor: pointer;
`
// export const Menu = styled.ul`
//   display: grid;
//   width: 100%;
//   gap: 2rem;
//   justify-items: center;
//   margin-top: -7rem;
//   font-weight: bold;
//   @media (min-width: 800px) {
//       grid-template-columns: repeat(5, auto);
//       margin-top: initial;
//       align-items: center;
//       gap: 1rem;
//   }
// `