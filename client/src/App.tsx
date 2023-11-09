import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
    React.useEffect(() => {
        document.querySelector("html")?.setAttribute("data-theme", "myTheme");
    }, []);

    return <Home />;
}

export default App;
