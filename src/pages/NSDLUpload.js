import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Button, TextField, Icon, Button as MuiButton } from "@mui/material";
import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from "@mui/x-date-pickers";
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
import "./NSDLUpload.css";

const NSDLUpload = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="nsdl-upload">
        <div className="graph8">
          <img className="vector-icon23" alt="" src="../vector5.svg" />
          <img className="frame-icon4" alt="" src="../frame3.svg" />
          <Button
            className="cta21"
            sx={{ width: 129 }}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            className="cta22"
            sx={{ width: 129 }}
            variant="contained"
            color="primary"
          >
            Cancel
          </Button>
          <div className="nsdl-benpos-file-updation">
            NSDL Benpos File Updation
          </div>
          <div className="ob-formscompanys-name2">
            <div className="companys-name8">BENPOS Date :</div>
            <div className="frame8">
              <div className="name2">Company's Name:</div>
            </div>
          </div>
          <div className="ob-formsaddress6">
            <div className="companys-name8">Select File</div>
            <AntSelect
              className="frame9"
              style={{ width: "915px" }}
              size="middle"
              placeholder="Files For Your Selected Date"
              virtual={true}
              showArrow={false}
            >{` `}</AntSelect>
          </div>
          <div className="upload3">
            <div className="top3">
              <div className="back3">
                <img className="icon6" alt="" src="../icon.svg" />
              </div>
              <div className="title3">Upload File</div>
            </div>
            <div className="container5">
              <div className="content5">
                <img className="icon7" alt="" src="../icon5.svg" />
                <div className="paragraph3">
                  Browse and chose the files you want to upload from your
                  computer
                </div>
                <input className="cta23" type="file" />
              </div>
            </div>
          </div>
          <div className="or1">OR</div>
          <div className="date-picker8">
            <MuiDatePicker
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
        </div>
        <div className="navbar9">
          <div className="frame-div30">
            <img className="stock-1-icon9" alt="" src="../stock-1@2x.png" />
            <b className="stoxx9">Stoxx</b>
          </div>
          <div className="right11">
            <div className="buttons9">
              <MuiButton
                className="button10"
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
            className="help-dropdown10"
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
            className="report-dropdown9"
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
            className="upload-dropdown9"
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
            className="file-dropdown9"
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

export default NSDLUpload;
