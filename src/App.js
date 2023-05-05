import React from "react";
import "./App.css";
import Landing1 from "./pages/landing/Landing1";
import { Route, Routes } from "react-router";
import DonateBlood from "./pages/donate/DonateBlood";
import { BrowserRouter } from "react-router-dom";
import SignupPage from "./pages/signup/SignupPage";
import LoginPage from "./pages/LoginPage";
import ScrollToTopNav from "./components/ScrollToTopNav";
import ScrollToTop from "react-scroll-to-top";
import SelectAccount from "./components/selectAccount/SelectAccount";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* scroll to top icon  */}
        <ScrollToTop className="scroll_up" smooth={true} />
        {/* scroll to top of the page on new page  */}
        <ScrollToTopNav />

        <Routes>
          <Route path="/" element={<Landing1 />} />
          <Route path="donate-blood" element={<DonateBlood />} />
          <Route path="select-account" element={<SelectAccount />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
