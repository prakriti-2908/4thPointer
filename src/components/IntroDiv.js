import React from 'react';
import { Descriptions, Button } from 'antd';
import { useNavigate } from 'react-router-dom'; 

const IntroDiv = () => {
  const navigate = useNavigate(); 

  return (
    <div className="intro-div">
      <div className='heading' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Gross Pollow, LLC</h2>
        <Button
          style={{ backgroundColor: "#211f20", color: "white" }}
          type="primary"
          onClick={() => navigate('/edit-client')} 
        >
          Edit Client
        </Button>
      </div>
      <Descriptions
        layout="vertical"
        column={4}
        className="custom-descriptions"
      >
        <Descriptions.Item label={<span className='label' >Contact</span>}>
          <div className='desc'>Corinne Anterlline</div>
        </Descriptions.Item>
        <Descriptions.Item label={<span className='label'>Phone</span>} span={3}>
          <div className='desc'>(716)204-1700</div>
        </Descriptions.Item>
        <Descriptions.Item label={<span className='label'>Address</span>}>
          <div className='desc'>1775 Wehrle Drive</div>
        </Descriptions.Item>
        <Descriptions.Item label={<span className='label'>City</span>}>
          <div className='desc'>Williamsville</div>
        </Descriptions.Item>
        <Descriptions.Item label={<span className='label'>State</span>}>
          <div className='desc'>NY</div>
        </Descriptions.Item>
        <Descriptions.Item label={<span className='label'>Zip</span>}>
          <div className='desc'>14221</div>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default IntroDiv;