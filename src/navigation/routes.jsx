import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { Route, Switch, Redirect} from "react-router-dom";
import Tweets from "../screens/Tweets";
import Home from "../screens/Home";
import NotFound from "../screens/NotFound";
import Reddit from "../screens/Reddit";
import Login from "../screens/Login";
import Register from "../screens/Register";
import VideoIndexer from "../screens/VideoIndexer";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* if / , if logged in, then homepage else register */}
        <Route exact path="/">
          {this.props.userData.token ? (
            <Redirect to="/home" />
          ) : (
            <Redirect to="/home" />
          )}
        </Route>

        {/* route home => irrespective of logged in, always show Home Page */}
        <Route path="/home" exact component={Home} />

        {/* route login, if logged in=> Home else Login  */}
        <Route path="/login" exact>
          {this.props.userData.token ? <Redirect to="/tweets" /> : <Login />}
        </Route>

        {/* route register, if logged in=> Home else register  */}
        <Route path="/register" exact>
          {this.props.userData.token ? <Redirect to="/tweets" /> : <Register />}
        </Route>

            {/* route tweets, if logged in=> Tweets else login  */}
        <Route path="/tweets" exact>
          {this.props.userData.token ? <Tweets /> : <Redirect to="/login" />}
        </Route>

{/* route reddit, if logged in=> Reddit else login  */}
        <Route path="/reddit" exact>
          {this.props.userData.token ? <Reddit /> : <Redirect to="/login" />}
        </Route>

{/* route videoindexer, if logged in=> VideoIndexer else login  */}
        <Route path="/videoindexer" exact>
          {this.props.userData.token ? (
            <VideoIndexer />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>


        {/* any other url */}
        <Route component={NotFound}/>
        <Redirect to="/404" />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps)(Routes);
