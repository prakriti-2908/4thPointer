import {LeftOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div className="navbar">
      <LeftOutlined /><button onClick={()=>navigate('/')}> Back</button>
    </div>
  )
}

export default Navbar
