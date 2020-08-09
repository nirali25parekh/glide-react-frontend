import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";

import { Input, Spin, Alert } from "antd";
import TweetsList from "../components/TweetsList";
import { connect } from "react-redux";
import { fetchTweets } from "../redux";

const { Search } = Input;
const { Header, Content, Footer } = Layout;

const DEMO = {
  "response": [
    {
      "cleaned_tweet": "RT It is Friday August 7 2020 One citizen I call for the removal from office by any leg…",
      "sentiment": "neutral",
      "tweet": "RT @readyreaderone1: @BoycottUtah @realDonaldTrump It is Friday, August 7, 2020. One citizen, I call for the removal from office by any leg…",
      "user": {
        "description": "#resist #strongertogether #FBR Proud liberal. Animal rights. Human rights. No lists",
        "name": "Pam",
        "profile_pic": "https://pbs.twimg.com/profile_images/2115166656/IMG_0940_normal.jpeg",
        "screen_name": "psch1"
      }
    },
    {
      "cleaned_tweet": "RT It is Friday August 7 2020 One citizen I call for the removal from office by any leg…",
      "sentiment": "neutral",
      "tweet": "RT @CNN: US President Donald Trump is desperately hoping to turn a Covid-19 vaccine, for which the entire world is longing, into his Octobe…",
      "user": {
        "description": "Vote Blue",
        "name": "Roger K",
        "profile_pic": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
        "screen_name": "jrbkjrbk"
      }
    },
    {
      "cleaned_tweet": "RT It is Friday August 7 2020 One citizen I call for the removal from office by any leg…",
      "sentiment": "neutral",
      "tweet": "RT @ProjectLincoln: When was the last time Donald Trump apologized for anything?",
      "user": {
        "description": "Writer, Trainer, Educator, PhD.,\"Deeply\" Concerned Citizen, Book, Movie, Scrabble, NYTimes Junkie- trying to be a critical thinker.",
        "name": "Elizabeth Tierney",
        "profile_pic": "https://pbs.twimg.com/profile_images/882306838275825664/VdXruIa6_normal.jpg",
        "screen_name": "eptierney"
      }
    },
    {
      "cleaned_tweet": "RT It is Friday August 7 2020 One citizen I call for the removal from office by any leg…",
      "sentiment": "neutral",
      "tweet": "RT @G_TheOriginal: \"I will fight for you with every breath in my body and I will never, ever let you down.\"\n\n~ Donald J. Trump\n\n👉 Follow 🇺🇸…",
      "user": {
        "description": "Love the Lord, country, family & friends.  Fan of President Reagan. Still an 80s kid. Enemy of the cabal!  \n\n\n\n\n'What we do in life....echoes in eternity'",
        "name": "LeftistsAreLunatics",
        "profile_pic": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
        "screen_name": "republic_strong"
      }
    },
    {
      "cleaned_tweet": "RT It is Friday August 7 2020 One citizen I call for the removal from office by any leg…",
      "sentiment": "neutral",
      "tweet": "@SenThomTillis The pandemic impacts were magnified by the inept action of Donald Trump, who throughout these last six months, made us the leader in COVID impact. You have really stood with him that whole time, saying nothing.  No amount of hints at your leadership make that devotion go away.",
      "user": {
        "description": "CeH, Project Management Professional,\nCertified Information Security System Engineer",
        "name": "David Murphy",
        "profile_pic": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
        "screen_name": "dmurphy1948"
      }
    },
    {
      "cleaned_tweet": "RT It is Friday August 7 2020 One citizen I call for the removal from office by any leg…",
      "sentiment": "neutral",
      "tweet": "RT @donwinslow: Dear Democrats,\n\nStop running away from Immigration and the Border.\n\nCharge into it and EXPOSE what Donald Trump has done t…",
      "user": {
        "description": "Michael O'Leary uses traditional marketing discipline and emerging technologies to build brands, deliver dynamic business results and increase profitability.",
        "name": "Michael O'Leary",
        "profile_pic": "https://pbs.twimg.com/profile_images/3194798565/aa41617af132af6e4e98a94fd6fa8478_normal.jpeg",
        "screen_name": "OLeary130"
      }
    },
    {
      "cleaned_tweet": "RT It is Friday August 7 2020 One citizen I call for the removal from office by any leg…",
      "sentiment": "neutral",
      "tweet": "Donald Trump, you are a #crooked piece of shit. @realDonaldTrump #resist",
      "user": {
        "description": "Reminding President Trump that he's an absolute piece of shit.  Every 6 hours.",
        "name": "Trump POS Bot",
        "profile_pic": "https://pbs.twimg.com/profile_images/897833173119365120/KO7owUWF_normal.jpg",
        "screen_name": "TrumpPOSBot"
      }
    },
    {
      "cleaned_tweet": "RT It is Friday August 7 2020 One citizen I call for the removal from office by any leg…",
      "sentiment": "neutral",
      "tweet": "RT @ProjectLincoln: When was the last time Donald Trump apologized for anything?",
      "user": {
        "description": "Green🌱Vegan🌿#FBPEGlobal✝️☪️✡🕉☯️ If you attack religion, make sure your own delusion is more valid ☢☣🚮🚻",
        "name": "3.5% Boffer Dimitrov🌱🐶#BOF#BOF",
        "profile_pic": "https://pbs.twimg.com/profile_images/1244516436665647105/yIeBXxHo_normal.jpg",
        "screen_name": "michal_dimitrov"
      }
    },
    {
      "cleaned_tweet": "RT It is Friday August 7 2020 One citizen I call for the removal from office by any leg…",
      "sentiment": "neutral",
      "tweet": "RT @ProjectLincoln: If your mail is late, blame Donald Trump.",
      "user": {
        "description": "🌊🇺🇸🌊#Resist #TrumpCrimeFamily #TraitorTrump #Follow4FollowUnFollow4UnFollow #NotMyPOTUS45 #FBR #Impeach45 #PHUCKDJTrumpAndTHOTUS NO DMS/NO TRUMPTARDS",
        "name": "RESIST LYING CON ARTIST 45 NOW🌊🇺🇸🌊",
        "profile_pic": "https://pbs.twimg.com/profile_images/1060161317355479041/p-TgFbJq_normal.jpg",
        "screen_name": "DClldnsrx"
      }
    },
    {
      "cleaned_tweet": "RT It is Friday August 7 2020 One citizen I call for the removal from office by any leg…",
      "sentiment": "neutral",
      "tweet": "RT @THE_OG_G_MA: @BoycottUtah @realDonaldTrump It is Friday, August 7, 2020. One citizen, I call for the removal from office by any legal m…",
      "user": {
        "description": "#resist #strongertogether #FBR Proud liberal. Animal rights. Human rights. No lists",
        "name": "Pam",
        "profile_pic": "https://pbs.twimg.com/profile_images/2115166656/IMG_0940_normal.jpeg",
        "screen_name": "psch1"
      }
    }
  ]
}

export class Tweets extends Component {

  componentDidMount(){
    // console.log(this.props.userData.sector)
    var query = ""
    for (let i =0; i<this.props.userData.sector.length;i++ ){
      query = query.concat(this.props.userData.sector[i] ,' OR ')
    }
    query = query.slice(0, -3)
    // console.log('query', query)
    this.props.fetchTweets(query)
  }

  render() {
    // console.log('tweets',this.props.tweetData.tweets)
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
          onSearch={(value) => this.props.fetchTweets(value)}
        />

        {/* <TweetsList tweets={DEMO}/> */}
        {this.props.tweetData.loading ? 
        (
          <Spin size="large" />
        ) : this.props.tweetData.error ? (
          <Alert message="Error" description={this.props.tweetData.error} type="error" />
        ) : (
          <TweetsList tweets={this.props.tweetData.tweets} />
        )}
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tweetData: state.tweet,
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTweets: (keyword) => dispatch(fetchTweets(keyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);
