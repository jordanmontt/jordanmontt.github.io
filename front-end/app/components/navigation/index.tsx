"use client";
import { useState } from "react";
import Navbar from "./navbar/index";
import Sidebar from "./sidebar/index";


export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    );
};
