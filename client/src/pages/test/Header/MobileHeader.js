import React, { useState }  from "react";
import { useTranslation } from "react-i18next";
import Drawer from "@material-ui/core/Drawer";
import { NavLink, MenuLink, MobileLogo,
    MobileMenus, MobileDrawerContainer} from "../Styled/index";
import logo from "../../../assets/images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";


function DesktopHeader (props) {
    const [t] = useTranslation(),

        [MenuStatus, setMenuStatus] = useState(false),

        toggleMenu = (status) => event => {
            if (event && event.type === "keydown" &&
                (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            setMenuStatus(status);
        },

        pages = props.pages,
        menuItems = pages.map((menuItem)=> 
            <NavLink key={menuItem.id}>
                <MenuLink to={menuItem.url}>{t(menuItem.title)}</MenuLink>
            </NavLink>
        );

    
    return (
        <>
            <MobileLogo src={logo} alt="Pathinker"></MobileLogo>
            <MobileMenus>
                <MenuIcon onClick={toggleMenu(!MenuStatus)}></MenuIcon>
            </MobileMenus>
            <Drawer
                anchor="top"
                open={MenuStatus}
                onClose={toggleMenu(false)}
                onOpen={toggleMenu(false)}
            >
                <MobileDrawerContainer>
                    {menuItems}
                </MobileDrawerContainer>
            </Drawer>
        </>
    );
}

export default DesktopHeader;