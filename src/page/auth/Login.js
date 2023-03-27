import React from 'react';
import {
  Switch,
  Card,
  Form,
  Input,
  Row,
  Col,
  Select,
  Divider,
  Button,
  InputNumber,
} from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
const { Option } = Select;

function Login() {
  const [form] = Form.useForm();
  const navigate = useHistory()

  const handleLogin = values => {
    if(values.password === '123456'){
         navigate.push("/dashboard")
    }
  };

  const requiredFieldRule = [{ required: true, message: 'Required Field' }];

  const ownerArray = [
    {
      id: 1,
      value: 'John Nash',
    },
    {
      id: 2,
      value: 'Leonhard Euler',
    },
    {
      id: 3,
      value: 'Alan Turing',
    },
  ];

  const categoryArray = [
    {
      id: 1,
      value: 'Clothing',
    },
    {
      id: 2,
      value: 'Jewelery',
    },
    {
      id: 3,
      value: 'Accessory',
    },
  ];

  return (
    <Card title="Login" loading={false}>
      <Row justify="center">
        <Col span={12}>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            form={form}
            name="product-form"
            onFinish={handleLogin}
          >
            <Form.Item label="Email Address" name="email" rules={requiredFieldRule}>
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={requiredFieldRule}>
              <Input type='password' />
            </Form.Item>
            
            
            <Form.Item
              label="Stay Logged In"
              name="active"
              valuePropName="checked"
              initialValue={false}
            >
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </Form.Item>
            <Divider />
            <Row justify="right" style={{float:'right'}}>
              <Button type="primary" htmlType="submit">
                Login Now
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

export default Login;
