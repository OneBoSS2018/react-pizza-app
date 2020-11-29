import React from 'react'
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarMenu,
    SideBarLink,
    SideBarBtnWrap,
    SideBarRoute
} from './sideBarElements'
const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarMenu>
                <SideBarLink to="/menu">Full Menu</SideBarLink>
            </SideBarMenu>
            <SideBarBtnWrap>
                <SideBarRoute to="/">Order now</SideBarRoute>
            </SideBarBtnWrap>
        </SideBarContainer>
    );
}


export default SideBar