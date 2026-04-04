import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ToggleHome() {
    const {theme} = useContext(ThemeContext)
  return (

    <main className={`${theme ? "dark-mode": ""}`}>
      <h1>Here is Home page</h1>
    </main>
  );
}
