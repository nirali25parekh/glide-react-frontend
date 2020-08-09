import React, { Component } from "react";
import { Card } from "antd";
import { Avatar, Popover } from "antd";

const positiveStyle = {
  // backgroundColor:'green',
  backgroundColor: "rgba(0,255,0,0.4)",
  display: "flex",
  padding: 10,

  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  flex: 0.5,
};

const negativeStyle = {
  backgroundColor: "rgba(255,0,0,0.4)",
  display: "flex",
  padding: 10,

  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  flex: 0.5,
};

const neutralStyle = {
  backgroundColor: "rgba(255,255,0,0.4)",

  display: "flex",
  padding: 10,

  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  flex: 0.5,
};

export class RedditItem extends Component {
  popoverContent = (
    <div>
      <p>{this.props.item.user.description}</p>
    </div>
  );

  render() {
    return (
      <div style={{ width: "90%", flexDirection: "row", display: "flex" }}>
        {/* user part */}
        <Popover content={this.popoverContent} title={this.props.item.user.name}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <Avatar
              shape="circle"
              size={50}
              style={{ display: "flex", margin: 4 }}
              src={this.props.item.user.profile_pic}
            />
            <b> {this.props.item.user.name} </b>
            <h5> @{this.props.item.user.screen_name}</h5>
          </div>
        </Popover>

        {/* tweet part */}
        <p style={{ display: "flex", flex: 3, margin: 20 }}>
          {this.props.item.tweet}
        </p>

        {/* sentiment part */}
        <div
          style={
            this.props.item.sentiment === "positive"
              ? positiveStyle
              : this.props.item.sentiment === "negative"
              ? negativeStyle
              : neutralStyle
          }
        >
          <h3 style={{ textAlign: "center", fontSize: 20 }}>
            {this.props.item.sentiment}
          </h3>
        </div>
      </div>
    );
  }
}

export default RedditItem;
