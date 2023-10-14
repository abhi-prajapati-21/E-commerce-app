"use client";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import "./auth.css";
import React, { useState } from "react";

const page = () => {
  const [isSignup, setIsSignup] = useState(false);

  const authSubmitHandler = () => {};

  const iconStyle = {
    color: "grey",
    fontSize: "1.3rem",
    padding: "0px 9px 0 0",
  };

//   const conditionalLine = () => {
//     isSignup ? (
// ;
//     ): (

//     );
//   }

  return (
    <div className="auth-container flex">
      <div className="auth-form-wrapper flex">
        <Form
          name="auth-form"
          className="auth-form flex"
          onFinish={authSubmitHandler}
        >
          {
            isSignup && 
            <Form.Item
            name="name"
            rules={[{ required: true, message: "name is required" }]}
            className="inputs"
          >
            <Input
              type="text"
              placeholder="Enter Your Name"
              prefix={<UserOutlined style={iconStyle} />}
            />
          </Form.Item>
          }
          <Form.Item
            name="email"
            rules={[{ required: true, message: "email is required" }]}
            className="inputs"
          >
            <Input
              type="text"
              placeholder="Enter Email"
              prefix={<MailOutlined style={iconStyle} />}
            />
          </Form.Item>
          <Form.Item name="password" className="inputs" rules={[{ required: true, message: "password is required" }]}>
            <Input.Password
              type="text"
              placeholder="Enter Your Password"
              prefix={<LockOutlined style={iconStyle} />}
            />
          </Form.Item>
          <button className="auth-btn" onClick={authSubmitHandler}>
            {isSignup ? 'Signup' : 'Login'}
          </button>
        </Form>
        <div className="sign-footer flex">
          <span className="footer-txt">{ isSignup ?
          'Already have an Account ?' : 'Dont have an Account ?'
          } <span onClick={() => setIsSignup(!isSignup)} className="txt-signup">{isSignup ? 'Login' : 'Signup'}</span></span>
        </div>
      </div>
    </div>
  );
};

export default page;
