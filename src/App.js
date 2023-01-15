import logo from "./logo.svg";
import "./App.css";
import { Box, Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import Card from "./Card";
function App() {
    const audioRef = useRef();
    return (
        <div className="App">
            <Card />
        </div>
    );
}
export default App;
