import {LeftOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import MobileSideBar from "./SideBarForMobile";

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div className="navbar">
      <div><LeftOutlined /><button onClick={()=>navigate('/')}> Back</button></div>
      <div className="mobile-side-bar">
      <MobileSideBar/>
      </div>
    </div>
  )
}

export default Navbar
