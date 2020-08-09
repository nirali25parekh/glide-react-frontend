import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, List } from "antd";
import TweetItem from "../components/TweetItem";
const { Header, Content, Footer } = Layout;


export class TweetsList extends Component {

  render() {
    return (
      <List
        size="large"
        bordered
        dataSource={this.props.tweets.response}
        renderItem={(item) => (
          <List.Item style={{textAlign:'start'}} >
            <TweetItem item={item} />
          </List.Item>
        )}
      />
    );
  }
}

export default TweetsList;
