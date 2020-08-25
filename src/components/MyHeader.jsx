import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink, withRouter } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import "../App.css";
import logo from "../images/logo-yellow.png";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function MyHeader(props) {
  return (
    <div style={{ overflow: "hidden", height: "100%", width: "100%", }}>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          flexDirection: "row",
          display: "flex",
          overflowX: "visible",
          overflowY:"scroll",
          boxSizing: "content-box", // to avoid right scrollbar
        }}
      >
        <div className="logo" style={{ height: 70, width: 70, marginRight: 5 }}>
          <Avatar shape="square" size={50} src={logo} />
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[props.location.pathname]}
          style={{paddingRight: '300px'}}
        >
          <Menu.Item key={"/home"}>
            <NavLink to="/home">Home</NavLink>
          </Menu.Item>

          <Menu.Item key={"/tweets"}>
            <NavLink to="/tweets">Tweets</NavLink>
          </Menu.Item>

          <Menu.Item key={"/reddit"}>
            <NavLink to="/reddit">Reddit</NavLink>
          </Menu.Item>

          <Menu.Item key={"/videoindexer"}>
            <NavLink to="/videoindexer">Video Indexer</NavLink>
          </Menu.Item>

          {props.userData.userId || props.userData.token ? (
            <React.Fragment />
          ) : (
            <Menu.Item key={"/login"}>
              <NavLink to="/login">Authenticate</NavLink>
            </Menu.Item>
          )}
        </Menu>
      </Header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps)(withRouter(MyHeader));
