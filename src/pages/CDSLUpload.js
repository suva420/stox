import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Button, TextField, Icon, Button as MuiButton } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  Select as AntSelect,
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
import "./CDSLUpload.css";

const CDSLUpload = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="cdsl-upload">
        <div className="graph7">
          <img className="vector-icon22" alt="" src="../vector5.svg" />
          <img className="frame-icon3" alt="" src="../frame2.svg" />
          <Button
            className="cta18"
            sx={{ width: 129 }}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            className="cta19"
            sx={{ width: 129 }}
            variant="contained"
            color="primary"
          >
            Cancel
          </Button>
          <div className="cdsl-benpos-file-updation">
            CDSL Benpos File Updation
          </div>
          <div className="ob-formscompanys-name1">
            <div className="companys-name7">BENPOS Date :</div>
            <div className="frame6">
              <div className="name1">Company's Name:</div>
            </div>
          </div>
          <div className="upload2">
            <div className="top2">
              <div className="back2">
                <img className="icon4" alt="" src="../icon.svg" />
              </div>
              <div className="title2">Upload File</div>
            </div>
            <div className="container4">
              <div className="content4">
                <img className="icon5" alt="" src="../icon5.svg" />
                <div className="paragraph2">
                  Browse and chose the files you want to upload from your
                  computer
                </div>
                <input className="cta20" type="file" />
              </div>
            </div>
          </div>
          <div className="or">OR</div>
          <div className="date-picker7">
            <DatePicker
              label="Select Date"
              value={datePickerDateTimePickerValue}
              onChange={(newValue) => {
                setDatePickerDateTimePickerValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  variant="outlined"
                  size="medium"
                  renderInput={{ placeholder: "01/01/2022" }}
                  helperText=""
                />
              )}
            />
          </div>
          <div className="ob-formsaddress5">
            <div className="companys-name7">Select File</div>
            <AntSelect
              className="frame7"
              style={{ width: "915px" }}
              size="middle"
              placeholder="Files For Your Selected Date"
              virtual={true}
              showArrow={false}
            >{` `}</AntSelect>
          </div>
        </div>
        <div className="navbar8">
          <div className="frame-div29">
            <img className="stock-1-icon8" alt="" src="../stock-1@2x.png" />
            <b className="stoxx8">Stoxx</b>
          </div>
          <div className="right10">
            <div className="buttons8">
              <MuiButton
                className="button9"
                variant="outlined"
                color="primary"
                href="/home"
                onClick={onButtonClick}
              >
                LOGOUT
              </MuiButton>
            </div>
          </div>
          <AntDropdown
            className="help-dropdown9"
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
            className="report-dropdown8"
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
            className="upload-dropdown8"
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
            className="file-dropdown8"
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
    </LocalizationProvider>
  );
};

export default CDSLUpload;
