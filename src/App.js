import React from "react";
import "./App.css";
import Landing1 from "./pages/landing/Landing1";
import { Route, Routes } from "react-router";
import DonateBlood from "./pages/donate/DonateBlood";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing1 />} />
          <Route path="donate-blood" element={<DonateBlood />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
