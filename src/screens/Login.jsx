import React, { Component } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Space,
  Spin,
  Alert,
} from "antd";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser, loginUserFailed } from "../redux";

const { Text, Link, Title } = Typography;
const { Header, Content, Footer } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export class Login extends Component {

  onFinish = (values) => {
    // console.log('values', values)
    const { email, password} = values;
      this.props.loginUser(
        email,
        password,
      );
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  render() {
    return (
      <Content
        className="site-layout"
        style={{ padding: "0 50px", paddingTop: 64, minHeight: 600 , alignItems:'center'}}
      >
        <Title>Login</Title>

        <Form
          {...layout}
          name="basic"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          {/* Email and password */}

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          {this.props.userData.loading ? (
            <Spin size="large" />
          ) : (
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          )}
          {this.props.userData.error ? (
            <Alert
              message="Error"
              description={this.props.userData.error}
              type="error"
            />
          ) : (<React.Fragment/>
          )}
        </Form>

        <Text type="secondary"> Don't have an account? </Text>
        <NavLink to="/register">
          Register Instead
        </NavLink>
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => dispatch(loginUser( email, password)),
    loginUserFailed: (error) => dispatch(loginUserFailed(error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

