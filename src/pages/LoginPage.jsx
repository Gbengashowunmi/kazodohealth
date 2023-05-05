import { Button, Divider, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import HeaderFooter from "../components/header-footer/HeaderFooter";
export default function LoginPage() {
  return (
    <HeaderFooter>
      <div className="signup_wrapper">
        <h4>Sign up to find opportunities</h4>
        <TextField
          id="outlined-basic"
          label="Username/email"
          variant="outlined"
          size="small"
          margin="normal"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          margin="normal"
        />

        <Button variant="contained">Login</Button>

        <Divider />
        <p>Don't have an account?</p>
        <Link to="/signup">
          <Button variant="contained">Sign up</Button>
        </Link>
      </div>
    </HeaderFooter>
  );
}
