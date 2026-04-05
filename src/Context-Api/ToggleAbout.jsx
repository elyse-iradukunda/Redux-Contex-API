import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ToggleAbout() {
  
    const {theme} = useContext(ThemeContext);
    
    
    
    return (
    < >
     <main className={`${theme ? "dark-mode": ""}`}>

      <h1>Here is About page</h1>
     </main>
    </>
  );
}
