import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
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
import "./FileDropDown.css";

const FileDropDown = ({ component }) => {
  return (
    <Dropdown
      className="file-dropdown11"
      overlay={
        <Menu>
          {[{ value: "Company Master Details" }, { value: "Logout" }].map(
            (option, index) => (
              <Menu.Item key={index}>
                <a onClick={(e) => e.preventDefault()}>{option.value || ""}</a>
              </Menu.Item>
            )
          )}
        </Menu>
      }
      placement="bottomLeft"
      trigger={["hover"]}
    >
      <Button onClick={(e) => e.preventDefault()}>
        {`File `}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default FileDropDown;
