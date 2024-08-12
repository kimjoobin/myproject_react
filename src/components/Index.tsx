import {Outlet} from "react-router-dom";
import React from "react";
import Header from "../components/layout/Header";

function Index() {
    return (
        <>
            <Header />
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Index