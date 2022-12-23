import { useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button as MuiButton } from "@mui/material";
import {
  Menu as AntMenu,
  Dropdown as AntDropdown,
  Button as AntButton,
} from "antd";
import { Accordion } from "react-bootstrap";
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
import "./FAQ.css";

const FAQ = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="faq">
      <div className="graph">
        <div className="faq1" />
        <div className="faq-section">
          <div className="container">
            <div className="content">
              <div className="heading-and-supporting-text">
                <div className="heading"> Frequently asked questions</div>
                <div className="supporting-text">
                  {" "}
                  Everything you need to know about us and Our Services
                </div>
              </div>
            </div>
          </div>
          <Accordion className="accordionbasic">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Is there a free trial available?
              </Accordion.Header>
              <Accordion.Body>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="accordionbasic">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What are the minimum specifications required?
              </Accordion.Header>
              <Accordion.Body>
                Memory: Minimum of 1GB RAM; For best results: 2GB RAM Disk
                space: Connection manager, manager, and service interface:
                Minimum of 900MB disk space WebSphere Application Server
                Community Edition: Minimum of 200MB disk space Installation
                Manager (if not already installed): Minimum of 150MB disk space
                Temporary disk space: 4GB for Microsoft® Windows® and 8GB for
                Linux® and UNIX® if you download the server installation image
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="accordionbasic">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Can I get help 24/7?</Accordion.Header>
              <Accordion.Body>
                Yes, you can contact us 24/7 and one of our executives will get
                back to you as soon as possible. You can also mail us if you
                have any query in stoxxcustomerservice@gmail.com.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="accordionbasic">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                My app keeps crashing whenever I open it.
              </Accordion.Header>
              <Accordion.Body>
                Generally website 'crashes' if it stops serving data. That can
                happen for all sorts of reasons. If the network that the website
                is sending data out on goes down, then the site hasn't really
                crashed. But it may as well have. If the filesystem on the
                website's computer gets corrupted, the site may crash. Sometimes
                the server is not able to handle the bandwidth of the traffic.
                In that case, also you will see the same issue. Also, few
                external possible things happen to the server or to the backend
                of the website. Also, there are multiple reasons for the website
                and application crash.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="accordionbasic" />
        </div>
        <img
          className="rectangle-icon"
          alt=""
          src="../animation_500_lbxegklv.gif"
        />
      </div>
      <div className="content1">
        <div className="avatar-group">
          <img className="avatar-icon" alt="" src="../avatar@2x.png" />
          <img className="avatar-icon1" alt="" src="../avatar1@2x.png" />
          <img className="avatar-icon2" alt="" src="../avatar2@2x.png" />
        </div>
        <div className="heading-and-supporting-text1">
          <div className="heading1">Still have questions?</div>
          <div className="supporting-text1">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </div>
        </div>
        <button className="actions">
          <div className="button">
            <div className="button-base">
              <div className="text">Get in touch</div>
            </div>
          </div>
        </button>
      </div>
      <div className="navbar">
        <div className="frame-div">
          <img className="stock-1-icon" alt="" src="../stock-1@2x.png" />
          <b className="stoxx">Stoxx</b>
        </div>
        <div className="right">
          <div className="buttons">
            <MuiButton
              className="button1"
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
          className="help-dropdown"
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
          className="report-dropdown"
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
          className="upload-dropdown"
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
          className="file-dropdown"
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

export default FAQ;
