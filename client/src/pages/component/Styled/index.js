import styled from "styled-components";
import { Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

const primary = "#4A9A57";
const secondary = "#B3324C";

export const HeaderBar = styled(Grid)`
    min-height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
`,

NavLink = styled.span`
    padding-top: 25px;
    display: inline-block;
`,

MenuLink = styled(Link)`
    color: ${primary};
    text-decoration: none;
    font-weight: 700;

    &:visited {
        color: ${primary};
    }
    &:hover {
        color: ${secondary};
        text-decoration: none;
    }
`,

DesktopLogo = styled.img`
    width: 180px;
    margin-right: 45px;
    flex:0.4;
`,

MobileLogo = styled.img`
    width: 180px;
    margin-right: 45px;
    flex:4;
`,

DesktopMenus = styled.div`
    flex:2;
    padding-left: 220px;
    display:flex;
    justify-content:space-around;

    @media (max-width: 768px) {
        display: none;
    }
`,

MobileMenus = styled.div`
    flex: 0.4;
    flex-flow: row-reverse wrap;
    @media (min-width: 768px) {
        display: none;
    }
`,

    MobileDrawerContainer = styled.div`
    display: flex;
    flex-direction:column;
    padding: 25px;
`,

SLink = styled(Link)`
    color: ${primary};

    &:visited {
        color: ${primary};
    }
    &:hover {
        color: ${secondary};
        text-decoration: none;
    }
`,

SPaper = styled(Paper)`
    padding: 30px;
    color: #ffffff
`;