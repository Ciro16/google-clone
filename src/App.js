import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

import { useDispatch } from "react-redux";
import { setUser } from "./features/userSlice";

import { auth } from "./firebase";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<p>Error!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
