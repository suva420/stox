import { useCallback } from "react";
import {Link} from "react-router-dom"
import "antd/dist/antd.min.css";
import { Button } from "@mui/material";
import {
  Menu as AntMenu,
  Dropdown as AntDropdown,
  Button as AntButton,
} from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import FileDropDown from "../components/FileDropDown";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="welcome">
      <div className="navbar11">
        <div className="frame-div32">
          <img className="stock-1-icon11" alt="" src="../stock-1@2x.png" />
          <b className="stoxx11">Stoxx</b>
        </div>
        <div className="right13">
          <div className="buttons11">
            <Button
              className="button12"
              variant="outlined"
              color="primary"
              href="/home"
              onClick={onButtonClick}
            >
              LOGOUT
            </Button>
          </div>
        </div>
        <AntDropdown
          className="help-dropdown12"
          overlay={
            <AntMenu>
              {[{ value: "FAQ" }, { value: "Guide" }].map((option, index) => (
                <AntMenu.Item key={index}>
                  <Link to="/company-master-details"> {option.value || ""}</Link>
                </AntMenu.Item>
              ))}
            </AntMenu>
          }
          placement="bottomLeft"
          trigger={["hover"]}
        >
          <AntButton onClick={(e) => e.preventDefault()}>
            {`Help `}
            <DownOutlined />
          </AntButton>
        </AntDropdown>
        <AntDropdown
          className="report-dropdown11"
          overlay={
            <AntMenu>
              {[
                { value: "Benpos Master Query" },
                { value: "Movement Of Shares" },
                { value: "Bought/Sold Shares" },
                { value: "PAN Listed Share Hold" },
              ].map((option, index) => (
                <AntMenu.Item key={index}>
                  <a onClick={(e) => e.preventDefault()}>
                    {option.value || ""}
                  </a>
                </AntMenu.Item>
              ))}
            </AntMenu>
          }
          placement="bottomLeft"
          trigger={["hover"]}
        >
          <AntButton onClick={(e) => e.preventDefault()}>
            {`Reports `}
            <DownOutlined />
          </AntButton>
        </AntDropdown>
        <AntDropdown
          className="upload-dropdown11"
          overlay={
            <AntMenu>
              {[
                { value: "NSDL" },
                { value: "CSDL" },
                { value: "PAN Master File" },
                { value: "ISIN Master File" },
              ].map((option, index) => (
                <AntMenu.Item key={index}>
                  <a onClick={(e) => e.preventDefault()}>
                    {option.value || ""}
                  </a>
                </AntMenu.Item>
              ))}
            </AntMenu>
          }
          placement="bottomLeft"
          trigger={["hover"]}
        >
          <AntButton onClick={(e) => e.preventDefault()}>
            {`Upload `}
            <DownOutlined />
          </AntButton>
        </AntDropdown>
        <FileDropDown />
      </div>
      <div className="graph10">
        <img
          className="rectangle-icon10"
          alt=""
          src="../animation_500_lbt5xcpm.gif"
        />
        <img className="vector-icon25" alt="" src="../vector10.svg" />
        <div className="content6">
          <img className="subtract-icon" alt="" src="../subtract.svg" />
          <div className="title5">
            <b className="welcome-to-stoxx">Welcome to Stoxx</b>
            <div className="next-invest-has-already-paid-o">
              Next Invest has already paid out so much cash returns to
              investors. Earn potential cash payments through unique
              revenue-share and debt financing investments.
            </div>
          </div>
          <div className="this-chart-displays-payments-r">
            This chart displays payments resulting from offerings facilitated by
            NextSeed TX LLC, NextSeed US LLC, and NextSeed Securities, LLC
            between the third quarter of 2015 and the third quarter of 2020
            utilizing Texas' intrastate crowdfunding exemption, Regulations CF
            and D. Past results may not be indicative of future performance,
            crowdfunding investments are subject to total loss of principal.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
