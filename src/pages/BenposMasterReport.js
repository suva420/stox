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
import "./BenposMasterReport.css";

const BenposMasterReport = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="benpos-master-report">
        <div className="graph4">
          <img className="vector-icon19" alt="" src="../vector1.svg" />
          <img className="rectangle-icon7" alt="" src="../rectangle@2x.png" />
          <Button
            className="cta9"
            sx={{ width: 214 }}
            variant="contained"
            color="primary"
          >
            Show Report
          </Button>
          <Button
            className="cta10"
            sx={{ width: 129 }}
            variant="contained"
            color="primary"
          >
            Print
          </Button>
          <Button
            className="cta11"
            sx={{ width: 129 }}
            variant="contained"
            color="primary"
          >
            Cancel
          </Button>
          <div className="benpos-master-report1">Benpos Master Report</div>
          <div className="ob-formscompanys-name">
            <div className="companys-name6">BENPOS Date :</div>
            <div className="frame4">
              <div className="name">Company's Name:</div>
            </div>
          </div>
          <div className="ob-formsaddress4">
            <div className="companys-name6">Select File</div>
            <AntSelect
              className="frame5"
              style={{ width: "915px" }}
              size="middle"
              placeholder="Files For Your Selected Date"
              virtual={true}
              showArrow={true}
            >{` `}</AntSelect>
          </div>
          <img
            className="rectangle-icon8"
            alt=""
            src="../animation_500_lbxcb763.gif3"
          />
          <div className="date-picker6">
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
        <div className="navbar5">
          <div className="frame-div26">
            <img className="stock-1-icon5" alt="" src="../stock-1@2x.png" />
            <b className="stoxx5">Stoxx</b>
          </div>
          <div className="right7">
            <div className="buttons5">
              <MuiButton
                className="button6"
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
            className="help-dropdown6"
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
            className="report-dropdown5"
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
            className="upload-dropdown5"
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
            className="file-dropdown5"
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

export default BenposMasterReport;
