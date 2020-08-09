import React, { Component } from "react";
import { Card } from "antd";
import { Avatar } from "antd";

const subredditLinkStyle = {
  color: "blue",
  wordBreak:'break-word',
}

export class RedditItem extends Component {
  render() {
    return (
      <Card title={this.props.item[0]} style={{ width: 210, padding: 0 }}>
        <Avatar
          shape="square"
          size={80}
          src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
        />
        <p style={{fontWeight: 'bold', marginTop: 20}}>Subreddit : </p>
        <p style={subredditLinkStyle}> {this.props.item[3]}</p>
        <p style={{fontWeight: 'bold'}}> Created At: </p> <p> {this.props.item[5]}</p>
      </Card>
    );
  }
}

export default RedditItem;
