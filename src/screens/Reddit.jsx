import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { connect } from "react-redux";
import { fetchReddits } from "../redux";
import { Input, Spin, Alert } from "antd";
import RedditsList from "../components/RedditsList";

const { Search } = Input;
const { Header, Content, Footer } = Layout;

export class Reddit extends Component {
  componentDidMount() {
    var query = "";
    for (let i = 0; i < this.props.userData.sector.length; i++) {
      query = query.concat(this.props.userData.sector[i], " ");
    }
    query = query.slice(0, -1);
    this.props.fetchReddits(query);
  }

  render() {
    return (
      <Content
        className="site-layout"
        style={{ padding: "0 50px", paddingTop: 64, minHeight: 400 }}
      >
        <Search
          style={{ marginTop: 20 }}
          placeholder="Search by keyword"
          enterButton="Search"
          size="large"
          onSearch={(value) => this.props.fetchReddits(value)}
        />
        {this.props.redditData.loading ? (
          <Spin size="large" />
        ) : this.props.redditData.error ? (
          <Alert
            message="Error"
            description={this.props.redditData.error}
            type="error"
          />
        ) : (
          <RedditsList reddits={this.props.redditData.reddits} />
        )}
      </Content>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    redditData: state.reddit,
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReddits: (sector) => dispatch(fetchReddits(sector)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reddit);
