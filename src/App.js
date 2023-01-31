import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { store } from "./redux-config/store";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
