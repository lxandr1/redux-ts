import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <Content />
    </div>
  );
}

export default App;
