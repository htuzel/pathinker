import React from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Divider } from "@material-ui/core";
import { HeaderBar } from "../Styled/index";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header (props) {

    const pages = [
        { title: "Home", url: "/home", id:1},
        { title: "About", url: "/about", id:2},
        { title: "Login", url: "/login", id:3},
        { title: "Register", url: "/register", id:4}
    ];

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1224px)"
    });

    return (
        <Container>
            <HeaderBar>
                {isDesktopOrLaptop && <DesktopHeader pages={pages}></DesktopHeader>}
                {!isDesktopOrLaptop && <MobileHeader pages={pages}></MobileHeader>}
            </HeaderBar>
            <Divider></Divider>
        </Container>
    );
}