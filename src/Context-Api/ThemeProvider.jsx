import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({children}){
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => setTheme(prev => !prev);

    return(

   <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    )
}
