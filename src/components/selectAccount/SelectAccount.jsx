import { Icon } from "@iconify/react";
import "./selectaccount.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function SelectAccount() {
  return (
    <div className="select_account_wrapper">
      <h4>Select which Profile best Describes you</h4>
      <div className="option_wrapper">
        <label htmlFor="option1" className="option_card">
          <input
            type="radio"
            id="option1"
            name="option"
            value=""
            // checked={plan.name === formDetails.plan.planName}
            // onChange={selectPlan}
          />
          <div className="icon">
            <Icon icon="ep:opportunity" width="30" height="30" />
          </div>
          <p className="option">
            I'm a student of knowledge seeking Opportuinities
          </p>
        </label>
        <label htmlFor="option2" className="option_card">
          <input
            type="radio"
            id="option2"
            name="option"
            value=""
            // checked={plan.name === formDetails.plan.planName}
            // onChange={selectPlan}
          />
          <div className="icon">
            <Icon
              icon="fluent-mdl2:recruitment-management"
              color="green"
              width="30"
              height="30"
            />
          </div>
          <p className="option">I'm a Recruiter seeking talents</p>
        </label>
        <label htmlFor="option3" className="option_card">
          <input
            type="radio"
            id="option3"
            name="option"
            value=""
            // checked={plan.name === formDetails.plan.planName}
            // onChange={selectPlan}
          />
          <div className="icon">
            <Icon
              icon="carbon:hospital-bed"
              color="maroon"
              width="30"
              height="30"
            />
          </div>
          <p className="option">I'm represent a hospital</p>
        </label>
        <label htmlFor="option4" className="option_card">
          <input
            type="radio"
            id="option4"
            name="option"
            value=""
            // checked={plan.name === formDetails.plan.planName}
            // onChange={selectPlan}
          />
          <div className="icon">
            <Icon
              icon="mdi:briefcase-swap-outline"
              color="yellow"
              width="30"
              height="30"
            />
          </div>
          <p className="option">I want to swap my Machine</p>
        </label>
        <label htmlFor="option5" className="option_card">
          <input
            type="radio"
            id="option5"
            name="option"
            value=""
            // checked={plan.name === formDetails.plan.planName}
            // onChange={selectPlan}
          />
          <div className="icon">
            <Icon
              icon="maki:blood-bank"
              color="maroon"
              width="30"
              height="30"
            />
          </div>
          <p className="option">I want to Donate Blood</p>
        </label>
      </div>

      <Button  className="btn">
        Join as student
      </Button>

      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
