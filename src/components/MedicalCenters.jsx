import React from 'react'
import HospitalCard from './hospital_card/HospitalCard';

export default function MedicalCenters() {
  return (
    <div className="medical_centers">
      <div className="hospital_card_wrapper">
        <div>
        <HospitalCard
          name="Lorem ipsum dolor."
          image="/images/240_F_97370006_h6UiPHaO0zZ2Pleh2sNhBA3l7YGUFbUn.jpg"
          description="Lorem ipsum dolor sit amet consectetur..."
        />
        </div>
        <div>          
        <HospitalCard
          name="Lorem ipsum dolor."
          image="/images/240_F_129996095_8ZRakjCOtDWravEcU774ItwFEM9A3aH1.jpg"
          description="Lorem ipsum dolor sit amet consectetur..."
        />
        </div>
        <div>
        <HospitalCard
          name="Lorem ipsum dolor."
          image="/images/240_F_30021057_dcjhfPkg8nzYYEzJWc7d6k5mBXO9Qmat.jpg"
          description="Lorem ipsum dolor sit amet consectetur..."
        />
        </div>
        <div>
        <HospitalCard
          name="Lorem ipsum dolor."
          image="/images/240_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg"
          description="Lorem ipsum dolor sit amet consectetur..."
        />
        </div>
        <div>
        <HospitalCard
          name="Lorem ipsum dolor."
          image="/images/240_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg"
          description="Lorem ipsum dolor sit amet consectetur..."
        />
        </div>
        <div>
        <HospitalCard
          name="Lorem ipsum dolor."
          image="/images/240_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg"
          description="Lorem ipsum dolor sit amet consectetur..."
        />
        </div>
      </div>
    </div>
  );
}
