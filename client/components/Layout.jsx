import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx"

export default function Layout({ user, setUser }) {
    return (
        <main>
            <Header user={user} setUser={setUser} />
            <Outlet />
        </main>
    )
}
