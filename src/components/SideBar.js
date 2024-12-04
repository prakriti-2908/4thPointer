import {BarChartOutlined, AppstoreOutlined} from "@ant-design/icons"
import "./Styles/SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <img src="https://seeklogo.com/images/F/Futech-logo-E81C0D4CAD-seeklogo.com.gif" alt="FuTech logo" />
      <div className="sidemenu">
        <div><BarChartOutlined/> <span>Overview</span></div>
        <div><AppstoreOutlined/> <span>Admin</span></div>
      </div>
    </div>
  )
}

export default SideBar
