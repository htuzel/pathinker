import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import "../../assets/main.scss";

function Master(props) {
    return (
        <>
            <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
        </>
    );
}

export default Master;
