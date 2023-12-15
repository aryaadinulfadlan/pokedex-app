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
    position: relative;
    &::after {
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        background-color: #7983d9;
        height: 4px;
        border-radius: 5px;
        content: '';
        transition: width 500ms ease;
    }
    &:has(> .active)::after {
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 120%;
        background-color: #7983d9;
        height: 4px;
        border-radius: 5px;
        content: '';
    }
`