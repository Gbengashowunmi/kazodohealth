import { Button } from "@mui/material";
import "./hospitalcard.scss";

export default function HospitalCard({ image, name, description }) {
  return (
    <div className="hospital_card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="hospital_description">
        <h6>{name} </h6>
        <p>{description}</p>
        <Button variant="contained" className="green read_more">
          Read More
        </Button>
      </div>
    </div>
  );
}
