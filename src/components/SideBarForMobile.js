import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { BarChartOutlined, AppstoreOutlined, MenuOutlined } from "@ant-design/icons";

const MobileSideBar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <MenuOutlined/>
      </Button>
      <Drawer title="Side Bar" onClose={onClose} open={open}>
        <div className="mobile-bar">
        <div className="top-sidevar">
        <img
          src="https://seeklogo.com/images/F/Futech-logo-E81C0D4CAD-seeklogo.com.gif"
          alt="FuTech logo"
        />
        <div className="sidemenu">
          <div>
            <BarChartOutlined /> <span style={{color:"black"}}>Overview</span>
          </div>
          <div>
            <AppstoreOutlined /> <span style={{color:"black"}}>Admin</span>
          </div>
        </div>
      </div>

      <div className="profile-div">
        <div className="profile-img-div">
        <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile-img" />
        </div>
        <div className="profile-desc">
          <p>Olivia Rhye</p>
          <p className="username">olivia@stox.com</p>
        </div>
      </div>
        </div>
      </Drawer>
    </>
  );
};
export default MobileSideBar;