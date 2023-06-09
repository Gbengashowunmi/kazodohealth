import { Button } from "@mui/material";
import "./headerfooter.scss";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import TemporaryDrawer from "../TemporaryDrawer";
import { Link } from "react-router-dom";
export default function HeaderFooter({ children }) {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".nav");
    const scrollTop = window.scrollY;
    scrollTop >= 40
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <div className="head_foot_wrapper">
      <header className="header_1 nav">
        <div className="nav_bar">
          <TemporaryDrawer />
        </div>
        <Link to="/">
          <div className="logo">
            <img src="/images/kazodo logo2.jpg" alt="kazodo logo" />
          </div>
        </Link>
        <div className="search">
          <input type="text" placeholder="Search" />
          <Icon
            icon="cil:search"
            color="black"
            width="20"
            height="20"
            className="search_icon"
          />
        </div>
        <div className="actions">
          <Link to="/donate-blood">
            <Button variant="contained" className="red_button">
              Donate Blood
            </Button>
          </Link>

          <Link to="/select-account">
            <p>login/signup</p>
          </Link>
          <p>Discover</p>
          <Button variant="contained" className="primary_button">
            Become a vendor
          </Button>
        </div>
      </header>
      <header className="header_2">
        <Link to="/jobs">
          <p>Find Opportunities</p>
        </Link>
        <p>Find Consultants</p>
        <Link to="/talents">
          <p>Find Talents</p>
        </Link>
        <Link to="https://kazodo-health.netlify.app/" target="blank">
          <p>Go to Shop</p>
        </Link>
      </header>
      {children}
      <footer>
        <div className="footer_nav">
          <ul>
            <h6>Sit amet.</h6>
            <li>natus qui?</li>
            <li>Asperiores,</li>
            <li>sit sequi?</li>
            <li>adipisci veniam</li>
            <li>et fuga</li>
            <li>explicabo quod,</li>
            <li>Sunt</li>
            <li>ad maxime.</li>
            <li>vel voluptate</li>
            <li>Laboriosam libero</li>
          </ul>
          <ul>
            <h6>Consectetur</h6>
            <li>Lorem, elit. </li>
            <li>ipsum dolor</li>
            <li>sit amet </li>
            <li>consectetur</li>
            <li>adipisicing</li>
            <li>Praesentium</li>
            <li>reprehenderit</li>
            <li>consectetur</li>
            <li>voluptatum !</li>
          </ul>
          <ul>
            <h6>Ldolor sit.</h6>
            <li>Lorem, elit. </li>
            <li>ipsum dolor</li>
            <li>sit amet </li>
            <li>consectetur</li>
            <li>adipisicing</li>
            <li>Praesentium</li>
            <li>reprehenderit</li>
            <li>consectetur</li>
            <li>voluptatum !</li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <h6>Lorem ipsum.</h6>
            <li>Lorem, elit. </li>
            <li>ipsum dolor</li>
            <li>sit amet </li>
            <li>consectetur</li>
            <li>adipisicing</li>
            <li>Praesentium</li>
            <li>reprehenderit</li>
            <li>consectetur</li>
            <li>voluptatum !</li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="socials">
          <p>Follow Us</p>
          <Icon
            icon="ic:twotone-facebook"
            color="white"
            width="30"
            height="30"
          />
          <Icon
            icon="ant-design:twitter-circle-filled"
            color="white"
            width="30"
            height="30"
          />
          <Icon icon="ri:instagram-fill" color="white" width="30" height="30" />
          <Icon icon="ri:whatsapp-fill" color="white" width="30" height="30" />
        </div>
        <div className="copyright">
          <p>© 2019 - 2023 Medpau International Limited</p>

          <ul>
            <li>Terms of Service </li>
            <li>Privacy Policy</li>
            <li>CA Notice at Collection</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
