import React from "react";
import Header from "./Components/Header";

function Home () {
    const pages = [
        { title: "Home", url: "/home" },
        { title: "About", url: "/about" },
        { title: "Culture", url: "#" },
        { title: "Business", url: "#" },
        { title: "Politics", url: "#" }
    ];
    return (
        <>
            <Header sections={pages}></Header>
        HOME PAGE!
        </>
    );
}

export default Home;