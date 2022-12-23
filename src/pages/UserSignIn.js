import { useCallback } from "react";
import { FormControlLabel, Checkbox, Button, TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import "./UserSignIn.css";

const UserSignIn = () => {
  const navigate = useNavigate();

  const onLoginBtnClick = useCallback(() => {
    navigate("/welcome");
  }, [navigate]);

  const onLoginAsAdminClick = useCallback(() => {
    navigate("/admn-sign-in");
  }, [navigate]);

  return (
    <div className="user-sign-in">
      <div className="dashboard-login-light-theme1">
        <img className="rectangle-icon9" alt="" src="../rectangle-2.svg" />
        <img className="vectors-icon" alt="" src="../vectors.svg" />
        <img
          className="light-mode-dark-mode"
          alt=""
          src="../light-mode--dark-mode.svg"
        />
        <form className="form">
          <div className="section-forgot">
            <a className="forgot-password">Forgot password?</a>
            <FormControlLabel
              className="rectangle-formcontrollabel"
              label="Remember Me"
              labelPlacement="end"
              control={<Checkbox color="primary" size="medium" />}
            />
          </div>
          <Button
            className="login-btn"
            sx={{ width: 300 }}
            variant="contained"
            color="primary"
            href="/welcome"
            onClick={onLoginBtnClick}
          >
            login
          </Button>
          <TextField
            className="password1"
            sx={{ width: 300 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Password"
            placeholder="Enter Password"
            size="medium"
            margin="none"
          />
          <TextField
            className="username"
            sx={{ width: 300 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Login"
            placeholder="Enter ID"
            size="medium"
            margin="none"
          />
          <div className="sign-in-and-start-managing-you">
            Sign in and start managing your Files!
          </div>
          <div className="sign-in">Sign in</div>
        </form>
        <Link
          className="login-as-admin"
          to="/admn-sign-in"
          onClick={onLoginAsAdminClick}
        >
          Login as admin?
        </Link>
      </div>
    </div>
  );
};

export default UserSignIn;
