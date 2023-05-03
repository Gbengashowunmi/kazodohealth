import "./donor_card.scss";
import React from "react";

export default function DonorCard({image, name, bloodType, location}) {
  return (
    <div className="donor_card_wrapper">
      <div className="image">
        <img
          src={image}
          alt=""
        />
      </div>

      <div className="donor_details">
        <span>
        <h5>Donor name:</h5>
        <p>{name}</p>
        </span>

        <span>
          <h5>Donor Location:</h5>
          <p>{location}</p>
        </span>
        <span>
          <h5>Blood type:</h5>
          <p>{bloodType}</p>
        </span>
      </div>
    </div>
  );
}
