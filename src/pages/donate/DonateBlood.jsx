import { Button } from "@mui/material";
import HeaderFooter from "../../components/header-footer/HeaderFooter";
import "./donate_blood.scss";
import MedicalCenters from "../../components/MedicalCenters";
import DonorCard from "../../components/donorCard/DonorCard";
import { Link } from "react-router-dom";

export default function DonateBlood() {
  return (
    <HeaderFooter>
      <div className="donate_blood_wrapper">
        <div className="hero">
          <div className="hero_desc">
            <h2>Donate Blood and save a life</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              reprehenderit voluptatem vitae sint quae quam delectus molestias
              aliquid magnam rerum. Assumenda aliquam voluptas voluptatum
              corrupti!
            </p>
            <Link to="/signup">
              <Button variant="contained" className="white_btn">
                Donate Blood
              </Button>
            </Link>
          </div>

          <div className="image">
            <img
              src="/images/240_F_96077494_cW2d6pkpb2Hbvb3ABbKPVLevQP7Ck9xD.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="how_to_donate">
          <>
            <h3>How to Become a Donor</h3>
            <p className="how_to_donate_paragraph">
              <strong>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis omnis veritatis architecto?
              </strong>
            </p>
          </>
          <>
            <div className="step red">
              <h4>Create a Donor Account</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                libero illo sed?
              </p>
              <Link to="/signup">
                <Button variant="contained" style={{ backgroundColor: "blue" }}>
                  Sign Up
                </Button>
              </Link>
            </div>
            <div className="step ">
              <h4>Turn on your availability status</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                libero illo sed?
              </p>
              <Button variant="contained" style={{ backgroundColor: "maroon" }}>
                Goto Visibility
              </Button>
            </div>
            <div className="step yellow">
              <h4>Accept donation request</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                libero illo sed?
              </p>
              <Button variant="contained" style={{ backgroundColor: "green" }}>
                Accept Request
              </Button>
            </div>
            <div className="step green">
              <h4>Donate at an Approved center</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                libero illo sed?
              </p>
            </div>
          </>
        </div>
        <MedicalCenters />

        <div className="donor_section">
          <h4>Meet the Donors of the month</h4>
          <div className="donor_wrapper">
            <div>
              <DonorCard
                name="Gbenga Showunmi"
                location="Ikeja, Lagos, Nigeria"
                image="/images/high-angle-man-posing-with-sunglasses_23-2149415773.jpg"
                bloodType="O+"
              />
            </div>
            <div>
              <DonorCard
                name="Annita Perks"
                location="Ikeja, Lagos, Nigeria"
                image="/images/happy-african-american-takes-selfie-yellow-background_360749-430.jpg"
                bloodType="O-"
              />
            </div>
            <div>
              <DonorCard
                name="Joy Mason"
                location="Enugu, Enugu, Nigeria"
                image="/images/closeup-shot-lovely-tender-feminine-africanamerican-woman-with-curly-hair-red-tshirt-pulling-hands-holding-camera-as-hugging-comforting-friend-with-gentle-smile-face_176420-55399.jpg"
                bloodType="WQ"
              />
            </div>
            <div>
              <DonorCard
                name="Sudan Micheal"
                location="Ikeja, Lagos, Nigeria"
                image="/images/man-face-avatar-portrait-confident-expression-icon_279525-26561.jpg"
                bloodType="GG"
              />
            </div>
            <div>
              <DonorCard
                name="James Hanger"
                location="VI, Lagos, Nigeria"
                image="/images/creative-african-american-male-student-guy-looking-through-finger-frames-smiling-amused-capture-moment-taking-photo-camera-imaging-something-white-background_176420-54425.jpg"
                bloodType="O+"
              />
            </div>
            <div>
              <DonorCard
                name="Screw Table"
                location="Ikeja, Lagos, Nigeria"
                image="/images/amazed-happy-african-man-listening-music-from-cell-phone_171337-18463.jpg"
                bloodType="ZK"
              />
            </div>
          </div>
        </div>
      </div>
    </HeaderFooter>
  );
}
