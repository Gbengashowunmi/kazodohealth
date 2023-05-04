import React from "react";
import "./App.css";
import Landing1 from "./pages/landing/Landing1";
import { Route, Routes } from "react-router";
import DonateBlood from "./pages/donate/DonateBlood";
import { BrowserRouter } from "react-router-dom";
import SignupPage from "./pages/signup/SignupPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing1 />} />
          <Route path="donate-blood" element={<DonateBlood />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
