import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { createStyles } from "antd-style";

const useStyle = createStyles(({ css, token }) => ({
  customForm: css`
    .ant-form-item {
      margin-bottom: 20px;
    }
    .ant-form-item-label {
      font-weight: bold;
    }
    .ant-btn-cancel {
      color: Black;
      border-color: #211f20;
    }
    .ant-btn-save {
      background-color: #211f20;
      color: white;
      border-color: #211f20;
    }
  `,
}));

const EditClientForm = () => {
  const { styles } = useStyle();

  return (
    <div className="edit-form">
      <Form className={styles.customForm} layout="vertical">
        <h2>Edit Client</h2>
        <br />
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Contact" name="contact">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phone" name="phone">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="City" name="city">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="State" name="state">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Zip" name="zip">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Button className="ant-btn-cancel" block>
              Cancel
            </Button>
          </Col>
          <Col span={12}>
            <Button className="ant-btn-save" block>
              Save Client
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EditClientForm;
