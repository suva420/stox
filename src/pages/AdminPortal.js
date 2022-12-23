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
import "./AdminPortal.css";

const AdminPortal = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="admin-portal">
      <div className="card-2">
        <div className="bg" />
        <div className="right1">
          <img className="divider-icon" alt="" src="../divider.svg" />
          <div className="user-profile">
            <img className="avatar-icon3" alt="" src="../avatar3.svg" />
            <div className="user-namelocation">
              <div className="mr-dilip">Mr. Dilip</div>
              <div className="frame-div1">
                <img className="map-pin-icon" alt="" src="../mappin.svg" />
                <div className="west-bengalkol">West Bengal,Kol</div>
              </div>
            </div>
          </div>
          <img className="divider-icon" alt="" src="../divider.svg" />
          <div className="earning">
            <div className="group-div">
              <div className="div">$1000</div>
              <div className="potential-earning">Potential earning</div>
            </div>
            <button className="up">
              <img className="ellipse-icon" alt="" src="../ellipse-10.svg" />
              <img className="vector-icon" alt="" src="../vector-40.svg" />
            </button>
          </div>
          <img className="divider-icon" alt="" src="../divider.svg" />
          <button className="standart-buttonnormal">
            <div className="contact">Contact</div>
          </button>
        </div>
        <div className="title-deadline">
          <div className="individual-tax-return-2019">
            Individual tax return 2019
          </div>
          <div className="deadline">
            <img
              className="obj-statustime-icon"
              alt=""
              src="../obj-statustime.svg"
            />
            <div className="cpa">16 December 2020</div>
          </div>
        </div>
        <img className="drag-element-icon" alt="" src="../drag-element.svg" />
      </div>
      <div className="card-5">
        <div className="rectangle-div" />
        <div className="pros-milestines">Pros milestines</div>
        <img className="info-icon" alt="" src="../info.svg" />
        <div className="frame-div2">
          <div className="group-div1">
            <img className="vector-icon1" alt="" src="../vector-43.svg" />
            <img className="vector-icon2" alt="" src="../vector-44.svg" />
            <div className="rectangle-div1" />
            <img className="ellipse-icon1" alt="" src="../ellipse-15.svg" />
            <img className="ellipse-icon2" alt="" src="../ellipse-16.svg" />
            <div className="bage">
              <div className="frame-div3">
                <div className="div1">$1000</div>
              </div>
              <img className="group-icon" alt="" src="../group-412.svg" />
            </div>
          </div>
        </div>
        <div className="group-div2">
          <div className="transactions-done">Transactions done</div>
          <div className="div2">
            <span>4</span>
            <span className="span">/8</span>
          </div>
          <img className="vector-icon3" alt="" src="../vector-50.svg" />
          <img className="vector-icon4" alt="" src="../vector-51.svg" />
        </div>
        <div className="group-div3">
          <div className="rating">Rating</div>
          <div className="div3">5.0</div>
          <img className="vector-icon3" alt="" src="../vector-50.svg" />
          <img className="vector-icon3" alt="" src="../vector-511.svg" />
        </div>
      </div>
      <div className="card-3-v1">
        <div className="tagsnormal">
          <div className="cpa">CPA</div>
        </div>
        <div className="certified-public-accountant">
          Certified Public Accountant
        </div>
        <img className="up-icon" alt="" src="../up.svg" />
      </div>
      <div className="project-card">
        <div className="rectangle-div2" />
        <div className="frame-div4">
          <div className="frame-div5">
            <div className="cpa">Professional</div>
          </div>
          <div className="frame-div6">
            <div className="cpa">West Bengal, Kolkata</div>
          </div>
          <div className="frame-div6">
            <div className="cpa">Employed</div>
          </div>
        </div>
        <div className="frame-div8">
          <div className="frame-div6">
            <div className="cpa">Nonresident alien</div>
          </div>
          <div className="frame-div6">
            <div className="cpa">Single</div>
          </div>
        </div>
        <div className="title-deadline1">
          <div className="individual-tax-return-2019">
            Individual tax return 2019
          </div>
          <div className="deadline">
            <img
              className="obj-statustime-icon"
              alt=""
              src="../obj-statustime1.svg"
            />
            <div className="cpa">16 December 2020</div>
          </div>
        </div>
        <img className="vector-icon7" alt="" src="../vector-41.svg" />
        <img className="vector-icon8" alt="" src="../vector-42.svg" />
        <div className="group-div4">
          <div className="earning1">
            <div className="group-div">
              <div className="div">$1000</div>
              <div className="potential-earning">Potential earning</div>
            </div>
          </div>
          <div className="standart-buttonnormal1">
            <div className="cpa">Confirm</div>
          </div>
        </div>
        <img className="settings-icon" alt="" src="../settings.svg" />
      </div>
      <div className="card-6">
        <div className="rectangle-div3" />
        <div className="latest-transactions">Latest transactions</div>
        <div className="group-div6">
          <div className="frame-div11">
            <div className="up-icon">
              <img className="ellipse-icon" alt="" src="../ellipse-17.svg" />
              <div className="div5">$</div>
            </div>
            <div className="div6">+8,6%</div>
            <img className="trending-up-icon" alt="" src="../trendingup.svg" />
          </div>
        </div>
        <div className="frame-div12">
          <img className="vector-icon9" alt="" src="../vector-411.svg" />
          <div className="group-div8">
            <div className="group-div9">
              <img className="ellipse-icon4" alt="" src="../ellipse-18.svg" />
              <div className="bm">BM</div>
            </div>
            <div className="frame-div13">
              <div className="individual-tax-return-20192">
                Individual tax return 2019
              </div>
              <div className="may-2020">01 May 2020</div>
            </div>
            <div className="div7">
              <span className="span1">$240</span>
              <span className="span2">.50</span>
            </div>
          </div>
          <img className="vector-icon9" alt="" src="../vector-411.svg" />
          <div className="group-div8">
            <div className="group-div9">
              <img className="ellipse-icon4" alt="" src="../ellipse-18.svg" />
              <div className="jr">JR</div>
            </div>
            <div className="frame-div13">
              <div className="individual-tax-return-20192">
                Individual tax return 2019
              </div>
              <div className="may-2020">07 May 2020</div>
            </div>
            <div className="div8">
              <span className="span1">$600</span>
              <span className="span2">.00</span>
            </div>
          </div>
          <img className="vector-icon9" alt="" src="../vector-411.svg" />
          <div className="group-div8">
            <div className="group-div9">
              <img className="ellipse-icon4" alt="" src="../ellipse-18.svg" />
              <div className="db">DB</div>
            </div>
            <div className="frame-div13">
              <div className="individual-tax-return-20192">
                Individual tax return 2016 - 2019
              </div>
              <div className="may-2020">16 May 2020</div>
            </div>
            <div className="div9">
              <span className="span1">$10,520</span>
              <span className="span2">.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-4">
        <div className="bg1" />
        <img className="frame-icon" alt="" src="../frame-609.svg" />
        <div className="right2">
          <img className="divider-icon" alt="" src="../divider3.svg" />
          <div className="earning2">
            <div className="group-div">
              <div className="div">$1000</div>
              <div className="potential-earning">Potential earning</div>
            </div>
            <img className="up-icon" alt="" src="../up1.svg" />
          </div>
          <img className="divider-icon" alt="" src="../divider3.svg" />
          <div className="frame-div16">
            <div className="standart-buttonnormal2">
              <div className="cpa">Pass</div>
            </div>
            <div className="standart-buttonnormal3">
              <div className="cpa">Send offer</div>
            </div>
          </div>
        </div>
        <div className="title-deadline2">
          <div className="individual-tax-return-2019">
            Individual tax return 2019
          </div>
          <div className="deadline2">
            <div className="cpa">Potential client</div>
          </div>
        </div>
      </div>
      <div className="help-card">
        <div className="group-div15">
          <img className="up-icon2" alt="" src="../up2.svg" />
          <div className="group-div16">
            <div className="we-use-cookies">We use cookies!</div>
          </div>
        </div>
        <div className="amet-minim-mollit-non-deserunt">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <div className="frame-div17">
          <div className="standart-buttonnormal4">
            <div className="cpa">Configure cookies</div>
          </div>
          <div className="standart-buttonnormal5">
            <div className="cpa">Confirm</div>
          </div>
        </div>
        <div className="group-text">
          <div className="frame-div18">
            <div className="up-icon">
              <div className="rectangle-div4" />
              <img className="vector-icon12" alt="" src="../vector.svg" />
            </div>
            <div className="text1">Text</div>
          </div>
          <div className="frame-div18">
            <div className="up-icon">
              <div className="rectangle-div4" />
              <img className="vector-icon12" alt="" />
            </div>
            <div className="text1">Text</div>
          </div>
          <div className="frame-div18">
            <div className="up-icon">
              <div className="rectangle-div4" />
              <img className="vector-icon12" alt="" />
            </div>
            <div className="text1">Text</div>
          </div>
          <div className="frame-div18">
            <div className="up-icon">
              <div className="rectangle-div4" />
              <img className="vector-icon12" alt="" />
            </div>
            <div className="text1">Text</div>
          </div>
        </div>
      </div>
      <div className="navbar1">
        <div className="frame-div22">
          <img className="stock-1-icon1" alt="" src="../stock-1@2x.png" />
          <b className="stoxx1">Stoxx</b>
        </div>
        <div className="right3">
          <div className="buttons1">
            <Button
              className="button2"
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
          className="help-dropdown1"
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
          className="help-dropdown2"
          overlay={
            <AntMenu>
              {[{ value: "Important Documents" }, { value: "My Files" }].map(
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
            {`Miscellaneous `}
            <DownOutlined />
          </AntButton>
        </AntDropdown>
        <AntDropdown
          className="report-dropdown1"
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
          className="upload-dropdown1"
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
          className="file-dropdown1"
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

export default AdminPortal;
