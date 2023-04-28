import { Button } from "@mui/material";
import "./headerfooter.scss";
import { Icon } from "@iconify/react";
export default function HeaderFooter({ children }) {
  return (
    <div className="head_foot_wrapper">
      <header className="header_1">
        <div className="logo">
          <img src="/images/kazodo logo2.jpg" alt="kazodo logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <Icon icon="cil:search" color="black" width="20" height="20" className="search_icon" />
        </div>
        <div className="actions">
          <Button variant="contained" className="red_button">
            Donate Blood
          </Button>

          <p>login/signup</p>
          <p>Discover</p>
          <Button variant="contained" className="primary_button">
            Become a vendor
          </Button>
        </div>
      </header>
      <header className="header_2">
        <p>Find Opporunities</p>
        <p>Find Consultants</p>
        <p>Find Talents</p>
        <p>Go to Shop</p>
      </header>
      {children}
    </div>
  );
}
