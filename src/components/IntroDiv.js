import React from 'react';
import { Descriptions, Button } from 'antd';
import { useNavigate } from 'react-router-dom'; 

const IntroDiv = () => {
  const navigate = useNavigate(); 

  const items = [
    {
      key: '1',
      label: 'Contact',
      children: 'Corinne Anterlline',
    },
    {
      key: '2',
      label: 'Phone',
      span: 2,
      children: '(716)204-1700',
    },
    {
      key: '2.1',
      label: '',
      children: (
        <Button
          style={{backgroundColor:"#211f20", color:"white"}}
          type="primary"
          onClick={() => navigate('/edit-client')} 
        >
          Edit Client
        </Button>
      ),
    },
    {
      key: '3',
      label: 'Address',
      children: '1775 Wehrle Drive',
    },
    {
      key: '4',
      label: 'City',
      children: 'Williamsville',
    },
    {
      key: '5',
      label: 'State',
      children: 'NY',
    },
    {
      key: '6',
      label: 'Zip',
      children: '14221',
    },
  ];

  return <Descriptions title="Gross Pollow, LLC" layout="vertical" items={items} column={4} className="intro-div" />;
};

export default IntroDiv;
