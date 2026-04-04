import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext.jsx";

export default function Nav(){
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <>
            <nav className={`${theme ? "dark-mode": ""}`}>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                </ul>
                <ul>
                          <button onClick={toggleTheme}>Dark Mode</button>
                </ul>
            </nav>
        </>
    )
}