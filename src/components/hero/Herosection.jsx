import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./herosection.scss";
export default function Herosection({
  heroText,
  description,
  buttonText,
  image,
  background_color,
}) {
  return (
    <div className={`hero ${background_color}`}>
      <div className="hero_desc">
        <h2>{heroText}</h2>
        <p>{description}</p>
        <Link to="/signup">
          <Button variant="contained" className="white_btn">
            {buttonText}
          </Button>
        </Link>
      </div>

      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
