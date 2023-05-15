import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "styles/global.scss";

function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
