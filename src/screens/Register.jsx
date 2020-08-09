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
import { registerUser, registerUserFailed } from "../redux";

const { Text, Link, Title } = Typography;
const { Header, Content, Footer } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export class Register extends Component {
  onFinish = (values) => {
    const { name, email, password, sector } = values;
      this.props.registerUser(
        name,
        email,
        password,
        sector
      );
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  onChange(checkedValues) {
    // console.log("checked = ", checkedValues);
  }
  render() {
    return (
      <Content
        className="site-layout"
        style={{
          padding: "0 100px",
          paddingTop: 64,
          minHeight: 600,
          alignSelf: "center",
        }}
      >
        <Title>Register</Title>

        <Form
          {...layout}
          name="basic"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          {/* name, email and password */}

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

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

          {/* now sectors */}

          <Form.Item
            label="I'm interested in:"
            name="sector"
            rules={[
              {
                required: true,
                message: "Please select atleast one checkbox!",
              },
            ]}
          >
            <Checkbox.Group style={{ width: "100%" }} onChange={this.onChange}>
              <Row gutter={[24, 10]}>
                <Col flex={1} span={12} style={{ textAlign: "left" }}>
                  <Checkbox value="Technology">Technology</Checkbox>
                </Col>
                <Col flex={1} span={12} style={{ textAlign: "left" }}>
                  <Checkbox value="Politics">Politics</Checkbox>
                </Col>
                </Row>

                <Row gutter={[24, 10]}>
                <Col flex={1} span={12} style={{ textAlign: "left" }}>
                  <Checkbox value="Entertainment">Entertainment</Checkbox>
                </Col>
                <Col flex={1} span={12} style={{ textAlign: "left" }}>
                  <Checkbox value="Fashion">Fashion</Checkbox>
                </Col>
              </Row>

              <Row gutter={[24, 10]}>
                <Col flex={1} span={12} style={{ textAlign: "left" }}>
                  <Checkbox value="Science">Science</Checkbox>
                </Col>

                <Col flex={1} span={12} style={{ textAlign: "left" }}>
                  <Checkbox value="Business">Business</Checkbox>
                </Col>
                </Row>

                <Row gutter={[24, 10]}>
                <Col flex={2} span={12} style={{ textAlign: "left" }}>
                  <Checkbox value="Finance">Finance</Checkbox>
                </Col>
                <Col flex={2} span={12} style={{ textAlign: "left" }}>
                  <Checkbox value="Health">Health</Checkbox>
                </Col>
              </Row>

              <Row gutter={[24, 10]}>
                <Col flex={1} span={12} style={{ textAlign: "left" }}>
                  <Checkbox value="Education">Education</Checkbox>
                </Col>
                <Col flex={1} span={12} style={{ textAlign: "left" }}>
                  <Checkbox value="International">International</Checkbox>
                </Col>
              </Row>

            </Checkbox.Group>
          </Form.Item>
          {this.props.userData.loading ? (
            <Spin size="large" />
          ) : (
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Register
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

        <Text type="secondary"> Already have an account? </Text>
        <NavLink to="/login" href="/login">
          Login Instead
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
    registerUser: (name, email, password, sector) =>
      dispatch(registerUser(name, email, password, sector)),
    registerUserFailed: (error) => dispatch(registerUserFailed(error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
