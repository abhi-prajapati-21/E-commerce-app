"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import './auth.css'
import React, { useState } from "react";

const page = () => {
  const [isLogin, setIsLogin] = useState();

  const authSubmitHandler = () => {};

  const iconStyle = { fontSize: "1.3rem", padding: "0px 9px 0 0" };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <Form name="auth-form" onFinish={authSubmitHandler}>
          <Form.Item
            name="Email"
            rules={[{ required: true, message: "email is required" }]}
          >
            <Input
              type="text"
              placeholder="Enter Email"
              prefix={<UserOutlined style={iconStyle} />}
            />
          </Form.Item>
          <Form.Item name="Password">
            <Input
              type="text"
              placeholder="Enter Your Password"
              prefix={<LockOutlined style={iconStyle} />}
            />
          </Form.Item>
          <button onClick={authSubmitHandler}>Login</button>
        </Form>
      </div>
    </div>
  );
};

export default page;
