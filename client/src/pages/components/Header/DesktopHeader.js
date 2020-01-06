import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, MenuLink, DesktopLogo, DesktopMenus } from "../Styled/index";
import logo from "../../../assets/images/logo.png";



function DesktopHeader (props) {
    const [t] = useTranslation(),

    pages = props.pages,
    menuItems = pages.map((menuItem)=> 
        <NavLink key={menuItem.id}>
            <MenuLink to={menuItem.url}>{t(menuItem.title)}</MenuLink>
        </NavLink>
    );

    return (
        <>
            <DesktopLogo src={logo} alt="Pathinker"></DesktopLogo>
            <DesktopMenus>
                {menuItems}
            </DesktopMenus>
        </>
    );
}

export default DesktopHeader;