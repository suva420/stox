import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import {
  Button,
  TextField,
  Icon,
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox,
  Button as MuiButton,
} from "@mui/material";
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
import "./PANListedShareHoldersRepor.css";

const PANListedShareHoldersRepor = () => {
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
      <div className="pan-listed-share-holders-repor">
        <div className="graph1">
          <img className="vector-icon16" alt="" src="../vector1.svg" />
          <img className="rectangle-icon1" alt="" src="../rectangle@2x.png" />
          <Button
            className="cta"
            sx={{ width: 214 }}
            variant="contained"
            color="primary"
          >
            Show Report
          </Button>
          <Button
            className="cta1"
            sx={{ width: 129 }}
            variant="contained"
            color="primary"
          >
            Print
          </Button>
          <Button
            className="cta2"
            sx={{ width: 129 }}
            variant="contained"
            color="primary"
          >
            Cancel
          </Button>
          <div className="pan-listed-share-holders">
            PAN Listed Share Holders
          </div>
          <div className="companys-name">Shares Bought Date :</div>
          <div className="companys-name1">Shares Sold Date :</div>
          <div className="ob-formsaddress">
            <div className="address">{`Shares : >=`}</div>
            <AntSelect
              className="frame"
              style={{ width: "588px" }}
              size="middle"
              placeholder="Your Shares"
              virtual={true}
              showArrow={true}
            >{` `}</AntSelect>
          </div>
          <div className="rectangle-div8" />
          <div className="date-picker">
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
          <div className="date-picker1">
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
            className="rectangle-icon2"
            alt=""
            src="../animation_500_lbxcb763.gif"
          />
        </div>
        <div className="checkbox">
          <div className="all-promoter">All / Promoter</div>
          <MuiFormControlLabel
            className="forms-radio-with-label"
            label="All PAN"
            labelPlacement="end"
            control={<MuiCheckbox color="primary" size="medium" />}
          />
          <MuiFormControlLabel
            className="forms-radio-with-label1"
            label="Promoters Only"
            labelPlacement="end"
            control={<MuiCheckbox color="primary" size="medium" />}
          />
        </div>
        <div className="navbar2">
          <div className="frame-div23">
            <img className="stock-1-icon2" alt="" src="../stock-1@2x.png" />
            <b className="stoxx2">Stoxx</b>
          </div>
          <div className="right4">
            <div className="buttons2">
              <MuiButton
                className="button3"
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
            className="help-dropdown3"
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
            className="report-dropdown2"
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
            className="upload-dropdown2"
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
            className="file-dropdown2"
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

export default PANListedShareHoldersRepor;
