import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Onboarding from "Pages/Onboarding/Onboarding";

import "styles/main.scss";
import "styles/global.scss";

function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route
            path="/*"
            element={
              <div className="spinner-container">
                <h1>Page not found!</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
