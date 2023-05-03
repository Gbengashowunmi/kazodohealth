import { Button } from '@mui/material';
import React from 'react'

export default function MedicalCenters() {
  return (
    <div className="medical_centers">
      <h3>Find Hospitals/Medical Centers Nearby</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        voluptas, aperiam vel eaque soluta officia facere nemo quas nihil earum?
      </p>
      <hr />
      <div className="hospital_card_wrapper">
        <div className="hospital_card">
          <div className="image">
            <img
              src="/images/240_F_145493527_D4bH1uFdUupCds7fK3RTQ7c1V9x4q5at.jpg"
              alt=""
            />
          </div>
          <div className="hospital_description">
            <h6>Medpau Int'l Ltd</h6>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <Button variant="contained" className="green read_more">
              Read More
            </Button>
          </div>
        </div>
        <div className="hospital_card">
          <div className="image">
            <img
              src="/images/240_F_97370006_h6UiPHaO0zZ2Pleh2sNhBA3l7YGUFbUn.jpg"
              alt=""
            />
          </div>
          <div className="hospital_description">
            <h6>Medpau Int'l Ltd</h6>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <Button variant="contained" className="green read_more">
              Read More
            </Button>
          </div>
        </div>
        <div className="hospital_card">
          <div className="image">
            <img
              src="/images/240_F_129996095_8ZRakjCOtDWravEcU774ItwFEM9A3aH1.jpg"
              alt=""
            />
          </div>
          <div className="hospital_description">
            <h6>Medpau Int'l Ltd</h6>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <Button variant="contained" className="green read_more">
              Read More
            </Button>
          </div>
        </div>
        <div className="hospital_card">
          <div className="image">
            <img
              src="/images/240_F_30021057_dcjhfPkg8nzYYEzJWc7d6k5mBXO9Qmat.jpg"
              alt=""
            />
          </div>
          <div className="hospital_description">
            <h6>Medpau Int'l Ltd</h6>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <Button variant="contained" className="green read_more">
              Read More
            </Button>
          </div>
        </div>
        <div className="hospital_card">
          <div className="image">
            <img
              src="/images/240_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg"
              alt=""
            />
          </div>
          <div className="hospital_description">
            <h6>Medpau Int'l Ltd</h6>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <Button variant="contained" className="green read_more">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
