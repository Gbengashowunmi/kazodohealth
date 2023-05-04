import { Button, Divider, TextField } from "@mui/material";
import "./signup.scss";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="signup_wrapper">
      <h4>Sign up to find opportunities</h4>
      <Divider />

      <span>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          size="small"
          margin="normal"
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          size="small"
          margin="normal"
        />
      </span>
      <TextField
        id="outlined-basic"
        label="Email Address"
        variant="outlined"
        size="small"
        margin="normal"
      />
      <TextField
        id="outlined-basic"
        label="Address"
        variant="outlined"
        size="small"
        margin="normal"
      />

      <TextField
        id="outlined-basic"
        label="Passowrd (6 or more characters"
        variant="outlined"
        size="small"
        margin="normal"
      />

      <article className="checkbox">
        <input
          type="checkbox"
          checked
          id="subscribe"
          name="subscribe"
          value="receive mails"
        />
        <label for="subscribe">
          I want to receive emails and tips on how to get the best out of
          Kazodohealth
        </label>
      </article>
      <article className="checkbox">
        <input type="checkbox" id="agree" name="agree" value="receive mails" />
        <label for="agree">
          Yes, I understand and agree to the KazodoHealth Terms of Service ,
          including the User Agreement and Privacy Policy .
        </label>
      </article>

      <Button variant="contained"> Create my Account</Button>
      <Divider />

      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
