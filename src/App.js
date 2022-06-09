import React from "react";
import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" />
          <Route path="*" element={<p>Error!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
