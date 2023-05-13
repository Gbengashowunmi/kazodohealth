import "./jobs.scss";
import JobCard from "../../components/jobcard/JobCard";
import HeaderFooter from "../../components/header-footer/HeaderFooter";
import JobDescription from "../../components/job_description/JobDescription";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import HospitalCard from "../../components/hospital_card/HospitalCard";

export default function Jobs() {
  const [active, setActive] = useState("job");
  const handleClick = (category) => {
    console.log(category);
    setActive(category);
  };
  return (
    <HeaderFooter>
      <div className="job_header">
        <h6
          className={active === "job" ? "active" : ""}
          onClick={() => handleClick("job")}
        >
          Job feeds
        </h6>
        <h6
          className={active === "hospital" ? "active" : ""}
          onClick={() => handleClick("hospital")}
        >
          Hospital Reviews
        </h6>
      </div>
      {active === "job" ? (
        <div className="jobs_wrapper">
          <div className="jobs">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
          <div className="selected_job">
            <JobDescription />
          </div>
        </div>
      ) : (
        <div className="hospitals">
          <h3>Find hospitals near by</h3>
          <p>Get access to hundreds of hospitals in your area</p>
          <div className="search">
            <TextField
              id="outlined-basic"
              label="Find Hospitals"
              variant="outlined"
              size="small"
              margin="normal"
              fullWidth
            />
            <Button>Find Hospitals</Button>
          </div>
          <div className="hospital_cards">
            <HospitalCard
              name="Lorem ipsum dolor."
              image="/images/240_F_97370006_h6UiPHaO0zZ2Pleh2sNhBA3l7YGUFbUn.jpg"
              description="Lorem ipsum dolor sit amet consectetur..."
            />
            <HospitalCard
              name="Lorem ipsum dolor."
              image="/images/240_F_97370006_h6UiPHaO0zZ2Pleh2sNhBA3l7YGUFbUn.jpg"
              description="Lorem ipsum dolor sit amet consectetur..."
            />
            <HospitalCard
              name="Lorem ipsum dolor."
              image="/images/240_F_97370006_h6UiPHaO0zZ2Pleh2sNhBA3l7YGUFbUn.jpg"
              description="Lorem ipsum dolor sit amet consectetur..."
            />
            <HospitalCard
              name="Lorem ipsum dolor."
              image="/images/240_F_97370006_h6UiPHaO0zZ2Pleh2sNhBA3l7YGUFbUn.jpg"
              description="Lorem ipsum dolor sit amet consectetur..."
            />
            <HospitalCard
              name="Lorem ipsum dolor."
              image="/images/240_F_97370006_h6UiPHaO0zZ2Pleh2sNhBA3l7YGUFbUn.jpg"
              description="Lorem ipsum dolor sit amet consectetur..."
            />
            <HospitalCard
              name="Lorem ipsum dolor."
              image="/images/240_F_97370006_h6UiPHaO0zZ2Pleh2sNhBA3l7YGUFbUn.jpg"
              description="Lorem ipsum dolor sit amet consectetur..."
            />
          </div>
        </div>
      )}
    </HeaderFooter>
  );
}
