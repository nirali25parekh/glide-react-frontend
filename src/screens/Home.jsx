import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Button, Divider } from "antd";
import bgImage1 from "../images/bgImage1.jpg";
import { Route, Switch, Redirect, Link } from "react-router-dom";


const { Header, Content, Footer } = Layout;

const pStyle = {
  color: "#FEEEEA",
  fontWeight: 5,
  fontFamily: "verdana",
  fontSize: 18,
};

export class Home extends Component {
  render() {
    return (
      <Content
        className="site-layout"
        style={{ padding: "0 0px", paddingTop: 64, minHeight: 400 }}
      >
        <div
          style={{
            backgroundImage: `url(${bgImage1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "140vh",
            display: "flex",
            padding: 30,
          }}
        >
          <div
            style={{
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "120vh",
              padding:20,
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <h1
              style={{
                color: "#FEEEEA",
                marginTop: 50,
                fontFamily: "verdana",
                fontSize: 30,
                fontWeight: "bolder",
              }}
            >
              SMART MARKET RESEARCH FOR CONTENT CREATORS </h1>

            <p style={pStyle}>
              Just describe your niche and Glide will find relevant trending
              content from various social media, categorized by topic.
            </p>
            <p style={pStyle}>
              See all the relevant insights about your video and implement
              effective methods of online marketing.
            </p>
            <p style={pStyle}> Reach a broader audience now with Glide.</p>

            <Link to="/login">
            <Button
              type="primary"
              style={{
                marginTop: 30,
                fontSize: 17,
                padding: 10,
                height: 60,
                width: 200,
                borderRadius: 20,
              }}
            >
              GET STARTED !
            </Button>
            </Link>
            
          </div>
        </div>
      </Content>
    );
  }
}

export default Home;
