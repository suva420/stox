import { useCallback } from "react";
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
import "./PanFileUpload.css";

const PanFileUpload = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="pan-file-upload">
      <div className="graph6">
        <img className="vector-icon21" alt="" src="../vector5.svg" />
        <img className="frame-icon2" alt="" src="../frame1.svg" />
        <Button
          className="cta15"
          sx={{ width: 129 }}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
        <Button
          className="cta16"
          sx={{ width: 129 }}
          variant="contained"
          color="primary"
        >
          Cancel
        </Button>
        <div className="pan-file-updation">Pan File Updation</div>
        <div className="upload1">
          <div className="top1">
            <div className="back1">
              <img className="icon2" alt="" src="../icon.svg" />
            </div>
            <div className="title1">Upload File</div>
          </div>
          <div className="container3">
            <div className="content3">
              <img className="icon3" alt="" src="../icon1.svg" />
              <div className="paragraph1">
                Browse and chose the files you want to upload from your computer
              </div>
              <input className="cta17" type="file" />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar7">
        <div className="frame-div28">
          <img className="stock-1-icon7" alt="" src="../stock-1@2x.png" />
          <b className="stoxx7">Stoxx</b>
        </div>
        <div className="right9">
          <div className="buttons7">
            <Button
              className="button8"
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
          className="help-dropdown8"
          overlay={
            <AntMenu>
              {[{ value: "FAQ" }, { value: "Guide" }].map((option, index) => (
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
            {`Help `}
            <DownOutlined />
          </AntButton>
        </AntDropdown>
        <AntDropdown
          className="report-dropdown7"
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
          className="upload-dropdown7"
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
        <AntDropdown
          className="file-dropdown7"
          overlay={
            <AntMenu>
              {[{ value: "Company Master Details" }, { value: "Logout" }].map(
                (option, index) => (
                  <AntMenu.Item key={index}>
                    <a onClick={(e) => e.preventDefault()}>
                      {option.value || ""}
                    </a>
                  </AntMenu.Item>
                )
              )}
            </AntMenu>
          }
          placement="bottomLeft"
          trigger={["hover"]}
        >
          <AntButton onClick={(e) => e.preventDefault()}>
            {`File `}
            <DownOutlined />
          </AntButton>
        </AntDropdown>
      </div>
    </div>
  );
};

export default PanFileUpload;
