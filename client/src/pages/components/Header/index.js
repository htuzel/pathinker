import React, {useState, useEffect, useContext} from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Divider, Box } from "@material-ui/core";
import { HeaderBar } from "../Styled/index";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import {StoreContext} from 'redux-react-hook';

export default function Header (props) {

    const store = useContext(StoreContext);  

    const allpages = [
        {id:1, title: "menu.home", url: "/home", access:"everybody"},
        {id:2, title: "menu.about", url: "/about", access:"everybody"},
        {id:3, title: "menu.login", url: "/login", access:"notLogin"},
        {id:4, title: "menu.register", url: "/register", access:"notLogin"},
        {id:5, title: "menu.logout", url: "/logout", access:"login"}
    ];

    const [pages, setPages] = useState(allpages);

    useEffect(() => {
        let allpages = pages;
        let newPages = [];
        if (store.getState().loginReducer.isLogin === true) {
            allpages.forEach(element => {
                if (element.access !== 'notLogin') {
                    newPages.push(element);
                }
            });
        } else {
            allpages.forEach(element => {
                if (element.access !== 'login') {
                    newPages.push(element);
                }
            });
        }
        setPages(newPages);
    }, []);

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1224px)"
    });

    return (
        <Container>
            <Box mb={8}>
                <HeaderBar>
                    {isDesktopOrLaptop && <DesktopHeader pages={pages}></DesktopHeader>}
                    {!isDesktopOrLaptop && <MobileHeader pages={pages}></MobileHeader>}
                </HeaderBar>
                <Divider></Divider>
            </Box>
        </Container>
    );
}