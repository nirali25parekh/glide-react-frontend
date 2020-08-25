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
  minWidth:'20%',
};

const negativeStyle = {
  backgroundColor: "rgba(255,0,0,0.4)",
  display: "flex",
  padding: 10,

  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  minWidth:'20%',
};

const neutralStyle = {
  backgroundColor: "rgba(255,255,0,0.4)",

  display: "flex",
  padding: 10,

  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  minWidth:'20%',
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
              minWidth: '20%',
            }}
          >
            <Avatar
              shape="circle"
              size={50}
              style={{ display: "flex", margin: 4 }}
              src={this.props.item.user.profile_pic}
            />
            <b> {this.props.item.user.name} </b>
            <h5 style={{ wordBreak:'break-all'}}> @{this.props.item.user.screen_name}</h5>
          </div>
        </Popover>

        {/* tweet part */}
        <p style={{ display: "flex", minWidth: '50%', margin: 20, wordBreak:'break-all' }}>
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
          <h3 style={{ textAlign: "center", fontSize: 20, whiteSpace:'pre-wrap' }}>
            {this.props.item.sentiment === 'negative' ? ':(' : this.props.item.sentiment === 'positive' ? ':)' : ":|" }
          </h3>
        </div>
      </div>
    );
  }
}

export default RedditItem;
