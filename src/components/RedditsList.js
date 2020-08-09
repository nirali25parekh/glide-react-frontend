import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, List, Card } from "antd";
import RedditItem from "../components/RedditItem";
const { Header, Content, Footer } = Layout;

export class RedditsList extends Component {

  componentDidMount() {
    console.log(this.props.reddits)
  }

  render() {
    return (
      <List
        size="large"
        bordered
        // style={{marginRight: 100}}
        grid={{ gutter: 0, column: 5 }}
        dataSource={this.props.reddits}
        renderItem={(item) => (
          <List.Item>
            <RedditItem item={item} />
          </List.Item>
        )}
      />
    );
  }
}

export default RedditsList;
