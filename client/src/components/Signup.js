import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import PageNavBar from './PageNavbar';

const Signup = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <PageNavBar active="signup" />
      <div >
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 6,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" style={{
              alignContent: "left",
              color: "white",
              backgroundColor: "#acb6e5",
              fontWeight: "bold",
            }}>
            Submit
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" style={{
              alignContent: "left",
              color: "white",
              backgroundColor: "gray",
              fontWeight: "bold",
            }}>
            Cancel
          </Button>
        </Form.Item>

      </Form>
      </div>
    </div>
    
  );
};
export default Signup;
