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
import "./MovementOfSharesReport.css";

const MovementOfSharesReport = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);
  const [datePickerDateTimePicker1Value, setDatePickerDateTimePicker1Value] =
    useState(null);
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="movement-of-shares-report">
        <div className="graph3">
          <img className="vector-icon18" alt="" src="../vector1.svg" />
          <img className="rectangle-icon5" alt="" src="../rectangle@2x.png" />
          <Button
            className="cta6"
            sx={{ width: 214 }}
            variant="contained"
            color="primary"
          >
            Show Report
          </Button>
          <Button
            className="cta7"
            sx={{ width: 129 }}
            variant="contained"
            color="primary"
          >
            Print
          </Button>
          <Button
            className="cta8"
            sx={{ width: 129 }}
            variant="contained"
            color="primary"
          >
            Cancel
          </Button>
          <div className="movement-of-shares">Movement Of Shares</div>
          <div className="companys-name4">Current BENPOS Date :</div>
          <div className="companys-name5">Previous BENPOS Date :</div>
          <div className="ob-formsaddress2">
            <div className="address2">Select File</div>
            <AntSelect
              className="frame2"
              style={{ width: "338px" }}
              size="middle"
              placeholder="Files For Your Selected Date"
              virtual={true}
              showArrow={true}
            >{` `}</AntSelect>
          </div>
          <div className="ob-formsaddress3">
            <div className="address2">Select File</div>
            <AntSelect
              className="frame2"
              style={{ width: "338px" }}
              size="middle"
              placeholder="Files For Your Selected Date"
              virtual={true}
              showArrow={true}
            >{` `}</AntSelect>
          </div>
          <div className="date-picker4">
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
          <div className="date-picker5">
            <MuiDatePicker
              label="Select Date"
              value={datePickerDateTimePicker1Value}
              onChange={(newValue) => {
                setDatePickerDateTimePicker1Value(newValue);
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
          <img
            className="rectangle-icon6"
            alt=""
            src="../animation_500_lbxcb763.gif2"
          />
        </div>
        <div className="navbar4">
          <div className="frame-div25">
            <img className="stock-1-icon4" alt="" src="../stock-1@2x.png" />
            <b className="stoxx4">Stoxx</b>
          </div>
          <div className="right6">
            <div className="buttons4">
              <MuiButton
                className="button5"
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
            className="help-dropdown5"
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
            className="report-dropdown4"
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
            className="upload-dropdown4"
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
            className="file-dropdown4"
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

export default MovementOfSharesReport;
