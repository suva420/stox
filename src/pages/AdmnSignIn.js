import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { TextField, Input, Icon } from "@mui/material";
import { Checkbox as AntCheckbox } from "antd";
import { useNavigate } from "react-router-dom";
import "./AdmnSignIn.css";

const AdmnSignIn = () => {
  const navigate = useNavigate();

  const onCTAContainerClick = useCallback(() => {
    navigate("/admin-portal");
  }, [navigate]);

  return (
    <div className="admn-sign-in">
      <img
        className="dashboard-login-light-theme"
        alt=""
        src="../dashboard-login-light-theme.svg"
      />
      <form className="log-in-admin">
        <div className="logo">
          <img
            className="black-and-white-collection-15"
            alt=""
            src="../black-and-white-collection-15.svg"
          />
          <div className="stoxx-admin">Stoxx Admin</div>
        </div>
        <div className="header">
          <b className="title4">Admin Login</b>
          <div className="subtitle">
            Welcome back. Enter your credentials to access your account
          </div>
        </div>
        <div className="email">
          <TextField
            className="bar"
            color="primary"
            variant="outlined"
            type="text"
            label="Email Address"
            placeholder="hello@example.c"
            size="medium"
            margin="none"
          />
        </div>
        <div className="email">
          <div className="email">
            <TextField
              className="bar"
              color="primary"
              variant="outlined"
              type="text"
              label="Password"
              placeholder="******"
              size="medium"
              margin="none"
            />
          </div>
        </div>
        <a className="label">
          <b className="right-text">Forgot Password</b>
        </a>
        <div className="logo">
          <AntCheckbox className="checkbox-icon" />
          <div className="label1">
            <div className="keep-me-signed-in">Keep me signed in</div>
          </div>
        </div>
        <div className="cta26" onClick={onCTAContainerClick}>
          <div className="label2">Continue</div>
        </div>
      </form>
    </div>
  );
};

export default AdmnSignIn;
