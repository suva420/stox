import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/user-sign-in");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    navigate("/user-sign-in");
  }, [navigate]);

  return (
    <div className="home">
      <div className="hero">
        <img className="img-icon" alt="" src="../img@2x.png" />
        <img className="shape-icon" alt="" src="../shape@2x.png" />
        <div className="content7">
          <b className="a-one-in-all-app-for-your-stoc">
            A one-in-all App for your Stocks investments
          </b>
          <div className="get-all-your-stocks-related-da">
            Get all your Stocks related data here!
          </div>
          <div className="button13" onClick={onButtonContainerClick}>
            <b className="login">Get Started</b>
            <img className="caretdown-icon" alt="" src="../caretdown.svg" />
          </div>
        </div>
        <img className="shape-icon1" alt="" src="../shape1@2x.png" />
        <div className="navbar12">
          <div className="right14">
            <div className="links">
              <div className="button14">
                <b className="login1">NSDL</b>
                <img
                  className="caretdown-icon1"
                  alt=""
                  src="../caretdown.svg"
                />
              </div>
              <div className="button14">
                <b className="login1">CSDL</b>
                <img
                  className="caretdown-icon1"
                  alt=""
                  src="../caretdown.svg"
                />
              </div>
              <div className="button14">
                <b className="login1">PAN vertification</b>
                <img className="caretdown-icon" alt="" src="../caretdown.svg" />
              </div>
            </div>
            <div className="buttons12">
              <div className="button17" onClick={onButtonContainer4Click}>
                <b className="login">Login</b>
                <img className="caretdown-icon" alt="" src="../caretdown.svg" />
              </div>
            </div>
          </div>
          <div className="frame-div33">
            <img className="stock-1-icon12" alt="" src="../stock-1@2x.png" />
            <b className="stoxx12">Stoxx</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
