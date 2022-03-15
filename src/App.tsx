import React from "react";
import { Home } from "./screens";
import "./App.css";
import "./styles/index.css";
import { GlobalStyles } from "./styles/global";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
