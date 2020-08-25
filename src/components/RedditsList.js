import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, List, Card } from "antd";
import RedditItem from "../components/RedditItem";
const { Header, Content, Footer } = Layout;

export class RedditsList extends Component {

  
  state={
    columnNo: 5,
  }
  componentDidMount() {
    console.log(window.innerWidth , this.state.columnNo)
    if (window.innerWidth < 400){
      this.setState({columnNo: 1})
    } else if (window.innerWidth < 800){
      this.setState({columnNo: 2})
    } else if (window.innerWidth < 1000){
      this.setState({columnNo: 4})
    } else {
      this.setState({columnNo: 5})
    }
  }

  render() {
    return (
      <List
        size="small"
        bordered
        grid={{ gutter: 0, column: this.state.columnNo }}
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
