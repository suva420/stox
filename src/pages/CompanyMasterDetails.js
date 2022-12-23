import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Button, TextField, Input, Icon } from "@mui/material";
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
import "./CompanyMasterDetails.css";

const CompanyMasterDetails = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="company-master-details">
      <div className="graph9">
        <img className="vector-icon24" alt="" src="../vector9.svg" />
        <img className="frame-icon5" alt="" src="../frame4.svg" />
        <Button
          className="cta24"
          sx={{ width: 129 }}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
        <Button
          className="cta25"
          sx={{ width: 129 }}
          variant="contained"
          color="primary"
        >
          Cancel
        </Button>
        <div className="ob-formsisin">
          <div className="isin" />
          <TextField
            className="frame10"
            sx={{ width: 504 }}
            color="primary"
            variant="outlined"
            type="text"
            label="ISIN:"
            placeholder=" "
            size="medium"
            margin="none"
          />
        </div>
        <div className="company-master-details1">Company Master Details</div>
        <div className="ob-formscompanys-name3">
          <div className="isin">Company's Name:</div>
          <TextField
            className="frame10"
            sx={{ width: 1508 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Company's Name:"
            placeholder="Enter name"
            size="medium"
            margin="none"
          />
        </div>
        <div className="ob-formsaddress7">
          <div className="isin">Address:</div>
          <TextField
            className="frame10"
            sx={{ width: 1508 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Address:"
            placeholder="Enter Address"
            size="medium"
            margin="none"
          />
        </div>
        <div className="ob-formscompany-paid-capital">
          <div className="isin">Company Paid Capital:</div>
          <TextField
            className="frame10"
            sx={{ width: 504 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Company Paid Capital:"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <div className="ob-formsisin1">
          <div className="isin">BSE SCRIP CODE:</div>
          <TextField
            className="frame10"
            sx={{ width: 504 }}
            color="primary"
            variant="outlined"
            type="text"
            label="BSE SCRIP CODE"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <div className="ob-formsisin2">
          <div className="isin">NSC SCRIP CODE:</div>
          <TextField
            className="frame10"
            sx={{ width: 504 }}
            color="primary"
            variant="outlined"
            type="text"
            label="NSC SCRIP CODE"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <div className="ob-formsisin3">
          <div className="isin">MSC SCRIP CODE:</div>
          <TextField
            className="frame10"
            sx={{ width: 504 }}
            color="primary"
            variant="outlined"
            type="text"
            label="MSC SCRIP CODE"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <div className="ob-formsisin4">
          <div className="isin">CALCUTTA STOCK EXCHANGE SCRIP CODE:</div>
          <TextField
            className="frame10"
            sx={{ width: 504 }}
            color="primary"
            variant="outlined"
            type="text"
            label="CSE SCRIP CODE"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <div className="ob-formsisin5">
          <div className="isin">Name Of The Contact Person:</div>
          <TextField
            className="frame10"
            sx={{ width: 1064 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Name Of The Contact Person:"
            placeholder="Enter Name"
            size="medium"
            margin="none"
          />
        </div>
        <div className="ob-formsisin6">
          <div className="isin">Designation:</div>
          <TextField
            className="frame10"
            sx={{ width: 504 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Designation"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <div className="ob-formsisin7">
          <div className="isin">Contact No.</div>
          <TextField
            className="frame10"
            sx={{ width: 504 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Contact No."
            placeholder="Enter Contact"
            size="medium"
            margin="none"
          />
        </div>
      </div>
      <div className="navbar10">
        <div className="frame-div31">
          <img className="stock-1-icon10" alt="" src="../stock-1@2x.png" />
          <b className="stoxx10">Stoxx</b>
        </div>
        <div className="right12">
          <div className="buttons10">
            <Button
              className="button11"
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
          className="help-dropdown11"
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
          className="report-dropdown10"
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
          className="upload-dropdown10"
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
          className="file-dropdown10"
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

export default CompanyMasterDetails;
