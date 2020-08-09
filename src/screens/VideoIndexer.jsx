import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { connect } from "react-redux";
import { getInsights } from "../redux";
import { Input, Spin, Alert } from "antd";
import { Upload, message, Button, List } from "antd";
import { UploadOutlined } from "@ant-design/icons"; // for upload button
import {
  UserOutlined,
  IdcardFilled,
  IeCircleFilled,
  FileWordFilled,
  MehFilled,
  SmileFilled,
  MessageFilled,
  VideoCameraFilled,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const { Search } = Input;

const DEMO = {
  partition: null,
  description: null,
  privacyMode: "Private",
  state: "Processed",
  accountId: "8c8b7b2a-585d-493d-8d09-0c498f467df6",
  id: "64ffdd4c11",
  name: "y2mate.com - bill_gates_in_83_seconds_sd__8HqUtuU_240p.mp4",
  userName: "Nirali Parekh",
  created: "2020-08-06T07:25:12.5085728+00:00",
  isOwned: true,
  isEditable: true,
  isBase: true,
  durationInSeconds: 87,
  summarizedInsights: {
    name: "y2mate.com - bill_gates_in_83_seconds_sd__8HqUtuU_240p.mp4",
    id: "64ffdd4c11",
    privacyMode: "Private",
    duration: {
      time: "0:01:27.424",
      seconds: 87.4,
    },
    thumbnailVideoId: "64ffdd4c11",
    thumbnailId: "75842d87-3c29-45a2-a00c-31b331d82e18",
    faces: [
      {
        videoId: "64ffdd4c11",
        referenceId: "0d47c987-0042-5576-15e8-97af601614fa",
        referenceType: "Bing",
        confidence: 0.9761,
        description:
          "William Henry Gates III is an American business magnate, software developer, investor, and philanthropist. He is best known as the co-founder of Microsoft Corporation. During his career at Microsoft, Gates held the positions of chairman, chief executive officer, president and chief software architect, while …",
        title: "Founder of Microsoft",
        thumbnailId: "349dcae1-4831-4ac9-b3c3-8e9936331864",
        seenDuration: 62.4,
        seenDurationRatio: 0.7138,
        id: 1496,
        name: "Bill Gates",
        appearances: [
          {
            startTime: "0:00:04.738",
            endTime: "0:00:14.414",
            startSeconds: 4.7,
            endSeconds: 14.4,
          },
          {
            startTime: "0:00:26.493",
            endTime: "0:01:19.179",
            startSeconds: 26.5,
            endSeconds: 79.2,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        referenceId: "a77fb52f-e1a5-59a3-b102-1cb1a0cefc0b",
        referenceType: "Bing",
        confidence: 0.9999,
        description:
          "Melinda Ann Gates DBE is an American philanthropist and a former general manager at Microsoft. In 2000, she co-founded the Bill & Melinda Gates Foundation with her husband Bill Gates, the world's largest private charitable organization. Ms Melinda Gates has consistently been ranked as one of the …",
        title: "Philanthropist",
        thumbnailId: "895c59c2-06f7-44cb-be60-6a3a1d95a4c5",
        seenDuration: 8.8,
        seenDurationRatio: 0.1007,
        id: 1979,
        name: "Melinda Gates",
        appearances: [
          {
            startTime: "0:01:07.935",
            endTime: "0:01:16.71",
            startSeconds: 67.9,
            endSeconds: 76.7,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        referenceId: "79464325-4ebf-5477-3c6f-975a3cb4d4a4",
        referenceType: "Bing",
        confidence: 1,
        description:
          "Michael Rubens Bloomberg is an American politician, businessman, and author. He is the co-founder, CEO, and majority owner of Bloomberg L.P. He was mayor of New York City from 2002 to 2013. He is a candidate in the Democratic Party primaries for the 2020 United States presidential …",
        title: "Former Mayor of New York City",
        thumbnailId: "439fbdc3-f40e-42bb-8861-ac6f9c1560b1",
        seenDuration: 1.9,
        seenDurationRatio: 0.0217,
        id: 1960,
        name: "Michael Bloomberg",
        appearances: [
          {
            startTime: "0:01:11.738",
            endTime: "0:01:13.64",
            startSeconds: 71.7,
            endSeconds: 73.6,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        referenceId: "f3774cb6-9647-541c-e99c-99949e3a2142",
        referenceType: "Bing",
        confidence: 0.9971,
        description:
          "Warren Edward Buffett is an American investor, business tycoon, and philanthropist, who is the chairman and CEO of Berkshire Hathaway. He is considered one of the most successful investors in the world and has a net worth of US$71.8 billion as of July 2020, making him the fourth-wealthiest …",
        title: "Chairman and CEO of Berkshire Hathaway",
        thumbnailId: "b5783c02-ce6a-450a-a65e-f554a0e76ffc",
        seenDuration: 1.8,
        seenDurationRatio: 0.0206,
        id: 1921,
        name: "Warren Buffett",
        appearances: [
          {
            startTime: "0:01:09.937",
            endTime: "0:01:11.738",
            startSeconds: 69.9,
            endSeconds: 71.7,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "182d6f42-f9bc-40a7-9c7b-bffba494ad84",
        seenDuration: 6.6,
        seenDurationRatio: 0.0755,
        id: 1712,
        name: "Unknown #5",
        appearances: [
          {
            startTime: "0:00:59.526",
            endTime: "0:01:06.066",
            startSeconds: 59.5,
            endSeconds: 66.1,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "edd86114-e156-40af-8335-b6900f55671a",
        seenDuration: 5.9,
        seenDurationRatio: 0.0675,
        id: 2028,
        name: "Unknown #9",
        appearances: [
          {
            startTime: "0:01:09.603",
            endTime: "0:01:15.475",
            startSeconds: 69.6,
            endSeconds: 75.5,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "7e67f57d-8383-4cf1-a201-5c060e21d35a",
        seenDuration: 5.7,
        seenDurationRatio: 0.0652,
        id: 1228,
        name: "Unknown #4",
        appearances: [
          {
            startTime: "0:00:23.09",
            endTime: "0:00:25.859",
            startSeconds: 23.1,
            endSeconds: 25.9,
          },
          {
            startTime: "0:01:00.46",
            endTime: "0:01:03.396",
            startSeconds: 60.5,
            endSeconds: 63.4,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "bc8606bf-c1d2-4ec1-9ba1-3cb8bc185f4f",
        seenDuration: 2.8,
        seenDurationRatio: 0.032,
        id: 1229,
        name: "Unknown #3",
        appearances: [
          {
            startTime: "0:00:23.09",
            endTime: "0:00:25.859",
            startSeconds: 23.1,
            endSeconds: 25.9,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "ad77f6cf-d883-4563-807c-19b20dcf5b14",
        seenDuration: 2.8,
        seenDurationRatio: 0.032,
        id: 1226,
        name: "Unknown #1",
        appearances: [
          {
            startTime: "0:00:23.09",
            endTime: "0:00:25.859",
            startSeconds: 23.1,
            endSeconds: 25.9,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "cc63943b-e163-4660-8031-6e01445c0244",
        seenDuration: 2.8,
        seenDurationRatio: 0.032,
        id: 1227,
        name: "Unknown #2",
        appearances: [
          {
            startTime: "0:00:23.09",
            endTime: "0:00:25.859",
            startSeconds: 23.1,
            endSeconds: 25.9,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "55922db3-17a9-45fe-980a-4fa883e13ae9",
        seenDuration: 2.2,
        seenDurationRatio: 0.0252,
        id: 1186,
        name: "Unknown #6",
        appearances: [
          {
            startTime: "0:00:18.552",
            endTime: "0:00:20.754",
            startSeconds: 18.6,
            endSeconds: 20.8,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "5958f8b1-e8f8-4f72-b323-3ca24f109ef1",
        seenDuration: 2,
        seenDurationRatio: 0.0229,
        id: 2123,
        name: "Unknown #7",
        appearances: [
          {
            startTime: "0:01:17.611",
            endTime: "0:01:19.646",
            startSeconds: 77.6,
            endSeconds: 79.6,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "afa4c937-9bb6-4103-aeec-b5bd2840c81f",
        seenDuration: 1.8,
        seenDurationRatio: 0.0206,
        id: 1922,
        name: "Unknown #8",
        appearances: [
          {
            startTime: "0:01:09.937",
            endTime: "0:01:11.738",
            startSeconds: 69.9,
            endSeconds: 71.7,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "7c6c0107-5528-4829-b7d5-9644e1026b5b",
        seenDuration: 1.7,
        seenDurationRatio: 0.0194,
        id: 1037,
        name: "Unknown #10",
        appearances: [
          {
            startTime: "0:00:10.143",
            endTime: "0:00:11.778",
            startSeconds: 10.1,
            endSeconds: 11.8,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "c490457a-a758-4cd8-9432-24cfbf2ba404",
        seenDuration: 1.5,
        seenDurationRatio: 0.0172,
        id: 1756,
        name: "Unknown #11",
        appearances: [
          {
            startTime: "0:01:01.862",
            endTime: "0:01:03.396",
            startSeconds: 61.9,
            endSeconds: 63.4,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "4ab77a0f-6f9d-4572-8ea1-986774e94c7f",
        seenDuration: 1.4,
        seenDurationRatio: 0.016,
        id: 2039,
        name: "Unknown #13",
        appearances: [
          {
            startTime: "0:01:13.874",
            endTime: "0:01:15.308",
            startSeconds: 73.9,
            endSeconds: 75.3,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "16409979-14b1-4192-aebd-e83858a90bfe",
        seenDuration: 1.2,
        seenDurationRatio: 0.0137,
        id: 1718,
        name: "Unknown #14",
        appearances: [
          {
            startTime: "0:01:00.594",
            endTime: "0:01:01.828",
            startSeconds: 60.6,
            endSeconds: 61.8,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "857a7b0d-22f2-4b8b-bff5-75ba66240f54",
        seenDuration: 1.2,
        seenDurationRatio: 0.0137,
        id: 1800,
        name: "Unknown #16",
        appearances: [
          {
            startTime: "0:01:04.865",
            endTime: "0:01:06.066",
            startSeconds: 64.9,
            endSeconds: 66.1,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "7c0c0fc9-c00f-454e-bb8b-409128c57ff3",
        seenDuration: 1.2,
        seenDurationRatio: 0.0137,
        id: 1801,
        name: "Unknown #17",
        appearances: [
          {
            startTime: "0:01:04.865",
            endTime: "0:01:06.066",
            startSeconds: 64.9,
            endSeconds: 66.1,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "16ba3b45-c881-4874-84a0-de192352e24b",
        seenDuration: 1.2,
        seenDurationRatio: 0.0137,
        id: 1798,
        name: "Unknown #15",
        appearances: [
          {
            startTime: "0:01:04.865",
            endTime: "0:01:06.066",
            startSeconds: 64.9,
            endSeconds: 66.1,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "cf24de32-23b1-4d5f-ba73-2ac72e3e9a00",
        seenDuration: 1.1,
        seenDurationRatio: 0.0126,
        id: 1152,
        name: "Unknown #18",
        appearances: [
          {
            startTime: "0:00:18.552",
            endTime: "0:00:19.653",
            startSeconds: 18.6,
            endSeconds: 19.7,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "4b36aa2d-baba-4b8f-a0af-fae3edd3c5df",
        seenDuration: 0.7,
        seenDurationRatio: 0.008,
        id: 1103,
        name: "Unknown #19",
        appearances: [
          {
            startTime: "0:00:11.144",
            endTime: "0:00:11.778",
            startSeconds: 11.1,
            endSeconds: 11.8,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "f2f2f897-d41a-4460-848c-e66942d2397a",
        seenDuration: 0.3,
        seenDurationRatio: 0.0034,
        id: 1126,
        name: "Unknown #20",
        appearances: [
          {
            startTime: "0:00:11.478",
            endTime: "0:00:11.778",
            startSeconds: 11.5,
            endSeconds: 11.8,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "5967173c-378d-4d8e-ac06-641dce5760ee",
        seenDuration: 0.1,
        seenDurationRatio: 0.0011,
        id: 1012,
        name: "Unknown #22",
        appearances: [
          {
            startTime: "0:00:06.74",
            endTime: "0:00:06.806",
            startSeconds: 6.7,
            endSeconds: 6.8,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "447736dd-a4ff-47af-88a5-c0f7f090981d",
        seenDuration: 0,
        seenDurationRatio: 0,
        id: 1917,
        name: "Unknown #24",
        appearances: [
          {
            startTime: "0:01:09.603",
            endTime: "0:01:09.636",
            startSeconds: 69.6,
            endSeconds: 69.6,
          },
        ],
      },
      {
        videoId: "64ffdd4c11",
        confidence: 0,
        description: null,
        title: null,
        thumbnailId: "3b731218-ef65-45b3-918b-06bda159a3db",
        seenDuration: 0,
        seenDurationRatio: 0,
        id: 1549,
        name: "Unknown #23",
        appearances: [
          {
            startTime: "0:00:43.11",
            endTime: "0:00:43.143",
            startSeconds: 43.1,
            endSeconds: 43.1,
          },
        ],
      },
    ],
    keywords: [
      {
        isTranscript: true,
        id: 2,
        name: "bill gates",
        appearances: [
          {
            startTime: "0:00:03.27",
            endTime: "0:00:04.204",
            startSeconds: 3.3,
            endSeconds: 4.2,
          },
          {
            startTime: "0:00:12.58",
            endTime: "0:00:16.79",
            startSeconds: 12.6,
            endSeconds: 16.8,
          },
          {
            startTime: "0:00:22.39",
            endTime: "0:00:26.59",
            startSeconds: 22.4,
            endSeconds: 26.6,
          },
          {
            startTime: "0:00:42.58",
            endTime: "0:00:49.85",
            startSeconds: 42.6,
            endSeconds: 49.8,
          },
          {
            startTime: "0:01:10.16",
            endTime: "0:01:16.143",
            startSeconds: 70.2,
            endSeconds: 76.1,
          },
          {
            startTime: "0:01:19.94",
            endTime: "0:01:23.15",
            startSeconds: 79.9,
            endSeconds: 83.1,
          },
        ],
      },
      {
        isTranscript: true,
        id: 3,
        name: "gates",
        appearances: [
          {
            startTime: "0:00:03.27",
            endTime: "0:00:04.204",
            startSeconds: 3.3,
            endSeconds: 4.2,
          },
          {
            startTime: "0:00:12.58",
            endTime: "0:00:16.79",
            startSeconds: 12.6,
            endSeconds: 16.8,
          },
          {
            startTime: "0:01:19.94",
            endTime: "0:01:21.46",
            startSeconds: 79.9,
            endSeconds: 81.5,
          },
        ],
      },
      {
        isTranscript: true,
        id: 4,
        name: "world",
        appearances: [
          {
            startTime: "0:00:05.58",
            endTime: "0:00:12.58",
            startSeconds: 5.6,
            endSeconds: 12.6,
          },
          {
            startTime: "0:00:42.58",
            endTime: "0:00:49.85",
            startSeconds: 42.6,
            endSeconds: 49.8,
          },
          {
            startTime: "0:01:01.56",
            endTime: "0:01:06.32",
            startSeconds: 61.6,
            endSeconds: 66.3,
          },
        ],
      },
      {
        isTranscript: true,
        id: 5,
        name: "bill",
        appearances: [
          {
            startTime: "0:00:12.58",
            endTime: "0:00:16.79",
            startSeconds: 12.6,
            endSeconds: 16.8,
          },
          {
            startTime: "0:00:22.39",
            endTime: "0:00:26.59",
            startSeconds: 22.4,
            endSeconds: 26.6,
          },
          {
            startTime: "0:00:42.58",
            endTime: "0:00:49.85",
            startSeconds: 42.6,
            endSeconds: 49.8,
          },
          {
            startTime: "0:01:10.16",
            endTime: "0:01:16.143",
            startSeconds: 70.2,
            endSeconds: 76.1,
          },
          {
            startTime: "0:01:19.94",
            endTime: "0:01:23.15",
            startSeconds: 79.9,
            endSeconds: 83.1,
          },
        ],
      },
      {
        isTranscript: true,
        id: 6,
        name: "microsoft",
        appearances: [
          {
            startTime: "0:00:16.79",
            endTime: "0:00:22.422",
            startSeconds: 16.8,
            endSeconds: 22.4,
          },
          {
            startTime: "0:00:53.08",
            endTime: "0:00:59.14",
            startSeconds: 53.1,
            endSeconds: 59.1,
          },
        ],
      },
      {
        isTranscript: false,
        id: 1,
        name: "estimated net",
        appearances: [
          {
            startTime: "0:00:48.582",
            endTime: "0:00:49.516",
            startSeconds: 48.6,
            endSeconds: 49.5,
          },
        ],
      },
      {
        isTranscript: false,
        id: 7,
        name: "money",
        appearances: [
          {
            startTime: "0:00:00",
            endTime: "0:00:00.467",
            startSeconds: 0,
            endSeconds: 0.5,
          },
          {
            startTime: "0:00:36.92",
            endTime: "0:00:39.34",
            startSeconds: 36.9,
            endSeconds: 39.3,
          },
        ],
      },
      {
        isTranscript: false,
        id: 8,
        name: "conclusions",
        appearances: [
          {
            startTime: "0:00:31.298",
            endTime: "0:00:36.699",
            startSeconds: 31.3,
            endSeconds: 36.7,
          },
        ],
      },
      {
        isTranscript: false,
        id: 9,
        name: "order",
        appearances: [
          {
            startTime: "0:00:31.298",
            endTime: "0:00:36.699",
            startSeconds: 31.3,
            endSeconds: 36.7,
          },
        ],
      },
    ],
    sentiments: [
      {
        sentimentKey: "Neutral",
        seenDurationRatio: 0.9997,
        appearances: [
          {
            startTime: "0:00:00",
            endTime: "0:01:27.37",
            startSeconds: 0,
            endSeconds: 87.4,
          },
        ],
      },
      {
        sentimentKey: "Positive",
        seenDurationRatio: 0.0309,
        appearances: [
          {
            startTime: "0:01:06.32",
            endTime: "0:01:08.98",
            startSeconds: 66.3,
            endSeconds: 69,
          },
        ],
      },
    ],
    emotions: [
      {
        type: "Joy",
        seenDurationRatio: 0.0309,
        appearances: [
          {
            startTime: "0:01:06.32",
            endTime: "0:01:08.98",
            startSeconds: 66.3,
            endSeconds: 69,
          },
        ],
      },
    ],
    audioEffects: [],
    labels: [
      {
        id: 17,
        name: "person",
        appearances: [
          {
            startTime: "0:00:05.339",
            endTime: "0:01:20.08",
            startSeconds: 5.3,
            endSeconds: 80.1,
          },
        ],
      },
      {
        id: 18,
        name: "clothing",
        appearances: [
          {
            startTime: "0:00:05.339",
            endTime: "0:01:20.08",
            startSeconds: 5.3,
            endSeconds: 80.1,
          },
        ],
      },
      {
        id: 16,
        name: "human face",
        appearances: [
          {
            startTime: "0:00:05.339",
            endTime: "0:00:54.455",
            startSeconds: 5.3,
            endSeconds: 54.5,
          },
          {
            startTime: "0:00:58.725",
            endTime: "0:01:20.08",
            startSeconds: 58.7,
            endSeconds: 80.1,
          },
        ],
      },
      {
        id: 21,
        name: "man",
        appearances: [
          {
            startTime: "0:00:05.339",
            endTime: "0:00:14.949",
            startSeconds: 5.3,
            endSeconds: 14.9,
          },
          {
            startTime: "0:00:23.49",
            endTime: "0:00:57.658",
            startSeconds: 23.5,
            endSeconds: 57.7,
          },
          {
            startTime: "0:01:01.929",
            endTime: "0:01:17.945",
            startSeconds: 61.9,
            endSeconds: 77.9,
          },
        ],
      },
      {
        id: 25,
        name: "smile",
        appearances: [
          {
            startTime: "0:00:09.61",
            endTime: "0:00:12.813",
            startSeconds: 9.6,
            endSeconds: 12.8,
          },
          {
            startTime: "0:00:19.219",
            endTime: "0:00:26.694",
            startSeconds: 19.2,
            endSeconds: 26.7,
          },
          {
            startTime: "0:00:37.371",
            endTime: "0:00:40.574",
            startSeconds: 37.4,
            endSeconds: 40.6,
          },
          {
            startTime: "0:00:45.913",
            endTime: "0:00:51.251",
            startSeconds: 45.9,
            endSeconds: 51.3,
          },
          {
            startTime: "0:01:00.861",
            endTime: "0:01:14.742",
            startSeconds: 60.9,
            endSeconds: 74.7,
          },
        ],
      },
      {
        id: 37,
        name: "glasses",
        appearances: [
          {
            startTime: "0:00:10.677",
            endTime: "0:00:12.813",
            startSeconds: 10.7,
            endSeconds: 12.8,
          },
          {
            startTime: "0:00:23.49",
            endTime: "0:00:26.694",
            startSeconds: 23.5,
            endSeconds: 26.7,
          },
          {
            startTime: "0:00:33.1",
            endTime: "0:00:41.642",
            startSeconds: 33.1,
            endSeconds: 41.6,
          },
          {
            startTime: "0:00:45.913",
            endTime: "0:00:54.455",
            startSeconds: 45.9,
            endSeconds: 54.5,
          },
          {
            startTime: "0:01:00.861",
            endTime: "0:01:01.929",
            startSeconds: 60.9,
            endSeconds: 61.9,
          },
          {
            startTime: "0:01:08.335",
            endTime: "0:01:13.674",
            startSeconds: 68.3,
            endSeconds: 73.7,
          },
          {
            startTime: "0:01:16.877",
            endTime: "0:01:17.945",
            startSeconds: 76.9,
            endSeconds: 77.9,
          },
        ],
      },
      {
        id: 13,
        name: "text",
        appearances: [
          {
            startTime: "0:00:03.203",
            endTime: "0:00:09.61",
            startSeconds: 3.2,
            endSeconds: 9.6,
          },
          {
            startTime: "0:00:19.219",
            endTime: "0:00:23.49",
            startSeconds: 19.2,
            endSeconds: 23.5,
          },
          {
            startTime: "0:00:28.829",
            endTime: "0:00:37.371",
            startSeconds: 28.8,
            endSeconds: 37.4,
          },
          {
            startTime: "0:00:50.183",
            endTime: "0:00:54.455",
            startSeconds: 50.2,
            endSeconds: 54.5,
          },
          {
            startTime: "0:01:15.809",
            endTime: "0:01:16.877",
            startSeconds: 75.8,
            endSeconds: 76.9,
          },
          {
            startTime: "0:01:21.148",
            endTime: "0:01:25.452",
            startSeconds: 81.1,
            endSeconds: 85.5,
          },
        ],
      },
      {
        id: 23,
        name: "wearing",
        appearances: [
          {
            startTime: "0:00:06.406",
            endTime: "0:00:07.474",
            startSeconds: 6.4,
            endSeconds: 7.5,
          },
          {
            startTime: "0:00:12.813",
            endTime: "0:00:14.949",
            startSeconds: 12.8,
            endSeconds: 14.9,
          },
          {
            startTime: "0:00:20.287",
            endTime: "0:00:21.355",
            startSeconds: 20.3,
            endSeconds: 21.4,
          },
          {
            startTime: "0:00:27.761",
            endTime: "0:00:28.829",
            startSeconds: 27.8,
            endSeconds: 28.8,
          },
          {
            startTime: "0:00:33.1",
            endTime: "0:00:52.319",
            startSeconds: 33.1,
            endSeconds: 52.3,
          },
          {
            startTime: "0:01:09.403",
            endTime: "0:01:10.471",
            startSeconds: 69.4,
            endSeconds: 70.5,
          },
          {
            startTime: "0:01:16.877",
            endTime: "0:01:17.945",
            startSeconds: 76.9,
            endSeconds: 77.9,
          },
        ],
      },
      {
        id: 27,
        name: "outdoor",
        appearances: [
          {
            startTime: "0:00:09.61",
            endTime: "0:00:12.813",
            startSeconds: 9.6,
            endSeconds: 12.8,
          },
          {
            startTime: "0:00:54.454",
            endTime: "0:00:58.726",
            startSeconds: 54.5,
            endSeconds: 58.7,
          },
          {
            startTime: "0:01:05.132",
            endTime: "0:01:20.08",
            startSeconds: 65.1,
            endSeconds: 80.1,
          },
        ],
      },
      {
        id: 41,
        name: "indoor",
        appearances: [
          {
            startTime: "0:00:12.813",
            endTime: "0:00:20.287",
            startSeconds: 12.8,
            endSeconds: 20.3,
          },
          {
            startTime: "0:00:23.49",
            endTime: "0:00:27.761",
            startSeconds: 23.5,
            endSeconds: 27.8,
          },
          {
            startTime: "0:00:43.777",
            endTime: "0:00:44.845",
            startSeconds: 43.8,
            endSeconds: 44.8,
          },
          {
            startTime: "0:00:51.251",
            endTime: "0:00:52.319",
            startSeconds: 51.3,
            endSeconds: 52.3,
          },
          {
            startTime: "0:01:04.064",
            endTime: "0:01:08.335",
            startSeconds: 64.1,
            endSeconds: 68.3,
          },
          {
            startTime: "0:01:12.606",
            endTime: "0:01:13.674",
            startSeconds: 72.6,
            endSeconds: 73.7,
          },
          {
            startTime: "0:01:16.877",
            endTime: "0:01:17.945",
            startSeconds: 76.9,
            endSeconds: 77.9,
          },
        ],
      },
      {
        id: 10,
        name: "screenshot",
        appearances: [
          {
            startTime: "0:00:01.068",
            endTime: "0:00:08.542",
            startSeconds: 1.1,
            endSeconds: 8.5,
          },
          {
            startTime: "0:00:28.829",
            endTime: "0:00:29.897",
            startSeconds: 28.8,
            endSeconds: 29.9,
          },
          {
            startTime: "0:00:40.574",
            endTime: "0:00:43.777",
            startSeconds: 40.6,
            endSeconds: 43.8,
          },
          {
            startTime: "0:00:58.725",
            endTime: "0:01:00.861",
            startSeconds: 58.7,
            endSeconds: 60.9,
          },
          {
            startTime: "0:01:21.148",
            endTime: "0:01:24.351",
            startSeconds: 81.1,
            endSeconds: 84.4,
          },
        ],
      },
      {
        id: 20,
        name: "suit",
        appearances: [
          {
            startTime: "0:00:05.339",
            endTime: "0:00:07.474",
            startSeconds: 5.3,
            endSeconds: 7.5,
          },
          {
            startTime: "0:00:12.813",
            endTime: "0:00:14.949",
            startSeconds: 12.8,
            endSeconds: 14.9,
          },
          {
            startTime: "0:00:26.693",
            endTime: "0:00:28.829",
            startSeconds: 26.7,
            endSeconds: 28.8,
          },
          {
            startTime: "0:00:33.1",
            endTime: "0:00:35.235",
            startSeconds: 33.1,
            endSeconds: 35.2,
          },
          {
            startTime: "0:00:39.506",
            endTime: "0:00:40.574",
            startSeconds: 39.5,
            endSeconds: 40.6,
          },
          {
            startTime: "0:00:48.048",
            endTime: "0:00:51.251",
            startSeconds: 48,
            endSeconds: 51.3,
          },
          {
            startTime: "0:01:10.47",
            endTime: "0:01:13.674",
            startSeconds: 70.5,
            endSeconds: 73.7,
          },
          {
            startTime: "0:01:16.877",
            endTime: "0:01:17.945",
            startSeconds: 76.9,
            endSeconds: 77.9,
          },
        ],
      },
      {
        id: 5,
        name: "design",
        appearances: [
          {
            startTime: "0:00:01.068",
            endTime: "0:00:08.542",
            startSeconds: 1.1,
            endSeconds: 8.5,
          },
          {
            startTime: "0:00:32.032",
            endTime: "0:00:33.1",
            startSeconds: 32,
            endSeconds: 33.1,
          },
          {
            startTime: "0:01:20.08",
            endTime: "0:01:25.452",
            startSeconds: 80.1,
            endSeconds: 85.5,
          },
        ],
      },
      {
        id: 43,
        name: "wall",
        appearances: [
          {
            startTime: "0:00:14.948",
            endTime: "0:00:19.219",
            startSeconds: 14.9,
            endSeconds: 19.2,
          },
          {
            startTime: "0:00:42.709",
            endTime: "0:00:43.777",
            startSeconds: 42.7,
            endSeconds: 43.8,
          },
          {
            startTime: "0:01:04.064",
            endTime: "0:01:08.335",
            startSeconds: 64.1,
            endSeconds: 68.3,
          },
          {
            startTime: "0:01:12.606",
            endTime: "0:01:16.877",
            startSeconds: 72.6,
            endSeconds: 76.9,
          },
        ],
      },
      {
        id: 34,
        name: "woman",
        appearances: [
          {
            startTime: "0:00:09.61",
            endTime: "0:00:10.678",
            startSeconds: 9.6,
            endSeconds: 10.7,
          },
          {
            startTime: "0:00:23.49",
            endTime: "0:00:26.694",
            startSeconds: 23.5,
            endSeconds: 26.7,
          },
          {
            startTime: "0:00:29.897",
            endTime: "0:00:32.032",
            startSeconds: 29.9,
            endSeconds: 32,
          },
          {
            startTime: "0:00:57.658",
            endTime: "0:01:01.929",
            startSeconds: 57.7,
            endSeconds: 61.9,
          },
          {
            startTime: "0:01:06.199",
            endTime: "0:01:09.403",
            startSeconds: 66.2,
            endSeconds: 69.4,
          },
        ],
      },
      {
        id: 39,
        name: "tie",
        appearances: [
          {
            startTime: "0:00:12.813",
            endTime: "0:00:14.949",
            startSeconds: 12.8,
            endSeconds: 14.9,
          },
          {
            startTime: "0:00:33.1",
            endTime: "0:00:35.235",
            startSeconds: 33.1,
            endSeconds: 35.2,
          },
          {
            startTime: "0:00:39.506",
            endTime: "0:00:40.574",
            startSeconds: 39.5,
            endSeconds: 40.6,
          },
          {
            startTime: "0:00:48.048",
            endTime: "0:00:51.251",
            startSeconds: 48,
            endSeconds: 51.3,
          },
          {
            startTime: "0:01:10.47",
            endTime: "0:01:13.674",
            startSeconds: 70.5,
            endSeconds: 73.7,
          },
          {
            startTime: "0:01:16.877",
            endTime: "0:01:17.945",
            startSeconds: 76.9,
            endSeconds: 77.9,
          },
        ],
      },
      {
        id: 29,
        name: "sky",
        appearances: [
          {
            startTime: "0:00:09.61",
            endTime: "0:00:12.813",
            startSeconds: 9.6,
            endSeconds: 12.8,
          },
          {
            startTime: "0:00:53.387",
            endTime: "0:00:58.726",
            startSeconds: 53.4,
            endSeconds: 58.7,
          },
          {
            startTime: "0:01:05.132",
            endTime: "0:01:06.2",
            startSeconds: 65.1,
            endSeconds: 66.2,
          },
          {
            startTime: "0:01:11.538",
            endTime: "0:01:12.606",
            startSeconds: 71.5,
            endSeconds: 72.6,
          },
        ],
      },
      {
        id: 31,
        name: "group",
        appearances: [
          {
            startTime: "0:00:09.61",
            endTime: "0:00:10.678",
            startSeconds: 9.6,
            endSeconds: 10.7,
          },
          {
            startTime: "0:00:23.49",
            endTime: "0:00:26.694",
            startSeconds: 23.5,
            endSeconds: 26.7,
          },
          {
            startTime: "0:00:56.59",
            endTime: "0:00:58.726",
            startSeconds: 56.6,
            endSeconds: 58.7,
          },
          {
            startTime: "0:01:04.064",
            endTime: "0:01:08.335",
            startSeconds: 64.1,
            endSeconds: 68.3,
          },
        ],
      },
      {
        id: 30,
        name: "people",
        appearances: [
          {
            startTime: "0:00:09.61",
            endTime: "0:00:10.678",
            startSeconds: 9.6,
            endSeconds: 10.7,
          },
          {
            startTime: "0:00:23.49",
            endTime: "0:00:26.694",
            startSeconds: 23.5,
            endSeconds: 26.7,
          },
          {
            startTime: "0:00:57.658",
            endTime: "0:00:58.726",
            startSeconds: 57.7,
            endSeconds: 58.7,
          },
          {
            startTime: "0:01:04.064",
            endTime: "0:01:08.335",
            startSeconds: 64.1,
            endSeconds: 68.3,
          },
          {
            startTime: "0:01:17.945",
            endTime: "0:01:19.013",
            startSeconds: 77.9,
            endSeconds: 79,
          },
        ],
      },
      {
        id: 6,
        name: "graphic",
        appearances: [
          {
            startTime: "0:00:01.068",
            endTime: "0:00:05.339",
            startSeconds: 1.1,
            endSeconds: 5.3,
          },
          {
            startTime: "0:01:20.08",
            endTime: "0:01:25.452",
            startSeconds: 80.1,
            endSeconds: 85.5,
          },
        ],
      },
      {
        id: 9,
        name: "graphics",
        appearances: [
          {
            startTime: "0:00:01.068",
            endTime: "0:00:05.339",
            startSeconds: 1.1,
            endSeconds: 5.3,
          },
          {
            startTime: "0:01:20.08",
            endTime: "0:01:25.452",
            startSeconds: 80.1,
            endSeconds: 85.5,
          },
        ],
      },
      {
        id: 66,
        name: "forehead",
        appearances: [
          {
            startTime: "0:00:38.438",
            endTime: "0:00:40.574",
            startSeconds: 38.4,
            endSeconds: 40.6,
          },
          {
            startTime: "0:00:45.913",
            endTime: "0:00:48.048",
            startSeconds: 45.9,
            endSeconds: 48,
          },
          {
            startTime: "0:01:09.403",
            endTime: "0:01:13.674",
            startSeconds: 69.4,
            endSeconds: 73.7,
          },
        ],
      },
      {
        id: 69,
        name: "formal wear",
        appearances: [
          {
            startTime: "0:00:48.048",
            endTime: "0:00:51.251",
            startSeconds: 48,
            endSeconds: 51.3,
          },
          {
            startTime: "0:01:10.47",
            endTime: "0:01:13.674",
            startSeconds: 70.5,
            endSeconds: 73.7,
          },
          {
            startTime: "0:01:16.877",
            endTime: "0:01:17.945",
            startSeconds: 76.9,
            endSeconds: 77.9,
          },
        ],
      },
      {
        id: 74,
        name: "tree",
        appearances: [
          {
            startTime: "0:00:56.59",
            endTime: "0:00:58.726",
            startSeconds: 56.6,
            endSeconds: 58.7,
          },
          {
            startTime: "0:01:14.741",
            endTime: "0:01:20.08",
            startSeconds: 74.7,
            endSeconds: 80.1,
          },
        ],
      },
      {
        id: 36,
        name: "shirt",
        appearances: [
          {
            startTime: "0:00:10.677",
            endTime: "0:00:12.813",
            startSeconds: 10.7,
            endSeconds: 12.8,
          },
          {
            startTime: "0:00:40.574",
            endTime: "0:00:42.71",
            startSeconds: 40.6,
            endSeconds: 42.7,
          },
          {
            startTime: "0:01:05.132",
            endTime: "0:01:06.2",
            startSeconds: 65.1,
            endSeconds: 66.2,
          },
          {
            startTime: "0:01:12.606",
            endTime: "0:01:13.674",
            startSeconds: 72.6,
            endSeconds: 73.7,
          },
          {
            startTime: "0:01:16.877",
            endTime: "0:01:17.945",
            startSeconds: 76.9,
            endSeconds: 77.9,
          },
        ],
      },
      {
        id: 28,
        name: "standing",
        appearances: [
          {
            startTime: "0:00:09.61",
            endTime: "0:00:12.813",
            startSeconds: 9.6,
            endSeconds: 12.8,
          },
          {
            startTime: "0:00:55.522",
            endTime: "0:00:58.726",
            startSeconds: 55.5,
            endSeconds: 58.7,
          },
        ],
      },
      {
        id: 53,
        name: "sitting",
        appearances: [
          {
            startTime: "0:00:23.49",
            endTime: "0:00:27.761",
            startSeconds: 23.5,
            endSeconds: 27.8,
          },
          {
            startTime: "0:01:06.199",
            endTime: "0:01:08.335",
            startSeconds: 66.2,
            endSeconds: 68.3,
          },
        ],
      },
      {
        id: 81,
        name: "girl",
        appearances: [
          {
            startTime: "0:01:13.674",
            endTime: "0:01:20.08",
            startSeconds: 73.7,
            endSeconds: 80.1,
          },
        ],
      },
      {
        id: 7,
        name: "illustration",
        appearances: [
          {
            startTime: "0:00:01.068",
            endTime: "0:00:04.271",
            startSeconds: 1.1,
            endSeconds: 4.3,
          },
          {
            startTime: "0:01:20.08",
            endTime: "0:01:22.216",
            startSeconds: 80.1,
            endSeconds: 82.2,
          },
          {
            startTime: "0:01:25.419",
            endTime: "0:01:25.452",
            startSeconds: 85.4,
            endSeconds: 85.5,
          },
        ],
      },
      {
        id: 70,
        name: "white-collar worker",
        appearances: [
          {
            startTime: "0:00:49.116",
            endTime: "0:00:51.251",
            startSeconds: 49.1,
            endSeconds: 51.3,
          },
          {
            startTime: "0:01:10.47",
            endTime: "0:01:13.674",
            startSeconds: 70.5,
            endSeconds: 73.7,
          },
        ],
      },
      {
        id: 49,
        name: "portrait",
        appearances: [
          {
            startTime: "0:00:20.287",
            endTime: "0:00:21.355",
            startSeconds: 20.3,
            endSeconds: 21.4,
          },
          {
            startTime: "0:00:38.438",
            endTime: "0:00:39.506",
            startSeconds: 38.4,
            endSeconds: 39.5,
          },
          {
            startTime: "0:00:45.913",
            endTime: "0:00:48.048",
            startSeconds: 45.9,
            endSeconds: 48,
          },
          {
            startTime: "0:01:09.403",
            endTime: "0:01:10.471",
            startSeconds: 69.4,
            endSeconds: 70.5,
          },
        ],
      },
      {
        id: 32,
        name: "smiling",
        appearances: [
          {
            startTime: "0:00:09.61",
            endTime: "0:00:11.745",
            startSeconds: 9.6,
            endSeconds: 11.7,
          },
          {
            startTime: "0:00:45.913",
            endTime: "0:00:48.048",
            startSeconds: 45.9,
            endSeconds: 48,
          },
          {
            startTime: "0:01:05.132",
            endTime: "0:01:06.2",
            startSeconds: 65.1,
            endSeconds: 66.2,
          },
        ],
      },
      {
        id: 54,
        name: "computer",
        appearances: [
          {
            startTime: "0:00:26.693",
            endTime: "0:00:29.897",
            startSeconds: 26.7,
            endSeconds: 29.9,
          },
          {
            startTime: "0:01:06.199",
            endTime: "0:01:08.335",
            startSeconds: 66.2,
            endSeconds: 68.3,
          },
        ],
      },
      {
        id: 84,
        name: "graphic design",
        appearances: [
          {
            startTime: "0:01:21.148",
            endTime: "0:01:25.419",
            startSeconds: 81.1,
            endSeconds: 85.4,
          },
        ],
      },
      {
        id: 26,
        name: "posing",
        appearances: [
          {
            startTime: "0:00:09.61",
            endTime: "0:00:11.745",
            startSeconds: 9.6,
            endSeconds: 11.7,
          },
          {
            startTime: "0:00:20.287",
            endTime: "0:00:21.355",
            startSeconds: 20.3,
            endSeconds: 21.4,
          },
          {
            startTime: "0:01:05.132",
            endTime: "0:01:06.2",
            startSeconds: 65.1,
            endSeconds: 66.2,
          },
        ],
      },
      {
        id: 15,
        name: "typography",
        appearances: [
          {
            startTime: "0:00:04.271",
            endTime: "0:00:05.339",
            startSeconds: 4.3,
            endSeconds: 5.3,
          },
          {
            startTime: "0:00:32.032",
            endTime: "0:00:33.1",
            startSeconds: 32,
            endSeconds: 33.1,
          },
          {
            startTime: "0:01:23.283",
            endTime: "0:01:25.452",
            startSeconds: 83.3,
            endSeconds: 85.5,
          },
        ],
      },
      {
        id: 42,
        name: "black and white",
        appearances: [
          {
            startTime: "0:00:14.948",
            endTime: "0:00:19.219",
            startSeconds: 14.9,
            endSeconds: 19.2,
          },
        ],
      },
      {
        id: 67,
        name: "chin",
        appearances: [
          {
            startTime: "0:00:38.438",
            endTime: "0:00:39.506",
            startSeconds: 38.4,
            endSeconds: 39.5,
          },
          {
            startTime: "0:00:45.913",
            endTime: "0:00:48.048",
            startSeconds: 45.9,
            endSeconds: 48,
          },
          {
            startTime: "0:01:09.403",
            endTime: "0:01:10.471",
            startSeconds: 69.4,
            endSeconds: 70.5,
          },
        ],
      },
      {
        id: 72,
        name: "business",
        appearances: [
          {
            startTime: "0:00:50.183",
            endTime: "0:00:51.251",
            startSeconds: 50.2,
            endSeconds: 51.3,
          },
          {
            startTime: "0:01:10.47",
            endTime: "0:01:13.674",
            startSeconds: 70.5,
            endSeconds: 73.7,
          },
        ],
      },
      {
        id: 47,
        name: "hair",
        appearances: [
          {
            startTime: "0:00:18.151",
            endTime: "0:00:21.355",
            startSeconds: 18.2,
            endSeconds: 21.4,
          },
          {
            startTime: "0:01:09.403",
            endTime: "0:01:10.471",
            startSeconds: 69.4,
            endSeconds: 70.5,
          },
        ],
      },
      {
        id: 1,
        name: "magenta",
        appearances: [
          {
            startTime: "0:00:00",
            endTime: "0:00:02.136",
            startSeconds: 0,
            endSeconds: 2.1,
          },
          {
            startTime: "0:01:20.08",
            endTime: "0:01:22.216",
            startSeconds: 80.1,
            endSeconds: 82.2,
          },
        ],
      },
      {
        id: 3,
        name: "pink",
        appearances: [
          {
            startTime: "0:00:00",
            endTime: "0:00:02.136",
            startSeconds: 0,
            endSeconds: 2.1,
          },
          {
            startTime: "0:01:20.08",
            endTime: "0:01:22.216",
            startSeconds: 80.1,
            endSeconds: 82.2,
          },
        ],
      },
      {
        id: 19,
        name: "microphone",
        appearances: [
          {
            startTime: "0:00:05.339",
            endTime: "0:00:06.407",
            startSeconds: 5.3,
            endSeconds: 6.4,
          },
          {
            startTime: "0:00:33.1",
            endTime: "0:00:35.235",
            startSeconds: 33.1,
            endSeconds: 35.2,
          },
          {
            startTime: "0:01:10.47",
            endTime: "0:01:11.538",
            startSeconds: 70.5,
            endSeconds: 71.5,
          },
        ],
      },
      {
        id: 71,
        name: "businessperson",
        appearances: [
          {
            startTime: "0:00:49.116",
            endTime: "0:00:51.251",
            startSeconds: 49.1,
            endSeconds: 51.3,
          },
          {
            startTime: "0:01:10.47",
            endTime: "0:01:11.538",
            startSeconds: 70.5,
            endSeconds: 71.5,
          },
        ],
      },
      {
        id: 8,
        name: "circle",
        appearances: [
          {
            startTime: "0:00:01.068",
            endTime: "0:00:02.136",
            startSeconds: 1.1,
            endSeconds: 2.1,
          },
          {
            startTime: "0:01:20.08",
            endTime: "0:01:22.216",
            startSeconds: 80.1,
            endSeconds: 82.2,
          },
        ],
      },
      {
        id: 46,
        name: "boy",
        appearances: [
          {
            startTime: "0:00:17.084",
            endTime: "0:00:19.219",
            startSeconds: 17.1,
            endSeconds: 19.2,
          },
          {
            startTime: "0:01:04.064",
            endTime: "0:01:05.132",
            startSeconds: 64.1,
            endSeconds: 65.1,
          },
        ],
      },
      {
        id: 48,
        name: "book",
        appearances: [
          {
            startTime: "0:00:19.219",
            endTime: "0:00:20.287",
            startSeconds: 19.2,
            endSeconds: 20.3,
          },
          {
            startTime: "0:00:35.235",
            endTime: "0:00:36.303",
            startSeconds: 35.2,
            endSeconds: 36.3,
          },
        ],
      },
      {
        id: 64,
        name: "face",
        appearances: [
          {
            startTime: "0:00:38.438",
            endTime: "0:00:39.506",
            startSeconds: 38.4,
            endSeconds: 39.5,
          },
          {
            startTime: "0:01:09.403",
            endTime: "0:01:10.471",
            startSeconds: 69.4,
            endSeconds: 70.5,
          },
        ],
      },
      {
        id: 2,
        name: "purple",
        appearances: [
          {
            startTime: "0:00:00",
            endTime: "0:00:01.068",
            startSeconds: 0,
            endSeconds: 1.1,
          },
          {
            startTime: "0:01:14.741",
            endTime: "0:01:15.809",
            startSeconds: 74.7,
            endSeconds: 75.8,
          },
        ],
      },
      {
        id: 38,
        name: "event",
        appearances: [
          {
            startTime: "0:00:11.745",
            endTime: "0:00:12.813",
            startSeconds: 11.7,
            endSeconds: 12.8,
          },
          {
            startTime: "0:01:10.47",
            endTime: "0:01:11.538",
            startSeconds: 70.5,
            endSeconds: 71.5,
          },
        ],
      },
      {
        id: 63,
        name: "crowd",
        appearances: [
          {
            startTime: "0:00:29.897",
            endTime: "0:00:32.032",
            startSeconds: 29.9,
            endSeconds: 32,
          },
        ],
      },
      {
        id: 76,
        name: "child",
        appearances: [
          {
            startTime: "0:00:59.793",
            endTime: "0:01:00.861",
            startSeconds: 59.8,
            endSeconds: 60.9,
          },
          {
            startTime: "0:01:04.064",
            endTime: "0:01:05.132",
            startSeconds: 64.1,
            endSeconds: 65.1,
          },
        ],
      },
      {
        id: 22,
        name: "spokesperson",
        appearances: [
          {
            startTime: "0:00:05.339",
            endTime: "0:00:06.407",
            startSeconds: 5.3,
            endSeconds: 6.4,
          },
          {
            startTime: "0:00:34.167",
            endTime: "0:00:35.235",
            startSeconds: 34.2,
            endSeconds: 35.2,
          },
        ],
      },
      {
        id: 40,
        name: "dressed",
        appearances: [
          {
            startTime: "0:00:12.813",
            endTime: "0:00:13.881",
            startSeconds: 12.8,
            endSeconds: 13.9,
          },
          {
            startTime: "0:01:10.47",
            endTime: "0:01:11.538",
            startSeconds: 70.5,
            endSeconds: 71.5,
          },
        ],
      },
      {
        id: 68,
        name: "cheek",
        appearances: [
          {
            startTime: "0:00:46.98",
            endTime: "0:00:48.048",
            startSeconds: 47,
            endSeconds: 48,
          },
          {
            startTime: "0:01:09.403",
            endTime: "0:01:10.471",
            startSeconds: 69.4,
            endSeconds: 70.5,
          },
        ],
      },
      {
        id: 79,
        name: "furniture",
        appearances: [
          {
            startTime: "0:01:06.199",
            endTime: "0:01:08.335",
            startSeconds: 66.2,
            endSeconds: 68.3,
          },
        ],
      },
      {
        id: 80,
        name: "floor",
        appearances: [
          {
            startTime: "0:01:06.199",
            endTime: "0:01:08.335",
            startSeconds: 66.2,
            endSeconds: 68.3,
          },
        ],
      },
      {
        id: 82,
        name: "vector",
        appearances: [
          {
            startTime: "0:01:21.148",
            endTime: "0:01:22.216",
            startSeconds: 81.1,
            endSeconds: 82.2,
          },
        ],
      },
      {
        id: 83,
        name: "colorfulness",
        appearances: [
          {
            startTime: "0:01:21.148",
            endTime: "0:01:22.216",
            startSeconds: 81.1,
            endSeconds: 82.2,
          },
        ],
      },
      {
        id: 45,
        name: "office supplies",
        appearances: [
          {
            startTime: "0:00:16.016",
            endTime: "0:00:17.084",
            startSeconds: 16,
            endSeconds: 17.1,
          },
        ],
      },
      {
        id: 52,
        name: "sign",
        appearances: [
          {
            startTime: "0:00:22.422",
            endTime: "0:00:23.49",
            startSeconds: 22.4,
            endSeconds: 23.5,
          },
        ],
      },
      {
        id: 55,
        name: "laptop",
        appearances: [
          {
            startTime: "0:00:26.693",
            endTime: "0:00:27.761",
            startSeconds: 26.7,
            endSeconds: 27.8,
          },
        ],
      },
      {
        id: 65,
        name: "headshot",
        appearances: [
          {
            startTime: "0:00:38.438",
            endTime: "0:00:39.506",
            startSeconds: 38.4,
            endSeconds: 39.5,
          },
        ],
      },
      {
        id: 73,
        name: "ground",
        appearances: [
          {
            startTime: "0:00:55.522",
            endTime: "0:00:56.59",
            startSeconds: 55.5,
            endSeconds: 56.6,
          },
        ],
      },
      {
        id: 77,
        name: "baby",
        appearances: [
          {
            startTime: "0:00:59.793",
            endTime: "0:01:00.861",
            startSeconds: 59.8,
            endSeconds: 60.9,
          },
        ],
      },
      {
        id: 4,
        name: "violet",
        appearances: [
          {
            startTime: "0:00:00",
            endTime: "0:00:01.068",
            startSeconds: 0,
            endSeconds: 1.1,
          },
        ],
      },
      {
        id: 11,
        name: "aqua",
        appearances: [
          {
            startTime: "0:00:02.135",
            endTime: "0:00:03.203",
            startSeconds: 2.1,
            endSeconds: 3.2,
          },
        ],
      },
      {
        id: 12,
        name: "nature",
        appearances: [
          {
            startTime: "0:00:02.135",
            endTime: "0:00:03.203",
            startSeconds: 2.1,
            endSeconds: 3.2,
          },
        ],
      },
      {
        id: 14,
        name: "cartoon",
        appearances: [
          {
            startTime: "0:00:03.203",
            endTime: "0:00:04.271",
            startSeconds: 3.2,
            endSeconds: 4.3,
          },
        ],
      },
      {
        id: 24,
        name: "rainbow",
        appearances: [
          {
            startTime: "0:00:08.542",
            endTime: "0:00:09.61",
            startSeconds: 8.5,
            endSeconds: 9.6,
          },
        ],
      },
      {
        id: 33,
        name: "sunglasses",
        appearances: [
          {
            startTime: "0:00:09.61",
            endTime: "0:00:10.678",
            startSeconds: 9.6,
            endSeconds: 10.7,
          },
        ],
      },
      {
        id: 35,
        name: "dress",
        appearances: [
          {
            startTime: "0:00:09.61",
            endTime: "0:00:10.678",
            startSeconds: 9.6,
            endSeconds: 10.7,
          },
        ],
      },
      {
        id: 44,
        name: "young",
        appearances: [
          {
            startTime: "0:00:14.948",
            endTime: "0:00:16.016",
            startSeconds: 14.9,
            endSeconds: 16,
          },
        ],
      },
      {
        id: 50,
        name: "old",
        appearances: [
          {
            startTime: "0:00:20.287",
            endTime: "0:00:21.355",
            startSeconds: 20.3,
            endSeconds: 21.4,
          },
        ],
      },
      {
        id: 51,
        name: "vintage",
        appearances: [
          {
            startTime: "0:00:20.287",
            endTime: "0:00:21.355",
            startSeconds: 20.3,
            endSeconds: 21.4,
          },
        ],
      },
      {
        id: 56,
        name: "electronics",
        appearances: [
          {
            startTime: "0:00:28.829",
            endTime: "0:00:29.897",
            startSeconds: 28.8,
            endSeconds: 29.9,
          },
        ],
      },
      {
        id: 57,
        name: "display",
        appearances: [
          {
            startTime: "0:00:28.829",
            endTime: "0:00:29.897",
            startSeconds: 28.8,
            endSeconds: 29.9,
          },
        ],
      },
      {
        id: 58,
        name: "screen",
        appearances: [
          {
            startTime: "0:00:28.829",
            endTime: "0:00:29.897",
            startSeconds: 28.8,
            endSeconds: 29.9,
          },
        ],
      },
      {
        id: 59,
        name: "monitor",
        appearances: [
          {
            startTime: "0:00:28.829",
            endTime: "0:00:29.897",
            startSeconds: 28.8,
            endSeconds: 29.9,
          },
        ],
      },
      {
        id: 60,
        name: "grass",
        appearances: [
          {
            startTime: "0:00:28.829",
            endTime: "0:00:29.897",
            startSeconds: 28.8,
            endSeconds: 29.9,
          },
        ],
      },
      {
        id: 61,
        name: "computer monitor",
        appearances: [
          {
            startTime: "0:00:28.829",
            endTime: "0:00:29.897",
            startSeconds: 28.8,
            endSeconds: 29.9,
          },
        ],
      },
      {
        id: 62,
        name: "television",
        appearances: [
          {
            startTime: "0:00:28.829",
            endTime: "0:00:29.897",
            startSeconds: 28.8,
            endSeconds: 29.9,
          },
        ],
      },
      {
        id: 75,
        name: "party",
        appearances: [
          {
            startTime: "0:00:58.725",
            endTime: "0:00:59.793",
            startSeconds: 58.7,
            endSeconds: 59.8,
          },
        ],
      },
      {
        id: 78,
        name: "aid",
        appearances: [
          {
            startTime: "0:01:04.064",
            endTime: "0:01:05.132",
            startSeconds: 64.1,
            endSeconds: 65.1,
          },
        ],
      },
      {
        id: 85,
        name: "dark",
        appearances: [
          {
            startTime: "0:01:26.486",
            endTime: "0:01:26.519",
            startSeconds: 86.5,
            endSeconds: 86.5,
          },
        ],
      },
      {
        id: 86,
        name: "moon",
        appearances: [
          {
            startTime: "0:01:26.486",
            endTime: "0:01:26.519",
            startSeconds: 86.5,
            endSeconds: 86.5,
          },
        ],
      },
      {
        id: 87,
        name: "darkness",
        appearances: [
          {
            startTime: "0:01:26.486",
            endTime: "0:01:26.519",
            startSeconds: 86.5,
            endSeconds: 86.5,
          },
        ],
      },
    ],
    framePatterns: [
      {
        id: 1,
        name: "RollingCredits",
        appearances: [
          {
            startTime: "0:01:23",
            endTime: "0:01:27",
            startSeconds: 83,
            endSeconds: 87,
          },
        ],
      },
      {
        id: 2,
        name: "Black",
        appearances: [
          {
            startTime: "0:01:26.32",
            endTime: "0:01:27.287",
            startSeconds: 86.3,
            endSeconds: 87.3,
          },
        ],
      },
    ],
    brands: [
      {
        referenceId: "Microsoft",
        referenceUrl: "http://en.wikipedia.org/wiki/Microsoft",
        confidence: 1,
        description:
          "Microsoft Corporation /ˈmaɪkrəˌsɒft, -roʊ-, -ˌsɔːft/ (commonly referred to as Microsoft) is an American multinational technology company headquartered in Redmond, Washington, that develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services.",
        seenDuration: 11.6,
        id: 1,
        name: "Microsoft",
        appearances: [
          {
            startTime: "0:00:16.79",
            endTime: "0:00:22.422",
            startSeconds: 16.8,
            endSeconds: 22.4,
          },
          {
            startTime: "0:00:53.08",
            endTime: "0:00:59.14",
            startSeconds: 53.1,
            endSeconds: 59.1,
          },
        ],
      },
    ],
    namedLocations: [],
    namedPeople: [
      {
        referenceId: "Bill_Gates",
        referenceUrl: "https://en.wikipedia.org/wiki/Bill_Gates",
        confidence: 0.5462,
        description:
          "Bill Gates has been popular for being the co-founder of Microsoft one of the biggest and successful companies, and also for being the wealthiest person in the world from 1995 to 2009. Bill Gates has been married to Melinda Gates since 1994, they have 3 children.",
        seenDuration: 34.1,
        id: 1,
        name: "Bill Gates",
        appearances: [
          {
            startTime: "0:00:12.58",
            endTime: "0:00:26.59",
            startSeconds: 12.6,
            endSeconds: 26.6,
          },
          {
            startTime: "0:00:42.58",
            endTime: "0:00:49.85",
            startSeconds: 42.6,
            endSeconds: 49.8,
          },
          {
            startTime: "0:01:10.16",
            endTime: "0:01:23.15",
            startSeconds: 70.2,
            endSeconds: 83.1,
          },
        ],
      },
      {
        referenceId: "Paul_Allen",
        referenceUrl: "https://en.wikipedia.org/wiki/Paul_Allen",
        confidence: 0.4609,
        description:
          "American Business Professional Paul Allen was born on 21st January, 1953 in Seattle, U.S. and passed away on 15th Oct 2018 Seattle, Washington, U.S. aged 65. He is most remembered for Co-founder of Microsoft Chairman of Vulcan Inc., Investor. His zodiac sign is Aquarius.\r\n\r\nPaul Allen is a member of the following lists: 2018 deaths, Businesspeople from King County, Washington and Deaths from cancer in Washington (state).",
        seenDuration: 4.2,
        id: 2,
        name: "Paul Allen",
        appearances: [
          {
            startTime: "0:00:22.39",
            endTime: "0:00:26.59",
            startSeconds: 22.4,
            endSeconds: 26.6,
          },
        ],
      },
      {
        referenceId: "Melinda_Gates",
        referenceUrl: "https://en.wikipedia.org/wiki/Melinda_Gates",
        confidence: 0.3123,
        description:
          "Co-chair of the Bill & Melinda Gates Foundation, businesswoman, and mother. Dedicated to helping all people lead healthy, productive lives.",
        seenDuration: 2.5,
        id: 3,
        name: "Melinda Gates",
        appearances: [
          {
            startTime: "0:00:59.14",
            endTime: "0:01:01.56",
            startSeconds: 59.1,
            endSeconds: 61.6,
          },
        ],
      },
    ],
    statistics: {
      correspondenceCount: 8,
      speakerTalkToListenRatio: {
        "1": 0.006,
        "2": 0.827,
        "3": 0.055,
        "4": 0.042,
        "5": 0.053,
        "6": 0.015,
      },
      speakerLongestMonolog: {
        "1": 0,
        "2": 26,
        "3": 4,
        "4": 3,
        "5": 4,
        "6": 1,
      },
      speakerNumberOfFragments: {
        "1": 1,
        "2": 4,
        "3": 1,
        "4": 1,
        "5": 1,
        "6": 1,
      },
      speakerWordCount: {
        "1": 1,
        "2": 146,
        "3": 9,
        "4": 8,
        "5": 11,
        "6": 3,
      },
    },
    topics: [
      {
        referenceUrl: null,
        iptcName: "social issue/charity",
        iabName: "Business and Finance",
        confidence: 1,
        id: 1,
        name: "Business/Charity and Charities/Bill Gates",
        appearances: [
          {
            startTime: "0:00:05.58",
            endTime: "0:01:22.61",
            startSeconds: 5.6,
            endSeconds: 82.6,
          },
        ],
      },
      {
        referenceUrl: null,
        iptcName: null,
        iabName: null,
        confidence: 0.9405,
        id: 2,
        name: "Wealthy People and Families",
        appearances: [
          {
            startTime: "0:00:05.58",
            endTime: "0:01:22.61",
            startSeconds: 5.6,
            endSeconds: 82.6,
          },
        ],
      },
      {
        referenceUrl: "https://en.wikipedia.org/wiki/Category:Businesspeople",
        iptcName: null,
        iabName: null,
        confidence: 0.735,
        id: 3,
        name: "Businesspeople",
        appearances: [
          {
            startTime: "0:00:04.738",
            endTime: "0:01:23.15",
            startSeconds: 4.7,
            endSeconds: 83.1,
          },
        ],
      },
      {
        referenceUrl: "https://en.wikipedia.org/wiki/Category:Billionaires",
        iptcName: null,
        iabName: null,
        confidence: 0.7166,
        id: 4,
        name: "Billionaires",
        appearances: [
          {
            startTime: "0:00:04.738",
            endTime: "0:01:23.15",
            startSeconds: 4.7,
            endSeconds: 83.1,
          },
        ],
      },
      {
        referenceUrl: "https://en.wikipedia.org/wiki/Category:Evidence_law",
        iptcName: null,
        iabName: null,
        confidence: 0.6897,
        id: 5,
        name: "Evidence law",
        appearances: [
          {
            startTime: "0:00:31.298",
            endTime: "0:00:36.699",
            startSeconds: 31.3,
            endSeconds: 36.7,
          },
        ],
      },
      {
        referenceUrl:
          "https://en.wikipedia.org/wiki/Category:Philosophy_of_law",
        iptcName: null,
        iabName: null,
        confidence: 0.6807,
        id: 6,
        name: "Philosophy of law",
        appearances: [
          {
            startTime: "0:00:31.298",
            endTime: "0:00:36.699",
            startSeconds: 31.3,
            endSeconds: 36.7,
          },
        ],
      },
      {
        referenceUrl: "https://en.wikipedia.org/wiki/Category:Songs",
        iptcName: null,
        iabName: null,
        confidence: 0.6785,
        id: 7,
        name: "Songs",
        appearances: [
          {
            startTime: "0:00:05.58",
            endTime: "0:00:12.58",
            startSeconds: 5.6,
            endSeconds: 12.6,
          },
        ],
      },
      {
        referenceUrl: "https://en.wikipedia.org/wiki/Category:Singles",
        iptcName: null,
        iabName: null,
        confidence: 0.6785,
        id: 8,
        name: "Singles",
        appearances: [
          {
            startTime: "0:00:05.58",
            endTime: "0:00:12.58",
            startSeconds: 5.6,
            endSeconds: 12.6,
          },
        ],
      },
      {
        referenceUrl: null,
        iptcName: null,
        iabName: null,
        confidence: 0.6725,
        id: 9,
        name: "Melinda Gates Foundation",
        appearances: [
          {
            startTime: "0:00:05.58",
            endTime: "0:00:26.59",
            startSeconds: 5.6,
            endSeconds: 26.6,
          },
          {
            startTime: "0:00:34.9",
            endTime: "0:01:22.61",
            startSeconds: 34.9,
            endSeconds: 82.6,
          },
        ],
      },
      {
        referenceUrl: null,
        iptcName: "social issue/charity",
        iabName: "Business and Finance",
        confidence: 0.586,
        id: 10,
        name: "Business/Charity and Charities",
        appearances: [
          {
            startTime: "0:00:42.58",
            endTime: "0:01:22.61",
            startSeconds: 42.6,
            endSeconds: 82.6,
          },
        ],
      },
      {
        referenceUrl: null,
        iptcName: null,
        iabName: null,
        confidence: 0.5331,
        id: 11,
        name: "Philanthropy",
        appearances: [
          {
            startTime: "0:00:05.58",
            endTime: "0:00:26.59",
            startSeconds: 5.6,
            endSeconds: 26.6,
          },
          {
            startTime: "0:00:42.58",
            endTime: "0:01:19.94",
            startSeconds: 42.6,
            endSeconds: 79.9,
          },
        ],
      },
    ],
  },
  videos: [
    {
      accountId: "8c8b7b2a-585d-493d-8d09-0c498f467df6",
      id: "64ffdd4c11",
      state: "Processed",
      moderationState: "OK",
      reviewState: "None",
      privacyMode: "Private",
      processingProgress: "100%",
      failureCode: "None",
      failureMessage: "",
      externalId: null,
      externalUrl: null,
      metadata: null,
      insights: {
        version: "1.0.0.0",
        duration: "0:01:27.424",
        sourceLanguage: "en-US",
        sourceLanguages: ["en-US"],
        language: "en-US",
        languages: ["en-US"],
        transcript: [
          {
            id: 1,
            text: "Genius",
            confidence: 0.9185,
            speakerId: 1,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:05.11",
                adjustedEnd: "0:00:05.58",
                start: "0:00:05.11",
                end: "0:00:05.58",
              },
            ],
          },
          {
            id: 2,
            text:
              "pioneer of the PCH. World's greatest living philanthropist and a hero to nerds among others.",
            confidence: 0.9185,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:05.58",
                adjustedEnd: "0:00:12.58",
                start: "0:00:05.58",
                end: "0:00:12.58",
              },
            ],
          },
          {
            id: 3,
            text: "Bill Gates started programming computers when he was 13.",
            confidence: 0.9185,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:12.58",
                adjustedEnd: "0:00:16.79",
                start: "0:00:12.58",
                end: "0:00:16.79",
              },
            ],
          },
          {
            id: 4,
            text:
              "He dropped out of Harvard in 1975 and founded Microsoft with his",
            confidence: 0.9185,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:16.79",
                adjustedEnd: "0:00:22.39",
                start: "0:00:16.79",
                end: "0:00:22.39",
              },
            ],
          },
          {
            id: 5,
            text: "childhood friend Paul Allen. Bill led the company to",
            confidence: 0.9185,
            speakerId: 3,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:22.39",
                adjustedEnd: "0:00:26.59",
                start: "0:00:22.39",
                end: "0:00:26.59",
              },
            ],
          },
          {
            id: 6,
            text:
              "become a software behemoth, so dominant that the Justice Department suited for breaking antitrust laws in 1998.",
            confidence: 0.9185,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:26.59",
                adjustedEnd: "0:00:34.9",
                start: "0:00:26.59",
                end: "0:00:34.9",
              },
            ],
          },
          {
            id: 7,
            text: "Sales of Windows kept growing,",
            confidence: 0.9445,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:34.9",
                adjustedEnd: "0:00:36.92",
                start: "0:00:34.9",
                end: "0:00:36.92",
              },
            ],
          },
          {
            id: 8,
            text: "generating an insane amount of money.",
            confidence: 0.9445,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:36.92",
                adjustedEnd: "0:00:39.34",
                start: "0:00:36.92",
                end: "0:00:39.34",
              },
            ],
          },
          {
            id: 9,
            text: "I think that I'm having more fun than",
            confidence: 0.9445,
            speakerId: 4,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:39.34",
                adjustedEnd: "0:00:42.58",
                start: "0:00:39.34",
                end: "0:00:42.58",
              },
            ],
          },
          {
            id: 10,
            text:
              "than anybody I know. Bill was the world's richest man from 1995 to 2007 and again in 2014,",
            confidence: 0.9445,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:42.58",
                adjustedEnd: "0:00:49.85",
                start: "0:00:42.58",
                end: "0:00:49.85",
              },
            ],
          },
          {
            id: 11,
            text: "but now he's all about spreading the wealth.",
            confidence: 0.9445,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:49.85",
                adjustedEnd: "0:00:53.08",
                start: "0:00:49.85",
                end: "0:00:53.08",
              },
            ],
          },
          {
            id: 12,
            text:
              "He left his day job at Microsoft in 2008 to focus on the charitable foundation.",
            confidence: 0.9445,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:53.08",
                adjustedEnd: "0:00:59.14",
                start: "0:00:53.08",
                end: "0:00:59.14",
              },
            ],
          },
          {
            id: 13,
            text: "He runs with his wife Melinda.",
            confidence: 0.9445,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:59.14",
                adjustedEnd: "0:01:01.56",
                start: "0:00:59.14",
                end: "0:01:01.56",
              },
            ],
          },
          {
            id: 14,
            text:
              "It's dedicated to eradicating poverty and disease in the developing world.",
            confidence: 0.9445,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:01:01.56",
                adjustedEnd: "0:01:06.32",
                start: "0:01:01.56",
                end: "0:01:06.32",
              },
            ],
          },
          {
            id: 15,
            text: "And improving education in the United States.",
            confidence: 0.965,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:01:06.32",
                adjustedEnd: "0:01:08.98",
                start: "0:01:06.32",
                end: "0:01:08.98",
              },
            ],
          },
          {
            id: 16,
            text:
              "Bill wants other billionaires to give away their fortunes to,",
            confidence: 0.9276,
            speakerId: 5,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:01:10.16",
                adjustedEnd: "0:01:13.86",
                start: "0:01:10.16",
                end: "0:01:13.86",
              },
            ],
          },
          {
            id: 17,
            text: "and",
            confidence: 0.9276,
            speakerId: 5,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:01:13.86",
                adjustedEnd: "0:01:14.23",
                start: "0:01:13.86",
                end: "0:01:14.23",
              },
            ],
          },
          {
            id: 18,
            text:
              "reportedly plans to leave it just $10,000,000 to each of his three children.",
            confidence: 0.9276,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:01:14.23",
                adjustedEnd: "0:01:19.94",
                start: "0:01:14.23",
                end: "0:01:19.94",
              },
            ],
          },
          {
            id: 19,
            text: "And that Bill Gates",
            confidence: 0.9211,
            speakerId: 2,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:01:19.94",
                adjustedEnd: "0:01:21.46",
                start: "0:01:19.94",
                end: "0:01:21.46",
              },
            ],
          },
          {
            id: 20,
            text: "in 83 seconds.",
            confidence: 0.9211,
            speakerId: 6,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:01:21.46",
                adjustedEnd: "0:01:22.61",
                start: "0:01:21.46",
                end: "0:01:22.61",
              },
            ],
          },
        ],
        ocr: [
          {
            id: 1,
            text: "CONCLUSIONS O",
            confidence: 0.6425,
            left: 109,
            top: 8,
            width: 142,
            height: 13,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:32.699",
                adjustedEnd: "0:00:36.699",
                start: "0:00:32.699",
                end: "0:00:36.699",
              },
            ],
          },
          {
            id: 2,
            text: "uon",
            confidence: 0.363,
            left: 34,
            top: 18,
            width: 30,
            height: 12,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:18.685",
                adjustedEnd: "0:00:19.152",
                start: "0:00:18.685",
                end: "0:00:19.152",
              },
            ],
          },
          {
            id: 3,
            text: "Getty",
            confidence: 0.2918,
            left: 352,
            top: 18,
            width: 19,
            height: 7,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:28.028",
                adjustedEnd: "0:00:28.495",
                start: "0:00:28.028",
                end: "0:00:28.495",
              },
              {
                adjustedStart: "0:00:29.897",
                adjustedEnd: "0:00:31.298",
                start: "0:00:29.897",
                end: "0:00:31.298",
              },
              {
                adjustedStart: "0:00:48.115",
                adjustedEnd: "0:00:48.582",
                start: "0:00:48.115",
                end: "0:00:48.582",
              },
              {
                adjustedStart: "0:00:50.45",
                adjustedEnd: "0:00:53.253",
                start: "0:00:50.45",
                end: "0:00:53.253",
              },
              {
                adjustedStart: "0:01:06.333",
                adjustedEnd: "0:01:07.267",
                start: "0:01:06.333",
                end: "0:01:07.267",
              },
              {
                adjustedStart: "0:01:13.34",
                adjustedEnd: "0:01:13.807",
                start: "0:01:13.34",
                end: "0:01:13.807",
              },
            ],
          },
          {
            id: 4,
            text: "CONCLUSIONS OF LAW",
            confidence: 0.4185,
            left: 130,
            top: 22,
            width: 164,
            height: 11,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:31.298",
                adjustedEnd: "0:00:32.699",
                start: "0:00:31.298",
                end: "0:00:32.699",
              },
            ],
          },
          {
            id: 5,
            text: "BILL",
            confidence: 0.3047,
            left: 256,
            top: 22,
            width: 47,
            height: 24,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:01:15.676",
                adjustedEnd: "0:01:16.143",
                start: "0:01:15.676",
                end: "0:01:16.143",
              },
              {
                adjustedStart: "0:01:16.61",
                adjustedEnd: "0:01:17.544",
                start: "0:01:16.61",
                end: "0:01:17.544",
              },
            ],
          },
          {
            id: 6,
            text: "AND ORDER",
            confidence: 0.4182,
            left: 155,
            top: 28,
            width: 102,
            height: 13,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:32.232",
                adjustedEnd: "0:00:36.699",
                start: "0:00:32.232",
                end: "0:00:36.699",
              },
            ],
          },
          {
            id: 7,
            text: "ORDER",
            confidence: 0.402,
            left: 203,
            top: 40,
            width: 51,
            height: 10,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:31.298",
                adjustedEnd: "0:00:32.232",
                start: "0:00:31.298",
                end: "0:00:32.232",
              },
            ],
          },
          {
            id: 8,
            text: "Estimated Net",
            confidence: 0.6712,
            left: 214,
            top: 76,
            width: 126,
            height: 17,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:48.582",
                adjustedEnd: "0:00:49.049",
                start: "0:00:48.582",
                end: "0:00:49.049",
              },
              {
                adjustedStart: "0:00:49.516",
                adjustedEnd: "0:00:49.983",
                start: "0:00:49.516",
                end: "0:00:49.983",
              },
            ],
          },
          {
            id: 9,
            text: "Estimated Net Wonh:",
            confidence: 0.4052,
            left: 214,
            top: 78,
            width: 188,
            height: 15,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:49.049",
                adjustedEnd: "0:00:49.516",
                start: "0:00:49.049",
                end: "0:00:49.516",
              },
              {
                adjustedStart: "0:00:49.983",
                adjustedEnd: "0:00:53.253",
                start: "0:00:49.983",
                end: "0:00:53.253",
              },
            ],
          },
          {
            id: 10,
            text: "WHO IS",
            confidence: 0.5226,
            left: 119,
            top: 98,
            width: 180,
            height: 38,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:02.803",
                adjustedEnd: "0:00:03.27",
                start: "0:00:02.803",
                end: "0:00:03.27",
              },
              {
                adjustedStart: "0:01:22.215",
                adjustedEnd: "0:01:22.682",
                start: "0:01:22.215",
                end: "0:01:22.682",
              },
              {
                adjustedStart: "0:01:25.953",
                adjustedEnd: "0:01:25.986",
                start: "0:01:25.953",
                end: "0:01:25.986",
              },
            ],
          },
          {
            id: 11,
            text: "WHO",
            confidence: 0.7248,
            left: 159,
            top: 107,
            width: 69,
            height: 23,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:03.737",
                adjustedEnd: "0:00:04.204",
                start: "0:00:03.737",
                end: "0:00:04.204",
              },
              {
                adjustedStart: "0:01:22.683",
                adjustedEnd: "0:01:23.15",
                start: "0:01:22.683",
                end: "0:01:23.15",
              },
              {
                adjustedStart: "0:01:23.617",
                adjustedEnd: "0:01:24.084",
                start: "0:01:23.617",
                end: "0:01:24.084",
              },
            ],
          },
          {
            id: 12,
            text: "Windov,tsxp",
            confidence: 0.299,
            left: 160,
            top: 121,
            width: 108,
            height: 29,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:28.962",
                adjustedEnd: "0:00:29.896",
                start: "0:00:28.962",
                end: "0:00:29.896",
              },
            ],
          },
          {
            id: 13,
            text: "BILL",
            confidence: 0.4488,
            left: 160,
            top: 144,
            width: 83,
            height: 27,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:01:22.683",
                adjustedEnd: "0:01:23.15",
                start: "0:01:22.683",
                end: "0:01:23.15",
              },
              {
                adjustedStart: "0:01:23.617",
                adjustedEnd: "0:01:24.084",
                start: "0:01:23.617",
                end: "0:01:24.084",
              },
              {
                adjustedStart: "0:01:25.953",
                adjustedEnd: "0:01:25.986",
                start: "0:01:25.953",
                end: "0:01:25.986",
              },
            ],
          },
          {
            id: 14,
            text: "GATES?",
            confidence: 0.3705,
            left: 161,
            top: 172,
            width: 197,
            height: 59,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:03.27",
                adjustedEnd: "0:00:04.204",
                start: "0:00:03.27",
                end: "0:00:04.204",
              },
              {
                adjustedStart: "0:01:23.617",
                adjustedEnd: "0:01:24.084",
                start: "0:01:23.617",
                end: "0:01:24.084",
              },
              {
                adjustedStart: "0:01:25.953",
                adjustedEnd: "0:01:25.986",
                start: "0:01:25.953",
                end: "0:01:25.986",
              },
            ],
          },
          {
            id: 15,
            text: "Microsoft",
            confidence: 0.717,
            left: 106,
            top: 174,
            width: 164,
            height: 48,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:21.955",
                adjustedEnd: "0:00:22.422",
                start: "0:00:21.955",
                end: "0:00:22.422",
              },
            ],
          },
          {
            id: 16,
            text: "85",
            confidence: 0.681,
            left: 39,
            top: 192,
            width: 26,
            height: 18,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:01:22.683",
                adjustedEnd: "0:01:23.15",
                start: "0:01:22.683",
                end: "0:01:23.15",
              },
            ],
          },
          {
            id: 17,
            text: "86",
            confidence: 0.489,
            left: 23,
            top: 199,
            width: 29,
            height: 19,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:02.803",
                adjustedEnd: "0:00:03.737",
                start: "0:00:02.803",
                end: "0:00:03.737",
              },
            ],
          },
          {
            id: 18,
            text: "Money",
            confidence: 0.9311,
            left: 362,
            top: 210,
            width: 49,
            height: 14,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:00",
                adjustedEnd: "0:00:00.467",
                start: "0:00:00",
                end: "0:00:00.467",
              },
              {
                adjustedStart: "0:00:00.934",
                adjustedEnd: "0:00:02.336",
                start: "0:00:00.934",
                end: "0:00:02.336",
              },
              {
                adjustedStart: "0:00:02.803",
                adjustedEnd: "0:00:03.737",
                start: "0:00:02.803",
                end: "0:00:03.737",
              },
              {
                adjustedStart: "0:00:05.138",
                adjustedEnd: "0:00:06.54",
                start: "0:00:05.138",
                end: "0:00:06.54",
              },
              {
                adjustedStart: "0:00:07.474",
                adjustedEnd: "0:00:08.408",
                start: "0:00:07.474",
                end: "0:00:08.408",
              },
              {
                adjustedStart: "0:00:12.613",
                adjustedEnd: "0:00:17.08",
                start: "0:00:12.613",
                end: "0:00:17.08",
              },
              {
                adjustedStart: "0:00:18.218",
                adjustedEnd: "0:00:18.685",
                start: "0:00:18.218",
                end: "0:00:18.685",
              },
              {
                adjustedStart: "0:00:19.152",
                adjustedEnd: "0:00:19.619",
                start: "0:00:19.152",
                end: "0:00:19.619",
              },
              {
                adjustedStart: "0:00:25.692",
                adjustedEnd: "0:00:26.159",
                start: "0:00:25.692",
                end: "0:00:26.159",
              },
              {
                adjustedStart: "0:00:28.962",
                adjustedEnd: "0:00:31.298",
                start: "0:00:28.962",
                end: "0:00:31.298",
              },
              {
                adjustedStart: "0:00:40.641",
                adjustedEnd: "0:00:41.575",
                start: "0:00:40.641",
                end: "0:00:41.575",
              },
              {
                adjustedStart: "0:00:42.042",
                adjustedEnd: "0:00:42.509",
                start: "0:00:42.042",
                end: "0:00:42.509",
              },
              {
                adjustedStart: "0:00:44.378",
                adjustedEnd: "0:00:46.246",
                start: "0:00:44.378",
                end: "0:00:46.246",
              },
              {
                adjustedStart: "0:00:48.115",
                adjustedEnd: "0:00:48.582",
                start: "0:00:48.115",
                end: "0:00:48.582",
              },
              {
                adjustedStart: "0:00:49.049",
                adjustedEnd: "0:00:49.983",
                start: "0:00:49.049",
                end: "0:00:49.983",
              },
              {
                adjustedStart: "0:00:50.45",
                adjustedEnd: "0:00:54.654",
                start: "0:00:50.45",
                end: "0:00:54.654",
              },
              {
                adjustedStart: "0:00:58.859",
                adjustedEnd: "0:00:59.326",
                start: "0:00:58.859",
                end: "0:00:59.326",
              },
              {
                adjustedStart: "0:00:59.793",
                adjustedEnd: "0:01:00.26",
                start: "0:00:59.793",
                end: "0:01:00.26",
              },
              {
                adjustedStart: "0:01:13.34",
                adjustedEnd: "0:01:13.807",
                start: "0:01:13.34",
                end: "0:01:13.807",
              },
              {
                adjustedStart: "0:01:16.61",
                adjustedEnd: "0:01:18.011",
                start: "0:01:16.61",
                end: "0:01:18.011",
              },
              {
                adjustedStart: "0:01:18.478",
                adjustedEnd: "0:01:18.945",
                start: "0:01:18.478",
                end: "0:01:18.945",
              },
              {
                adjustedStart: "0:01:19.413",
                adjustedEnd: "0:01:19.88",
                start: "0:01:19.413",
                end: "0:01:19.88",
              },
              {
                adjustedStart: "0:01:20.347",
                adjustedEnd: "0:01:21.281",
                start: "0:01:20.347",
                end: "0:01:21.281",
              },
              {
                adjustedStart: "0:01:22.215",
                adjustedEnd: "0:01:23.15",
                start: "0:01:22.215",
                end: "0:01:23.15",
              },
              {
                adjustedStart: "0:01:25.953",
                adjustedEnd: "0:01:25.986",
                start: "0:01:25.953",
                end: "0:01:25.986",
              },
            ],
          },
          {
            id: 19,
            text: "36",
            confidence: 0.324,
            left: 0,
            top: 211,
            width: 26,
            height: 23,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:01:22.215",
                adjustedEnd: "0:01:22.682",
                start: "0:01:22.215",
                end: "0:01:22.682",
              },
            ],
          },
        ],
        keywords: [
          {
            id: 1,
            text: "estimated net",
            confidence: 0.9975,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:48.582",
                adjustedEnd: "0:00:49.049",
                start: "0:00:48.582",
                end: "0:00:49.049",
              },
              {
                adjustedStart: "0:00:49.049",
                adjustedEnd: "0:00:49.516",
                start: "0:00:49.049",
                end: "0:00:49.516",
              },
            ],
          },
          {
            id: 2,
            text: "bill gates",
            confidence: 0.9793,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:12.58",
                adjustedEnd: "0:00:16.79",
                start: "0:00:12.58",
                end: "0:00:16.79",
              },
              {
                adjustedStart: "0:01:19.94",
                adjustedEnd: "0:01:21.46",
                start: "0:01:19.94",
                end: "0:01:21.46",
              },
            ],
          },
          {
            id: 3,
            text: "gates",
            confidence: 0.8041,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:12.58",
                adjustedEnd: "0:00:16.79",
                start: "0:00:12.58",
                end: "0:00:16.79",
              },
              {
                adjustedStart: "0:01:19.94",
                adjustedEnd: "0:01:21.46",
                start: "0:01:19.94",
                end: "0:01:21.46",
              },
              {
                adjustedStart: "0:00:03.27",
                adjustedEnd: "0:00:04.204",
                start: "0:00:03.27",
                end: "0:00:04.204",
              },
            ],
          },
          {
            id: 4,
            text: "world",
            confidence: 0.7514,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:05.58",
                adjustedEnd: "0:00:12.58",
                start: "0:00:05.58",
                end: "0:00:12.58",
              },
              {
                adjustedStart: "0:00:42.58",
                adjustedEnd: "0:00:49.85",
                start: "0:00:42.58",
                end: "0:00:49.85",
              },
              {
                adjustedStart: "0:01:01.56",
                adjustedEnd: "0:01:06.32",
                start: "0:01:01.56",
                end: "0:01:06.32",
              },
            ],
          },
          {
            id: 5,
            text: "bill",
            confidence: 0.7514,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:12.58",
                adjustedEnd: "0:00:16.79",
                start: "0:00:12.58",
                end: "0:00:16.79",
              },
              {
                adjustedStart: "0:00:22.39",
                adjustedEnd: "0:00:26.59",
                start: "0:00:22.39",
                end: "0:00:26.59",
              },
              {
                adjustedStart: "0:00:42.58",
                adjustedEnd: "0:00:49.85",
                start: "0:00:42.58",
                end: "0:00:49.85",
              },
              {
                adjustedStart: "0:01:10.16",
                adjustedEnd: "0:01:13.86",
                start: "0:01:10.16",
                end: "0:01:13.86",
              },
              {
                adjustedStart: "0:01:19.94",
                adjustedEnd: "0:01:21.46",
                start: "0:01:19.94",
                end: "0:01:21.46",
              },
              {
                adjustedStart: "0:01:15.676",
                adjustedEnd: "0:01:16.143",
                start: "0:01:15.676",
                end: "0:01:16.143",
              },
              {
                adjustedStart: "0:01:22.683",
                adjustedEnd: "0:01:23.15",
                start: "0:01:22.683",
                end: "0:01:23.15",
              },
            ],
          },
          {
            id: 6,
            text: "microsoft",
            confidence: 0.7514,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:16.79",
                adjustedEnd: "0:00:22.39",
                start: "0:00:16.79",
                end: "0:00:22.39",
              },
              {
                adjustedStart: "0:00:53.08",
                adjustedEnd: "0:00:59.14",
                start: "0:00:53.08",
                end: "0:00:59.14",
              },
              {
                adjustedStart: "0:00:21.955",
                adjustedEnd: "0:00:22.422",
                start: "0:00:21.955",
                end: "0:00:22.422",
              },
            ],
          },
          {
            id: 7,
            text: "money",
            confidence: 0.6211,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:36.92",
                adjustedEnd: "0:00:39.34",
                start: "0:00:36.92",
                end: "0:00:39.34",
              },
              {
                adjustedStart: "0:00:00",
                adjustedEnd: "0:00:00.467",
                start: "0:00:00",
                end: "0:00:00.467",
              },
            ],
          },
          {
            id: 8,
            text: "conclusions",
            confidence: 0.6211,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:32.699",
                adjustedEnd: "0:00:36.699",
                start: "0:00:32.699",
                end: "0:00:36.699",
              },
              {
                adjustedStart: "0:00:31.298",
                adjustedEnd: "0:00:32.699",
                start: "0:00:31.298",
                end: "0:00:32.699",
              },
            ],
          },
          {
            id: 9,
            text: "order",
            confidence: 0.6211,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:32.232",
                adjustedEnd: "0:00:36.699",
                start: "0:00:32.232",
                end: "0:00:36.699",
              },
              {
                adjustedStart: "0:00:31.298",
                adjustedEnd: "0:00:32.232",
                start: "0:00:31.298",
                end: "0:00:32.232",
              },
            ],
          },
        ],
        topics: [
          {
            id: 1,
            name: "Bill Gates",
            referenceId: "Business/Charity and Charities/Bill Gates",
            referenceType: "VideoIndexer",
            iptcName: "social issue/charity",
            confidence: 1,
            iabName: "Business and Finance",
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:05.58",
                adjustedEnd: "0:01:22.61",
                start: "0:00:05.58",
                end: "0:01:22.61",
              },
            ],
          },
          {
            id: 2,
            name: "Wealthy People and Families",
            referenceId: "Wealthy People and Families",
            referenceType: "VideoIndexer",
            confidence: 0.9405,
            iabName: null,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:05.58",
                adjustedEnd: "0:01:22.61",
                start: "0:00:05.58",
                end: "0:01:22.61",
              },
            ],
          },
          {
            id: 3,
            name: "Businesspeople",
            referenceId: "Category:Businesspeople",
            referenceUrl:
              "https://en.wikipedia.org/wiki/Category:Businesspeople",
            referenceType: "Wikipedia",
            confidence: 0.735,
            iabName: null,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:04.738",
                adjustedEnd: "0:01:23.15",
                start: "0:00:04.738",
                end: "0:01:23.15",
              },
            ],
          },
          {
            id: 4,
            name: "Billionaires",
            referenceId: "Category:Billionaires",
            referenceUrl: "https://en.wikipedia.org/wiki/Category:Billionaires",
            referenceType: "Wikipedia",
            confidence: 0.7166,
            iabName: null,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:04.738",
                adjustedEnd: "0:01:23.15",
                start: "0:00:04.738",
                end: "0:01:23.15",
              },
            ],
          },
          {
            id: 5,
            name: "Evidence law",
            referenceId: "Category:Evidence_law",
            referenceUrl: "https://en.wikipedia.org/wiki/Category:Evidence_law",
            referenceType: "Wikipedia",
            confidence: 0.6897,
            iabName: null,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:31.298",
                adjustedEnd: "0:00:36.699",
                start: "0:00:31.298",
                end: "0:00:36.699",
              },
            ],
          },
          {
            id: 6,
            name: "Philosophy of law",
            referenceId: "Category:Philosophy_of_law",
            referenceUrl:
              "https://en.wikipedia.org/wiki/Category:Philosophy_of_law",
            referenceType: "Wikipedia",
            confidence: 0.6807,
            iabName: null,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:31.298",
                adjustedEnd: "0:00:36.699",
                start: "0:00:31.298",
                end: "0:00:36.699",
              },
            ],
          },
          {
            id: 7,
            name: "Songs",
            referenceId: "Category:Songs",
            referenceUrl: "https://en.wikipedia.org/wiki/Category:Songs",
            referenceType: "Wikipedia",
            confidence: 0.6785,
            iabName: null,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:05.58",
                adjustedEnd: "0:00:12.58",
                start: "0:00:05.58",
                end: "0:00:12.58",
              },
            ],
          },
          {
            id: 8,
            name: "Singles",
            referenceId: "Category:Singles",
            referenceUrl: "https://en.wikipedia.org/wiki/Category:Singles",
            referenceType: "Wikipedia",
            confidence: 0.6785,
            iabName: null,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:05.58",
                adjustedEnd: "0:00:12.58",
                start: "0:00:05.58",
                end: "0:00:12.58",
              },
            ],
          },
          {
            id: 9,
            name: "Melinda Gates Foundation",
            referenceId: "Melinda Gates Foundation",
            referenceType: "VideoIndexer",
            confidence: 0.6725,
            iabName: null,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:05.58",
                adjustedEnd: "0:00:26.59",
                start: "0:00:05.58",
                end: "0:00:26.59",
              },
              {
                adjustedStart: "0:00:34.9",
                adjustedEnd: "0:01:22.61",
                start: "0:00:34.9",
                end: "0:01:22.61",
              },
            ],
          },
          {
            id: 10,
            name: "Charity and Charities",
            referenceId: "Business/Charity and Charities",
            referenceType: "VideoIndexer",
            iptcName: "social issue/charity",
            confidence: 0.586,
            iabName: "Business and Finance",
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:42.58",
                adjustedEnd: "0:01:22.61",
                start: "0:00:42.58",
                end: "0:01:22.61",
              },
            ],
          },
          {
            id: 11,
            name: "Philanthropy",
            referenceId: "Philanthropy",
            referenceType: "VideoIndexer",
            confidence: 0.5331,
            iabName: null,
            language: "en-US",
            instances: [
              {
                adjustedStart: "0:00:05.58",
                adjustedEnd: "0:00:26.59",
                start: "0:00:05.58",
                end: "0:00:26.59",
              },
              {
                adjustedStart: "0:00:42.58",
                adjustedEnd: "0:01:19.94",
                start: "0:00:42.58",
                end: "0:01:19.94",
              },
            ],
          },
        ],
        faces: [
          {
            id: 1496,
            name: "Bill Gates",
            confidence: 0.9761,
            description:
              "William Henry Gates III is an American business magnate, software developer, investor, and philanthropist. He is best known as the co-founder of Microsoft Corporation. During his career at Microsoft, Gates held the positions of chairman, chief executive officer, president and chief software architect, while …",
            thumbnailId: "349dcae1-4831-4ac9-b3c3-8e9936331864",
            referenceId: "0d47c987-0042-5576-15e8-97af601614fa",
            referenceType: "Bing",
            title: "Founder of Microsoft",
            imageUrl:
              "https://www.bing.com/th?id=AMMS_285d392b6686bde24d3bc6330c878f44&c=12&rs=1&qlt=80&cdv=1&pid=16.1",
            thumbnails: [
              {
                id: "03fd092d-78ab-44b5-88d3-10f1d91d0a95",
                fileName:
                  "FaceInstanceThumbnail_03fd092d-78ab-44b5-88d3-10f1d91d0a95.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:04.738",
                    adjustedEnd: "0:00:04.771",
                    start: "0:00:04.738",
                    end: "0:00:04.771",
                  },
                ],
              },
              {
                id: "590d0d26-3d34-4795-9276-0059cd18759c",
                fileName:
                  "FaceInstanceThumbnail_590d0d26-3d34-4795-9276-0059cd18759c.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:10.143",
                    adjustedEnd: "0:00:10.176",
                    start: "0:00:10.143",
                    end: "0:00:10.176",
                  },
                ],
              },
              {
                id: "fd924c27-4385-48f7-ac7e-2b52ae075137",
                fileName:
                  "FaceInstanceThumbnail_fd924c27-4385-48f7-ac7e-2b52ae075137.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:12.613",
                    adjustedEnd: "0:00:12.646",
                    start: "0:00:12.613",
                    end: "0:00:12.646",
                  },
                ],
              },
              {
                id: "d82ee3dd-bdb7-4717-8683-8b468fe20fda",
                fileName:
                  "FaceInstanceThumbnail_d82ee3dd-bdb7-4717-8683-8b468fe20fda.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:28.095",
                    adjustedEnd: "0:00:28.128",
                    start: "0:00:28.095",
                    end: "0:00:28.128",
                  },
                ],
              },
              {
                id: "dcc17044-00ff-449f-ad0b-5588ceb11db5",
                fileName:
                  "FaceInstanceThumbnail_dcc17044-00ff-449f-ad0b-5588ceb11db5.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:33.1",
                    adjustedEnd: "0:00:33.133",
                    start: "0:00:33.1",
                    end: "0:00:33.133",
                  },
                ],
              },
              {
                id: "fb0ddcd0-07ec-4260-9cc4-a14aeb06ed38",
                fileName:
                  "FaceInstanceThumbnail_fb0ddcd0-07ec-4260-9cc4-a14aeb06ed38.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:38.105",
                    adjustedEnd: "0:00:38.138",
                    start: "0:00:38.105",
                    end: "0:00:38.138",
                  },
                ],
              },
              {
                id: "349dcae1-4831-4ac9-b3c3-8e9936331864",
                fileName:
                  "FaceInstanceThumbnail_349dcae1-4831-4ac9-b3c3-8e9936331864.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:41.041",
                    adjustedEnd: "0:00:41.074",
                    start: "0:00:41.041",
                    end: "0:00:41.074",
                  },
                ],
              },
              {
                id: "c67ed55c-0edc-44d1-bce3-702ea297fd1a",
                fileName:
                  "FaceInstanceThumbnail_c67ed55c-0edc-44d1-bce3-702ea297fd1a.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:44.044",
                    adjustedEnd: "0:00:44.077",
                    start: "0:00:44.044",
                    end: "0:00:44.077",
                  },
                ],
              },
              {
                id: "57e6894b-9931-432e-a347-b3755335a506",
                fileName:
                  "FaceInstanceThumbnail_57e6894b-9931-432e-a347-b3755335a506.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:46.046",
                    adjustedEnd: "0:00:46.079",
                    start: "0:00:46.046",
                    end: "0:00:46.079",
                  },
                ],
              },
              {
                id: "7f560872-74a4-4607-81e8-e7f6a073b0af",
                fileName:
                  "FaceInstanceThumbnail_7f560872-74a4-4607-81e8-e7f6a073b0af.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:48.115",
                    adjustedEnd: "0:00:48.148",
                    start: "0:00:48.115",
                    end: "0:00:48.148",
                  },
                ],
              },
              {
                id: "4b500a68-58f3-4df0-9779-aa1586bc2c6e",
                fileName:
                  "FaceInstanceThumbnail_4b500a68-58f3-4df0-9779-aa1586bc2c6e.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:53.12",
                    adjustedEnd: "0:00:53.153",
                    start: "0:00:53.12",
                    end: "0:00:53.153",
                  },
                ],
              },
              {
                id: "798de9ff-3d29-4eab-8f4f-55d9e579c2dc",
                fileName:
                  "FaceInstanceThumbnail_798de9ff-3d29-4eab-8f4f-55d9e579c2dc.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:08.135",
                    adjustedEnd: "0:01:08.168",
                    start: "0:01:08.135",
                    end: "0:01:08.168",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["03fd092d-78ab-44b5-88d3-10f1d91d0a95"],
                adjustedStart: "0:00:04.738",
                adjustedEnd: "0:00:06.206",
                start: "0:00:04.738",
                end: "0:00:06.206",
              },
              {
                adjustedStart: "0:00:08.809",
                adjustedEnd: "0:00:09.442",
                start: "0:00:08.809",
                end: "0:00:09.442",
              },
              {
                thumbnailsIds: ["590d0d26-3d34-4795-9276-0059cd18759c"],
                adjustedStart: "0:00:10.143",
                adjustedEnd: "0:00:11.778",
                start: "0:00:10.143",
                end: "0:00:11.778",
              },
              {
                thumbnailsIds: ["fd924c27-4385-48f7-ac7e-2b52ae075137"],
                adjustedStart: "0:00:11.945",
                adjustedEnd: "0:00:14.414",
                start: "0:00:11.945",
                end: "0:00:14.414",
              },
              {
                thumbnailsIds: ["d82ee3dd-bdb7-4717-8683-8b468fe20fda"],
                adjustedStart: "0:00:26.493",
                adjustedEnd: "0:00:29.696",
                start: "0:00:26.493",
                end: "0:00:29.696",
              },
              {
                thumbnailsIds: ["dcc17044-00ff-449f-ad0b-5588ceb11db5"],
                adjustedStart: "0:00:33.1",
                adjustedEnd: "0:00:36.202",
                start: "0:00:33.1",
                end: "0:00:36.202",
              },
              {
                thumbnailsIds: ["fb0ddcd0-07ec-4260-9cc4-a14aeb06ed38"],
                adjustedStart: "0:00:36.57",
                adjustedEnd: "0:00:39.839",
                start: "0:00:36.57",
                end: "0:00:39.839",
              },
              {
                thumbnailsIds: ["349dcae1-4831-4ac9-b3c3-8e9936331864"],
                adjustedStart: "0:00:39.84",
                adjustedEnd: "0:00:42.943",
                start: "0:00:39.84",
                end: "0:00:42.943",
              },
              {
                adjustedStart: "0:00:42.976",
                adjustedEnd: "0:00:43.009",
                start: "0:00:42.976",
                end: "0:00:43.009",
              },
              {
                adjustedStart: "0:00:43.043",
                adjustedEnd: "0:00:43.076",
                start: "0:00:43.043",
                end: "0:00:43.076",
              },
              {
                adjustedStart: "0:00:43.176",
                adjustedEnd: "0:00:43.209",
                start: "0:00:43.176",
                end: "0:00:43.209",
              },
              {
                adjustedStart: "0:00:43.243",
                adjustedEnd: "0:00:43.276",
                start: "0:00:43.243",
                end: "0:00:43.276",
              },
              {
                adjustedStart: "0:00:43.31",
                adjustedEnd: "0:00:43.343",
                start: "0:00:43.31",
                end: "0:00:43.343",
              },
              {
                thumbnailsIds: ["c67ed55c-0edc-44d1-bce3-702ea297fd1a"],
                adjustedStart: "0:00:43.377",
                adjustedEnd: "0:00:45.345",
                start: "0:00:43.377",
                end: "0:00:45.345",
              },
              {
                thumbnailsIds: ["57e6894b-9931-432e-a347-b3755335a506"],
                adjustedStart: "0:00:45.379",
                adjustedEnd: "0:00:47.948",
                start: "0:00:45.379",
                end: "0:00:47.948",
              },
              {
                thumbnailsIds: ["7f560872-74a4-4607-81e8-e7f6a073b0af"],
                adjustedStart: "0:00:47.981",
                adjustedEnd: "0:00:50.884",
                start: "0:00:47.981",
                end: "0:00:50.884",
              },
              {
                thumbnailsIds: ["4b500a68-58f3-4df0-9779-aa1586bc2c6e"],
                adjustedStart: "0:00:50.918",
                adjustedEnd: "0:00:53.219",
                start: "0:00:50.918",
                end: "0:00:53.219",
              },
              {
                adjustedStart: "0:00:53.253",
                adjustedEnd: "0:00:54.12",
                start: "0:00:53.253",
                end: "0:00:54.12",
              },
              {
                adjustedStart: "0:01:00.594",
                adjustedEnd: "0:01:01.828",
                start: "0:01:00.594",
                end: "0:01:01.828",
              },
              {
                thumbnailsIds: ["798de9ff-3d29-4eab-8f4f-55d9e579c2dc"],
                adjustedStart: "0:01:07.935",
                adjustedEnd: "0:01:09.035",
                start: "0:01:07.935",
                end: "0:01:09.035",
              },
              {
                adjustedStart: "0:01:09.069",
                adjustedEnd: "0:01:09.169",
                start: "0:01:09.069",
                end: "0:01:09.169",
              },
              {
                adjustedStart: "0:01:09.269",
                adjustedEnd: "0:01:09.302",
                start: "0:01:09.269",
                end: "0:01:09.302",
              },
              {
                adjustedStart: "0:01:09.336",
                adjustedEnd: "0:01:09.369",
                start: "0:01:09.336",
                end: "0:01:09.369",
              },
              {
                adjustedStart: "0:01:09.403",
                adjustedEnd: "0:01:09.436",
                start: "0:01:09.403",
                end: "0:01:09.436",
              },
              {
                adjustedStart: "0:01:09.469",
                adjustedEnd: "0:01:09.502",
                start: "0:01:09.469",
                end: "0:01:09.502",
              },
              {
                adjustedStart: "0:01:09.536",
                adjustedEnd: "0:01:09.569",
                start: "0:01:09.536",
                end: "0:01:09.569",
              },
              {
                adjustedStart: "0:01:09.67",
                adjustedEnd: "0:01:09.703",
                start: "0:01:09.67",
                end: "0:01:09.703",
              },
              {
                adjustedStart: "0:01:09.736",
                adjustedEnd: "0:01:09.769",
                start: "0:01:09.736",
                end: "0:01:09.769",
              },
              {
                adjustedStart: "0:01:09.803",
                adjustedEnd: "0:01:09.836",
                start: "0:01:09.803",
                end: "0:01:09.836",
              },
              {
                adjustedStart: "0:01:11.738",
                adjustedEnd: "0:01:12.372",
                start: "0:01:11.738",
                end: "0:01:12.372",
              },
              {
                adjustedStart: "0:01:12.406",
                adjustedEnd: "0:01:13.073",
                start: "0:01:12.406",
                end: "0:01:13.073",
              },
              {
                adjustedStart: "0:01:15.876",
                adjustedEnd: "0:01:19.179",
                start: "0:01:15.876",
                end: "0:01:19.179",
              },
            ],
          },
          {
            id: 1979,
            name: "Melinda Gates",
            confidence: 0.9999,
            description:
              "Melinda Ann Gates DBE is an American philanthropist and a former general manager at Microsoft. In 2000, she co-founded the Bill & Melinda Gates Foundation with her husband Bill Gates, the world's largest private charitable organization. Ms Melinda Gates has consistently been ranked as one of the …",
            thumbnailId: "895c59c2-06f7-44cb-be60-6a3a1d95a4c5",
            referenceId: "a77fb52f-e1a5-59a3-b102-1cb1a0cefc0b",
            referenceType: "Bing",
            title: "Philanthropist",
            imageUrl:
              "https://www.bing.com/th?id=AMMS_b27eeb45658f5debc1ac871451497c81&c=12&rs=1&qlt=80&cdv=1&pid=16.2",
            thumbnails: [
              {
                id: "dc25f582-521a-41f0-84ab-1555e7c3a265",
                fileName:
                  "FaceInstanceThumbnail_dc25f582-521a-41f0-84ab-1555e7c3a265.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:08.135",
                    adjustedEnd: "0:01:08.168",
                    start: "0:01:08.135",
                    end: "0:01:08.168",
                  },
                ],
              },
              {
                id: "895c59c2-06f7-44cb-be60-6a3a1d95a4c5",
                fileName:
                  "FaceInstanceThumbnail_895c59c2-06f7-44cb-be60-6a3a1d95a4c5.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:13.073",
                    adjustedEnd: "0:01:13.106",
                    start: "0:01:13.073",
                    end: "0:01:13.106",
                  },
                ],
              },
              {
                id: "2ec239a9-5f04-4067-8e95-d9f6b0f97b88",
                fileName:
                  "FaceInstanceThumbnail_2ec239a9-5f04-4067-8e95-d9f6b0f97b88.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:13.14",
                    adjustedEnd: "0:01:13.173",
                    start: "0:01:13.14",
                    end: "0:01:13.173",
                  },
                ],
              },
              {
                id: "42479555-baa7-4dcb-86c6-15cdda477b4b",
                fileName:
                  "FaceInstanceThumbnail_42479555-baa7-4dcb-86c6-15cdda477b4b.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:15.609",
                    adjustedEnd: "0:01:15.642",
                    start: "0:01:15.609",
                    end: "0:01:15.642",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["dc25f582-521a-41f0-84ab-1555e7c3a265"],
                adjustedStart: "0:01:07.935",
                adjustedEnd: "0:01:09.035",
                start: "0:01:07.935",
                end: "0:01:09.035",
              },
              {
                adjustedStart: "0:01:11.738",
                adjustedEnd: "0:01:12.372",
                start: "0:01:11.738",
                end: "0:01:12.372",
              },
              {
                thumbnailsIds: [
                  "895c59c2-06f7-44cb-be60-6a3a1d95a4c5",
                  "2ec239a9-5f04-4067-8e95-d9f6b0f97b88",
                ],
                adjustedStart: "0:01:13.073",
                adjustedEnd: "0:01:15.308",
                start: "0:01:13.073",
                end: "0:01:15.308",
              },
              {
                thumbnailsIds: ["42479555-baa7-4dcb-86c6-15cdda477b4b"],
                adjustedStart: "0:01:15.342",
                adjustedEnd: "0:01:16.71",
                start: "0:01:15.342",
                end: "0:01:16.71",
              },
            ],
          },
          {
            id: 1960,
            name: "Michael Bloomberg",
            confidence: 1,
            description:
              "Michael Rubens Bloomberg is an American politician, businessman, and author. He is the co-founder, CEO, and majority owner of Bloomberg L.P. He was mayor of New York City from 2002 to 2013. He is a candidate in the Democratic Party primaries for the 2020 United States presidential …",
            thumbnailId: "439fbdc3-f40e-42bb-8861-ac6f9c1560b1",
            referenceId: "79464325-4ebf-5477-3c6f-975a3cb4d4a4",
            referenceType: "Bing",
            title: "Former Mayor of New York City",
            imageUrl:
              "https://www.bing.com/th?id=AMMS_8692e2e067567b1afe4c5d8d8756f2c0&c=12&rs=1&qlt=80&cdv=1&pid=16.2",
            thumbnails: [
              {
                id: "439fbdc3-f40e-42bb-8861-ac6f9c1560b1",
                fileName:
                  "FaceInstanceThumbnail_439fbdc3-f40e-42bb-8861-ac6f9c1560b1.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:12.606",
                    adjustedEnd: "0:01:12.639",
                    start: "0:01:12.606",
                    end: "0:01:12.639",
                  },
                ],
              },
              {
                id: "90d45230-a9fd-47b1-9803-ac695d36dbfd",
                fileName:
                  "FaceInstanceThumbnail_90d45230-a9fd-47b1-9803-ac695d36dbfd.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:13.14",
                    adjustedEnd: "0:01:13.173",
                    start: "0:01:13.14",
                    end: "0:01:13.173",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:11.738",
                adjustedEnd: "0:01:12.372",
                start: "0:01:11.738",
                end: "0:01:12.372",
              },
              {
                thumbnailsIds: ["439fbdc3-f40e-42bb-8861-ac6f9c1560b1"],
                adjustedStart: "0:01:12.406",
                adjustedEnd: "0:01:13.039",
                start: "0:01:12.406",
                end: "0:01:13.039",
              },
              {
                thumbnailsIds: ["90d45230-a9fd-47b1-9803-ac695d36dbfd"],
                adjustedStart: "0:01:13.073",
                adjustedEnd: "0:01:13.64",
                start: "0:01:13.073",
                end: "0:01:13.64",
              },
            ],
          },
          {
            id: 1921,
            name: "Warren Buffett",
            confidence: 0.9971,
            description:
              "Warren Edward Buffett is an American investor, business tycoon, and philanthropist, who is the chairman and CEO of Berkshire Hathaway. He is considered one of the most successful investors in the world and has a net worth of US$71.8 billion as of July 2020, making him the fourth-wealthiest …",
            thumbnailId: "b5783c02-ce6a-450a-a65e-f554a0e76ffc",
            referenceId: "f3774cb6-9647-541c-e99c-99949e3a2142",
            referenceType: "Bing",
            title: "Chairman and CEO of Berkshire Hathaway",
            imageUrl:
              "https://www.bing.com/th?id=AMMS_69a8bfe5e5f1f574a0006cc879ef16ad&c=12&rs=1&qlt=80&cdv=1&pid=16.1",
            thumbnails: [
              {
                id: "b5783c02-ce6a-450a-a65e-f554a0e76ffc",
                fileName:
                  "FaceInstanceThumbnail_b5783c02-ce6a-450a-a65e-f554a0e76ffc.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:10.203",
                    adjustedEnd: "0:01:10.236",
                    start: "0:01:10.203",
                    end: "0:01:10.236",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["b5783c02-ce6a-450a-a65e-f554a0e76ffc"],
                adjustedStart: "0:01:09.937",
                adjustedEnd: "0:01:11.738",
                start: "0:01:09.937",
                end: "0:01:11.738",
              },
            ],
          },
          {
            id: 1228,
            name: "Unknown #4",
            confidence: 0,
            description: null,
            thumbnailId: "7e67f57d-8383-4cf1-a201-5c060e21d35a",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "c5c1cd25-2c9a-487d-9d57-f0c91b52e8df",
                fileName:
                  "FaceInstanceThumbnail_c5c1cd25-2c9a-487d-9d57-f0c91b52e8df.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:23.09",
                    adjustedEnd: "0:00:23.123",
                    start: "0:00:23.09",
                    end: "0:00:23.123",
                  },
                ],
              },
              {
                id: "7e67f57d-8383-4cf1-a201-5c060e21d35a",
                fileName:
                  "FaceInstanceThumbnail_7e67f57d-8383-4cf1-a201-5c060e21d35a.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:24.491",
                    adjustedEnd: "0:00:24.524",
                    start: "0:00:24.491",
                    end: "0:00:24.524",
                  },
                ],
              },
              {
                id: "1b3dc07d-ebe5-4e5d-acad-9454e15965cc",
                fileName:
                  "FaceInstanceThumbnail_1b3dc07d-ebe5-4e5d-acad-9454e15965cc.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:00.46",
                    adjustedEnd: "0:01:00.493",
                    start: "0:01:00.46",
                    end: "0:01:00.493",
                  },
                ],
              },
              {
                id: "9f2f3259-116d-4166-9fc3-8b67af2ba38c",
                fileName:
                  "FaceInstanceThumbnail_9f2f3259-116d-4166-9fc3-8b67af2ba38c.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:01.862",
                    adjustedEnd: "0:01:01.895",
                    start: "0:01:01.862",
                    end: "0:01:01.895",
                  },
                ],
              },
              {
                id: "7a5989de-30ed-48dc-9746-24eb2b40ac3e",
                fileName:
                  "FaceInstanceThumbnail_7a5989de-30ed-48dc-9746-24eb2b40ac3e.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:03.13",
                    adjustedEnd: "0:01:03.163",
                    start: "0:01:03.13",
                    end: "0:01:03.163",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: [
                  "c5c1cd25-2c9a-487d-9d57-f0c91b52e8df",
                  "7e67f57d-8383-4cf1-a201-5c060e21d35a",
                ],
                adjustedStart: "0:00:23.09",
                adjustedEnd: "0:00:25.859",
                start: "0:00:23.09",
                end: "0:00:25.859",
              },
              {
                thumbnailsIds: ["1b3dc07d-ebe5-4e5d-acad-9454e15965cc"],
                adjustedStart: "0:01:00.46",
                adjustedEnd: "0:01:00.594",
                start: "0:01:00.46",
                end: "0:01:00.594",
              },
              {
                thumbnailsIds: [
                  "9f2f3259-116d-4166-9fc3-8b67af2ba38c",
                  "7a5989de-30ed-48dc-9746-24eb2b40ac3e",
                ],
                adjustedStart: "0:01:01.862",
                adjustedEnd: "0:01:03.396",
                start: "0:01:01.862",
                end: "0:01:03.396",
              },
            ],
          },
          {
            id: 1229,
            name: "Unknown #3",
            confidence: 0,
            description: null,
            thumbnailId: "bc8606bf-c1d2-4ec1-9ba1-3cb8bc185f4f",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "0ab73d61-720c-497c-8c75-0ddaea388639",
                fileName:
                  "FaceInstanceThumbnail_0ab73d61-720c-497c-8c75-0ddaea388639.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:23.09",
                    adjustedEnd: "0:00:23.123",
                    start: "0:00:23.09",
                    end: "0:00:23.123",
                  },
                ],
              },
              {
                id: "bc8606bf-c1d2-4ec1-9ba1-3cb8bc185f4f",
                fileName:
                  "FaceInstanceThumbnail_bc8606bf-c1d2-4ec1-9ba1-3cb8bc185f4f.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:24.224",
                    adjustedEnd: "0:00:24.257",
                    start: "0:00:24.224",
                    end: "0:00:24.257",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: [
                  "0ab73d61-720c-497c-8c75-0ddaea388639",
                  "bc8606bf-c1d2-4ec1-9ba1-3cb8bc185f4f",
                ],
                adjustedStart: "0:00:23.09",
                adjustedEnd: "0:00:25.859",
                start: "0:00:23.09",
                end: "0:00:25.859",
              },
            ],
          },
          {
            id: 1226,
            name: "Unknown #1",
            confidence: 0,
            description: null,
            thumbnailId: "ad77f6cf-d883-4563-807c-19b20dcf5b14",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "16f2620f-cb2f-44d1-a65b-76eb359b19be",
                fileName:
                  "FaceInstanceThumbnail_16f2620f-cb2f-44d1-a65b-76eb359b19be.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:23.09",
                    adjustedEnd: "0:00:23.123",
                    start: "0:00:23.09",
                    end: "0:00:23.123",
                  },
                ],
              },
              {
                id: "ad77f6cf-d883-4563-807c-19b20dcf5b14",
                fileName:
                  "FaceInstanceThumbnail_ad77f6cf-d883-4563-807c-19b20dcf5b14.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:23.156",
                    adjustedEnd: "0:00:23.189",
                    start: "0:00:23.156",
                    end: "0:00:23.189",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: [
                  "16f2620f-cb2f-44d1-a65b-76eb359b19be",
                  "ad77f6cf-d883-4563-807c-19b20dcf5b14",
                ],
                adjustedStart: "0:00:23.09",
                adjustedEnd: "0:00:25.859",
                start: "0:00:23.09",
                end: "0:00:25.859",
              },
            ],
          },
          {
            id: 1227,
            name: "Unknown #2",
            confidence: 0,
            description: null,
            thumbnailId: "cc63943b-e163-4660-8031-6e01445c0244",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "2cb2a834-79d4-4298-8702-e9e210fa5ad0",
                fileName:
                  "FaceInstanceThumbnail_2cb2a834-79d4-4298-8702-e9e210fa5ad0.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:23.09",
                    adjustedEnd: "0:00:23.123",
                    start: "0:00:23.09",
                    end: "0:00:23.123",
                  },
                ],
              },
              {
                id: "cc63943b-e163-4660-8031-6e01445c0244",
                fileName:
                  "FaceInstanceThumbnail_cc63943b-e163-4660-8031-6e01445c0244.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:25.025",
                    adjustedEnd: "0:00:25.058",
                    start: "0:00:25.025",
                    end: "0:00:25.058",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: [
                  "2cb2a834-79d4-4298-8702-e9e210fa5ad0",
                  "cc63943b-e163-4660-8031-6e01445c0244",
                ],
                adjustedStart: "0:00:23.09",
                adjustedEnd: "0:00:25.859",
                start: "0:00:23.09",
                end: "0:00:25.859",
              },
            ],
          },
          {
            id: 1712,
            name: "Unknown #5",
            confidence: 0,
            description: null,
            thumbnailId: "182d6f42-f9bc-40a7-9c7b-bffba494ad84",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "182d6f42-f9bc-40a7-9c7b-bffba494ad84",
                fileName:
                  "FaceInstanceThumbnail_182d6f42-f9bc-40a7-9c7b-bffba494ad84.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:59.726",
                    adjustedEnd: "0:00:59.759",
                    start: "0:00:59.726",
                    end: "0:00:59.759",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["182d6f42-f9bc-40a7-9c7b-bffba494ad84"],
                adjustedStart: "0:00:59.526",
                adjustedEnd: "0:01:00.594",
                start: "0:00:59.526",
                end: "0:01:00.594",
              },
              {
                adjustedStart: "0:01:04.865",
                adjustedEnd: "0:01:06.066",
                start: "0:01:04.865",
                end: "0:01:06.066",
              },
            ],
          },
          {
            id: 1186,
            name: "Unknown #6",
            confidence: 0,
            description: null,
            thumbnailId: "55922db3-17a9-45fe-980a-4fa883e13ae9",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "55922db3-17a9-45fe-980a-4fa883e13ae9",
                fileName:
                  "FaceInstanceThumbnail_55922db3-17a9-45fe-980a-4fa883e13ae9.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:19.887",
                    adjustedEnd: "0:00:19.92",
                    start: "0:00:19.887",
                    end: "0:00:19.92",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:18.552",
                adjustedEnd: "0:00:19.653",
                start: "0:00:18.552",
                end: "0:00:19.653",
              },
              {
                thumbnailsIds: ["55922db3-17a9-45fe-980a-4fa883e13ae9"],
                adjustedStart: "0:00:19.686",
                adjustedEnd: "0:00:20.754",
                start: "0:00:19.686",
                end: "0:00:20.754",
              },
            ],
          },
          {
            id: 2123,
            name: "Unknown #7",
            confidence: 0,
            description: null,
            thumbnailId: "5958f8b1-e8f8-4f72-b323-3ca24f109ef1",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "5958f8b1-e8f8-4f72-b323-3ca24f109ef1",
                fileName:
                  "FaceInstanceThumbnail_5958f8b1-e8f8-4f72-b323-3ca24f109ef1.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:18.879",
                    adjustedEnd: "0:01:18.912",
                    start: "0:01:18.879",
                    end: "0:01:18.912",
                  },
                ],
              },
              {
                id: "dba09505-5c8e-4520-b912-a6e98608771d",
                fileName:
                  "FaceInstanceThumbnail_dba09505-5c8e-4520-b912-a6e98608771d.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:19.212",
                    adjustedEnd: "0:01:19.245",
                    start: "0:01:19.212",
                    end: "0:01:19.245",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: [
                  "5958f8b1-e8f8-4f72-b323-3ca24f109ef1",
                  "dba09505-5c8e-4520-b912-a6e98608771d",
                ],
                adjustedStart: "0:01:17.611",
                adjustedEnd: "0:01:19.646",
                start: "0:01:17.611",
                end: "0:01:19.646",
              },
            ],
          },
          {
            id: 1922,
            name: "Unknown #8",
            confidence: 0,
            description: null,
            thumbnailId: "afa4c937-9bb6-4103-aeec-b5bd2840c81f",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "afa4c937-9bb6-4103-aeec-b5bd2840c81f",
                fileName:
                  "FaceInstanceThumbnail_afa4c937-9bb6-4103-aeec-b5bd2840c81f.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:11.338",
                    adjustedEnd: "0:01:11.371",
                    start: "0:01:11.338",
                    end: "0:01:11.371",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["afa4c937-9bb6-4103-aeec-b5bd2840c81f"],
                adjustedStart: "0:01:09.937",
                adjustedEnd: "0:01:11.738",
                start: "0:01:09.937",
                end: "0:01:11.738",
              },
            ],
          },
          {
            id: 2028,
            name: "Unknown #9",
            confidence: 0,
            description: null,
            thumbnailId: "edd86114-e156-40af-8335-b6900f55671a",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "edd86114-e156-40af-8335-b6900f55671a",
                fileName:
                  "FaceInstanceThumbnail_edd86114-e156-40af-8335-b6900f55671a.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:15.075",
                    adjustedEnd: "0:01:15.108",
                    start: "0:01:15.075",
                    end: "0:01:15.108",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:09.603",
                adjustedEnd: "0:01:09.636",
                start: "0:01:09.603",
                end: "0:01:09.636",
              },
              {
                thumbnailsIds: ["edd86114-e156-40af-8335-b6900f55671a"],
                adjustedStart: "0:01:13.74",
                adjustedEnd: "0:01:15.475",
                start: "0:01:13.74",
                end: "0:01:15.475",
              },
            ],
          },
          {
            id: 1037,
            name: "Unknown #10",
            confidence: 0,
            description: null,
            thumbnailId: "7c6c0107-5528-4829-b7d5-9644e1026b5b",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "9c8d6c2c-180e-44c0-b581-479a2c474629",
                fileName:
                  "FaceInstanceThumbnail_9c8d6c2c-180e-44c0-b581-479a2c474629.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:10.143",
                    adjustedEnd: "0:00:10.176",
                    start: "0:00:10.143",
                    end: "0:00:10.176",
                  },
                ],
              },
              {
                id: "7c6c0107-5528-4829-b7d5-9644e1026b5b",
                fileName:
                  "FaceInstanceThumbnail_7c6c0107-5528-4829-b7d5-9644e1026b5b.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:11.144",
                    adjustedEnd: "0:00:11.177",
                    start: "0:00:11.144",
                    end: "0:00:11.177",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: [
                  "9c8d6c2c-180e-44c0-b581-479a2c474629",
                  "7c6c0107-5528-4829-b7d5-9644e1026b5b",
                ],
                adjustedStart: "0:00:10.143",
                adjustedEnd: "0:00:11.778",
                start: "0:00:10.143",
                end: "0:00:11.778",
              },
            ],
          },
          {
            id: 1756,
            name: "Unknown #11",
            confidence: 0,
            description: null,
            thumbnailId: "c490457a-a758-4cd8-9432-24cfbf2ba404",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "c490457a-a758-4cd8-9432-24cfbf2ba404",
                fileName:
                  "FaceInstanceThumbnail_c490457a-a758-4cd8-9432-24cfbf2ba404.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:02.663",
                    adjustedEnd: "0:01:02.696",
                    start: "0:01:02.663",
                    end: "0:01:02.696",
                  },
                ],
              },
              {
                id: "9a921fbd-b23c-4065-973d-05bded2c7bff",
                fileName:
                  "FaceInstanceThumbnail_9a921fbd-b23c-4065-973d-05bded2c7bff.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:03.13",
                    adjustedEnd: "0:01:03.163",
                    start: "0:01:03.13",
                    end: "0:01:03.163",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: [
                  "c490457a-a758-4cd8-9432-24cfbf2ba404",
                  "9a921fbd-b23c-4065-973d-05bded2c7bff",
                ],
                adjustedStart: "0:01:01.862",
                adjustedEnd: "0:01:03.396",
                start: "0:01:01.862",
                end: "0:01:03.396",
              },
            ],
          },
          {
            id: 2039,
            name: "Unknown #13",
            confidence: 0,
            description: null,
            thumbnailId: "4ab77a0f-6f9d-4572-8ea1-986774e94c7f",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "4ab77a0f-6f9d-4572-8ea1-986774e94c7f",
                fileName:
                  "FaceInstanceThumbnail_4ab77a0f-6f9d-4572-8ea1-986774e94c7f.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:14.408",
                    adjustedEnd: "0:01:14.441",
                    start: "0:01:14.408",
                    end: "0:01:14.441",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["4ab77a0f-6f9d-4572-8ea1-986774e94c7f"],
                adjustedStart: "0:01:13.874",
                adjustedEnd: "0:01:15.308",
                start: "0:01:13.874",
                end: "0:01:15.308",
              },
            ],
          },
          {
            id: 1718,
            name: "Unknown #14",
            confidence: 0,
            description: null,
            thumbnailId: "16409979-14b1-4192-aebd-e83858a90bfe",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "16409979-14b1-4192-aebd-e83858a90bfe",
                fileName:
                  "FaceInstanceThumbnail_16409979-14b1-4192-aebd-e83858a90bfe.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:00.994",
                    adjustedEnd: "0:01:01.027",
                    start: "0:01:00.994",
                    end: "0:01:01.027",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["16409979-14b1-4192-aebd-e83858a90bfe"],
                adjustedStart: "0:01:00.594",
                adjustedEnd: "0:01:01.828",
                start: "0:01:00.594",
                end: "0:01:01.828",
              },
            ],
          },
          {
            id: 1800,
            name: "Unknown #16",
            confidence: 0,
            description: null,
            thumbnailId: "857a7b0d-22f2-4b8b-bff5-75ba66240f54",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "857a7b0d-22f2-4b8b-bff5-75ba66240f54",
                fileName:
                  "FaceInstanceThumbnail_857a7b0d-22f2-4b8b-bff5-75ba66240f54.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:05.666",
                    adjustedEnd: "0:01:05.699",
                    start: "0:01:05.666",
                    end: "0:01:05.699",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["857a7b0d-22f2-4b8b-bff5-75ba66240f54"],
                adjustedStart: "0:01:04.865",
                adjustedEnd: "0:01:06.066",
                start: "0:01:04.865",
                end: "0:01:06.066",
              },
            ],
          },
          {
            id: 1801,
            name: "Unknown #17",
            confidence: 0,
            description: null,
            thumbnailId: "7c0c0fc9-c00f-454e-bb8b-409128c57ff3",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "7c0c0fc9-c00f-454e-bb8b-409128c57ff3",
                fileName:
                  "FaceInstanceThumbnail_7c0c0fc9-c00f-454e-bb8b-409128c57ff3.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:05.599",
                    adjustedEnd: "0:01:05.632",
                    start: "0:01:05.599",
                    end: "0:01:05.632",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["7c0c0fc9-c00f-454e-bb8b-409128c57ff3"],
                adjustedStart: "0:01:04.865",
                adjustedEnd: "0:01:06.066",
                start: "0:01:04.865",
                end: "0:01:06.066",
              },
            ],
          },
          {
            id: 1798,
            name: "Unknown #15",
            confidence: 0,
            description: null,
            thumbnailId: "16ba3b45-c881-4874-84a0-de192352e24b",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "16ba3b45-c881-4874-84a0-de192352e24b",
                fileName:
                  "FaceInstanceThumbnail_16ba3b45-c881-4874-84a0-de192352e24b.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:05.799",
                    adjustedEnd: "0:01:05.832",
                    start: "0:01:05.799",
                    end: "0:01:05.832",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["16ba3b45-c881-4874-84a0-de192352e24b"],
                adjustedStart: "0:01:04.865",
                adjustedEnd: "0:01:06.066",
                start: "0:01:04.865",
                end: "0:01:06.066",
              },
            ],
          },
          {
            id: 1152,
            name: "Unknown #18",
            confidence: 0,
            description: null,
            thumbnailId: "cf24de32-23b1-4d5f-ba73-2ac72e3e9a00",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "cf24de32-23b1-4d5f-ba73-2ac72e3e9a00",
                fileName:
                  "FaceInstanceThumbnail_cf24de32-23b1-4d5f-ba73-2ac72e3e9a00.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:19.419",
                    adjustedEnd: "0:00:19.452",
                    start: "0:00:19.419",
                    end: "0:00:19.452",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["cf24de32-23b1-4d5f-ba73-2ac72e3e9a00"],
                adjustedStart: "0:00:18.552",
                adjustedEnd: "0:00:19.653",
                start: "0:00:18.552",
                end: "0:00:19.653",
              },
            ],
          },
          {
            id: 1103,
            name: "Unknown #19",
            confidence: 0,
            description: null,
            thumbnailId: "4b36aa2d-baba-4b8f-a0af-fae3edd3c5df",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "4b36aa2d-baba-4b8f-a0af-fae3edd3c5df",
                fileName:
                  "FaceInstanceThumbnail_4b36aa2d-baba-4b8f-a0af-fae3edd3c5df.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:11.478",
                    adjustedEnd: "0:00:11.511",
                    start: "0:00:11.478",
                    end: "0:00:11.511",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["4b36aa2d-baba-4b8f-a0af-fae3edd3c5df"],
                adjustedStart: "0:00:11.144",
                adjustedEnd: "0:00:11.778",
                start: "0:00:11.144",
                end: "0:00:11.778",
              },
            ],
          },
          {
            id: 1126,
            name: "Unknown #20",
            confidence: 0,
            description: null,
            thumbnailId: "f2f2f897-d41a-4460-848c-e66942d2397a",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "f2f2f897-d41a-4460-848c-e66942d2397a",
                fileName:
                  "FaceInstanceThumbnail_f2f2f897-d41a-4460-848c-e66942d2397a.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:11.478",
                    adjustedEnd: "0:00:11.511",
                    start: "0:00:11.478",
                    end: "0:00:11.511",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["f2f2f897-d41a-4460-848c-e66942d2397a"],
                adjustedStart: "0:00:11.478",
                adjustedEnd: "0:00:11.778",
                start: "0:00:11.478",
                end: "0:00:11.778",
              },
            ],
          },
          {
            id: 1012,
            name: "Unknown #22",
            confidence: 0,
            description: null,
            thumbnailId: "5967173c-378d-4d8e-ac06-641dce5760ee",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "5967173c-378d-4d8e-ac06-641dce5760ee",
                fileName:
                  "FaceInstanceThumbnail_5967173c-378d-4d8e-ac06-641dce5760ee.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:06.74",
                    adjustedEnd: "0:00:06.773",
                    start: "0:00:06.74",
                    end: "0:00:06.773",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["5967173c-378d-4d8e-ac06-641dce5760ee"],
                adjustedStart: "0:00:06.74",
                adjustedEnd: "0:00:06.806",
                start: "0:00:06.74",
                end: "0:00:06.806",
              },
            ],
          },
          {
            id: 1917,
            name: "Unknown #24",
            confidence: 0,
            description: null,
            thumbnailId: "447736dd-a4ff-47af-88a5-c0f7f090981d",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "447736dd-a4ff-47af-88a5-c0f7f090981d",
                fileName:
                  "FaceInstanceThumbnail_447736dd-a4ff-47af-88a5-c0f7f090981d.jpg",
                instances: [
                  {
                    adjustedStart: "0:01:09.603",
                    adjustedEnd: "0:01:09.636",
                    start: "0:01:09.603",
                    end: "0:01:09.636",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["447736dd-a4ff-47af-88a5-c0f7f090981d"],
                adjustedStart: "0:01:09.603",
                adjustedEnd: "0:01:09.636",
                start: "0:01:09.603",
                end: "0:01:09.636",
              },
            ],
          },
          {
            id: 1549,
            name: "Unknown #23",
            confidence: 0,
            description: null,
            thumbnailId: "3b731218-ef65-45b3-918b-06bda159a3db",
            title: null,
            imageUrl: null,
            thumbnails: [
              {
                id: "3b731218-ef65-45b3-918b-06bda159a3db",
                fileName:
                  "FaceInstanceThumbnail_3b731218-ef65-45b3-918b-06bda159a3db.jpg",
                instances: [
                  {
                    adjustedStart: "0:00:43.11",
                    adjustedEnd: "0:00:43.143",
                    start: "0:00:43.11",
                    end: "0:00:43.143",
                  },
                ],
              },
            ],
            instances: [
              {
                thumbnailsIds: ["3b731218-ef65-45b3-918b-06bda159a3db"],
                adjustedStart: "0:00:43.11",
                adjustedEnd: "0:00:43.143",
                start: "0:00:43.11",
                end: "0:00:43.143",
              },
            ],
          },
        ],
        labels: [
          {
            id: 1,
            name: "magenta",
            language: "en-US",
            instances: [
              {
                confidence: 0.9544,
                adjustedStart: "0:00:00",
                adjustedEnd: "0:00:02.136",
                start: "0:00:00",
                end: "0:00:02.136",
              },
              {
                confidence: 0.9357,
                adjustedStart: "0:01:20.08",
                adjustedEnd: "0:01:22.216",
                start: "0:01:20.08",
                end: "0:01:22.216",
              },
            ],
          },
          {
            id: 2,
            name: "purple",
            referenceId: "color/purple",
            language: "en-US",
            instances: [
              {
                confidence: 0.955,
                adjustedStart: "0:00:00",
                adjustedEnd: "0:00:01.068",
                start: "0:00:00",
                end: "0:00:01.068",
              },
              {
                confidence: 0.9558,
                adjustedStart: "0:01:14.741",
                adjustedEnd: "0:01:15.809",
                start: "0:01:14.741",
                end: "0:01:15.809",
              },
            ],
          },
          {
            id: 3,
            name: "pink",
            referenceId: "color/pink",
            language: "en-US",
            instances: [
              {
                confidence: 0.9433,
                adjustedStart: "0:00:00",
                adjustedEnd: "0:00:02.136",
                start: "0:00:00",
                end: "0:00:02.136",
              },
              {
                confidence: 0.9156,
                adjustedStart: "0:01:20.08",
                adjustedEnd: "0:01:22.216",
                start: "0:01:20.08",
                end: "0:01:22.216",
              },
            ],
          },
          {
            id: 4,
            name: "violet",
            language: "en-US",
            instances: [
              {
                confidence: 0.9444,
                adjustedStart: "0:00:00",
                adjustedEnd: "0:00:01.068",
                start: "0:00:00",
                end: "0:00:01.068",
              },
            ],
          },
          {
            id: 5,
            name: "design",
            language: "en-US",
            instances: [
              {
                confidence: 0.9934,
                adjustedStart: "0:00:01.068",
                adjustedEnd: "0:00:02.136",
                start: "0:00:01.068",
                end: "0:00:02.136",
              },
              {
                confidence: 0.9953,
                adjustedStart: "0:00:03.203",
                adjustedEnd: "0:00:05.339",
                start: "0:00:03.203",
                end: "0:00:05.339",
              },
              {
                confidence: 0.9895,
                adjustedStart: "0:00:07.474",
                adjustedEnd: "0:00:08.542",
                start: "0:00:07.474",
                end: "0:00:08.542",
              },
              {
                confidence: 0.9879,
                adjustedStart: "0:00:32.032",
                adjustedEnd: "0:00:33.1",
                start: "0:00:32.032",
                end: "0:00:33.1",
              },
              {
                confidence: 0.9972,
                adjustedStart: "0:01:20.08",
                adjustedEnd: "0:01:22.216",
                start: "0:01:20.08",
                end: "0:01:22.216",
              },
              {
                confidence: 0.9959,
                adjustedStart: "0:01:23.283",
                adjustedEnd: "0:01:25.452",
                start: "0:01:23.283",
                end: "0:01:25.452",
              },
            ],
          },
          {
            id: 6,
            name: "graphic",
            language: "en-US",
            instances: [
              {
                confidence: 0.9926,
                adjustedStart: "0:00:01.068",
                adjustedEnd: "0:00:02.136",
                start: "0:00:01.068",
                end: "0:00:02.136",
              },
              {
                confidence: 0.9931,
                adjustedStart: "0:00:03.203",
                adjustedEnd: "0:00:05.339",
                start: "0:00:03.203",
                end: "0:00:05.339",
              },
              {
                confidence: 0.992,
                adjustedStart: "0:01:20.08",
                adjustedEnd: "0:01:25.452",
                start: "0:01:20.08",
                end: "0:01:25.452",
              },
            ],
          },
          {
            id: 7,
            name: "illustration",
            language: "en-US",
            instances: [
              {
                confidence: 0.986,
                adjustedStart: "0:00:01.068",
                adjustedEnd: "0:00:02.136",
                start: "0:00:01.068",
                end: "0:00:02.136",
              },
              {
                confidence: 0.9883,
                adjustedStart: "0:00:03.203",
                adjustedEnd: "0:00:04.271",
                start: "0:00:03.203",
                end: "0:00:04.271",
              },
              {
                confidence: 0.992,
                adjustedStart: "0:01:20.08",
                adjustedEnd: "0:01:22.216",
                start: "0:01:20.08",
                end: "0:01:22.216",
              },
              {
                confidence: 0.9894,
                adjustedStart: "0:01:25.419",
                adjustedEnd: "0:01:25.452",
                start: "0:01:25.419",
                end: "0:01:25.452",
              },
            ],
          },
          {
            id: 8,
            name: "circle",
            language: "en-US",
            instances: [
              {
                confidence: 0.949,
                adjustedStart: "0:00:01.068",
                adjustedEnd: "0:00:02.136",
                start: "0:00:01.068",
                end: "0:00:02.136",
              },
              {
                confidence: 0.941,
                adjustedStart: "0:01:20.08",
                adjustedEnd: "0:01:22.216",
                start: "0:01:20.08",
                end: "0:01:22.216",
              },
            ],
          },
          {
            id: 9,
            name: "graphics",
            language: "en-US",
            instances: [
              {
                confidence: 0.9161,
                adjustedStart: "0:00:01.068",
                adjustedEnd: "0:00:02.136",
                start: "0:00:01.068",
                end: "0:00:02.136",
              },
              {
                confidence: 0.9072,
                adjustedStart: "0:00:04.271",
                adjustedEnd: "0:00:05.339",
                start: "0:00:04.271",
                end: "0:00:05.339",
              },
              {
                confidence: 0.9437,
                adjustedStart: "0:01:20.08",
                adjustedEnd: "0:01:22.216",
                start: "0:01:20.08",
                end: "0:01:22.216",
              },
              {
                confidence: 0.9162,
                adjustedStart: "0:01:24.351",
                adjustedEnd: "0:01:25.452",
                start: "0:01:24.351",
                end: "0:01:25.452",
              },
            ],
          },
          {
            id: 10,
            name: "screenshot",
            language: "en-US",
            instances: [
              {
                confidence: 0.9046,
                adjustedStart: "0:00:01.068",
                adjustedEnd: "0:00:02.136",
                start: "0:00:01.068",
                end: "0:00:02.136",
              },
              {
                confidence: 0.9094,
                adjustedStart: "0:00:04.271",
                adjustedEnd: "0:00:05.339",
                start: "0:00:04.271",
                end: "0:00:05.339",
              },
              {
                confidence: 0.9334,
                adjustedStart: "0:00:06.406",
                adjustedEnd: "0:00:08.542",
                start: "0:00:06.406",
                end: "0:00:08.542",
              },
              {
                confidence: 0.9587,
                adjustedStart: "0:00:28.829",
                adjustedEnd: "0:00:29.897",
                start: "0:00:28.829",
                end: "0:00:29.897",
              },
              {
                confidence: 0.9601,
                adjustedStart: "0:00:40.574",
                adjustedEnd: "0:00:43.777",
                start: "0:00:40.574",
                end: "0:00:43.777",
              },
              {
                confidence: 0.9224,
                adjustedStart: "0:00:58.725",
                adjustedEnd: "0:01:00.861",
                start: "0:00:58.725",
                end: "0:01:00.861",
              },
              {
                confidence: 0.9322,
                adjustedStart: "0:01:21.148",
                adjustedEnd: "0:01:22.216",
                start: "0:01:21.148",
                end: "0:01:22.216",
              },
              {
                confidence: 0.9003,
                adjustedStart: "0:01:23.283",
                adjustedEnd: "0:01:24.351",
                start: "0:01:23.283",
                end: "0:01:24.351",
              },
            ],
          },
          {
            id: 11,
            name: "aqua",
            language: "en-US",
            instances: [
              {
                confidence: 0.9039,
                adjustedStart: "0:00:02.135",
                adjustedEnd: "0:00:03.203",
                start: "0:00:02.135",
                end: "0:00:03.203",
              },
            ],
          },
          {
            id: 12,
            name: "nature",
            referenceId: "nature",
            language: "en-US",
            instances: [
              {
                confidence: 0.8392,
                adjustedStart: "0:00:02.135",
                adjustedEnd: "0:00:03.203",
                start: "0:00:02.135",
                end: "0:00:03.203",
              },
            ],
          },
          {
            id: 13,
            name: "text",
            referenceId: "communication/writing/text",
            language: "en-US",
            instances: [
              {
                confidence: 0.9998,
                adjustedStart: "0:00:03.203",
                adjustedEnd: "0:00:05.339",
                start: "0:00:03.203",
                end: "0:00:05.339",
              },
              {
                confidence: 0.981,
                adjustedStart: "0:00:06.406",
                adjustedEnd: "0:00:09.61",
                start: "0:00:06.406",
                end: "0:00:09.61",
              },
              {
                confidence: 0.9999,
                adjustedStart: "0:00:19.219",
                adjustedEnd: "0:00:20.287",
                start: "0:00:19.219",
                end: "0:00:20.287",
              },
              {
                confidence: 0.9774,
                adjustedStart: "0:00:21.355",
                adjustedEnd: "0:00:23.49",
                start: "0:00:21.355",
                end: "0:00:23.49",
              },
              {
                confidence: 0.9985,
                adjustedStart: "0:00:28.829",
                adjustedEnd: "0:00:29.897",
                start: "0:00:28.829",
                end: "0:00:29.897",
              },
              {
                confidence: 1,
                adjustedStart: "0:00:32.032",
                adjustedEnd: "0:00:33.1",
                start: "0:00:32.032",
                end: "0:00:33.1",
              },
              {
                confidence: 0.9988,
                adjustedStart: "0:00:35.235",
                adjustedEnd: "0:00:37.371",
                start: "0:00:35.235",
                end: "0:00:37.371",
              },
              {
                confidence: 0.9652,
                adjustedStart: "0:00:50.183",
                adjustedEnd: "0:00:51.251",
                start: "0:00:50.183",
                end: "0:00:51.251",
              },
              {
                confidence: 0.909,
                adjustedStart: "0:00:52.319",
                adjustedEnd: "0:00:54.455",
                start: "0:00:52.319",
                end: "0:00:54.455",
              },
              {
                confidence: 0.8905,
                adjustedStart: "0:01:15.809",
                adjustedEnd: "0:01:16.877",
                start: "0:01:15.809",
                end: "0:01:16.877",
              },
              {
                confidence: 0.9697,
                adjustedStart: "0:01:21.148",
                adjustedEnd: "0:01:25.452",
                start: "0:01:21.148",
                end: "0:01:25.452",
              },
            ],
          },
          {
            id: 14,
            name: "cartoon",
            language: "en-US",
            instances: [
              {
                confidence: 0.9749,
                adjustedStart: "0:00:03.203",
                adjustedEnd: "0:00:04.271",
                start: "0:00:03.203",
                end: "0:00:04.271",
              },
            ],
          },
          {
            id: 15,
            name: "typography",
            language: "en-US",
            instances: [
              {
                confidence: 0.9894,
                adjustedStart: "0:00:04.271",
                adjustedEnd: "0:00:05.339",
                start: "0:00:04.271",
                end: "0:00:05.339",
              },
              {
                confidence: 0.9926,
                adjustedStart: "0:00:32.032",
                adjustedEnd: "0:00:33.1",
                start: "0:00:32.032",
                end: "0:00:33.1",
              },
              {
                confidence: 0.9889,
                adjustedStart: "0:01:23.283",
                adjustedEnd: "0:01:25.452",
                start: "0:01:23.283",
                end: "0:01:25.452",
              },
            ],
          },
          {
            id: 16,
            name: "human face",
            language: "en-US",
            instances: [
              {
                confidence: 0.9864,
                adjustedStart: "0:00:05.339",
                adjustedEnd: "0:00:07.474",
                start: "0:00:05.339",
                end: "0:00:07.474",
              },
              {
                confidence: 0.9887,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:14.949",
                start: "0:00:09.61",
                end: "0:00:14.949",
              },
              {
                confidence: 0.9898,
                adjustedStart: "0:00:17.084",
                adjustedEnd: "0:00:21.355",
                start: "0:00:17.084",
                end: "0:00:21.355",
              },
              {
                confidence: 0.9988,
                adjustedStart: "0:00:23.49",
                adjustedEnd: "0:00:26.694",
                start: "0:00:23.49",
                end: "0:00:26.694",
              },
              {
                confidence: 0.9893,
                adjustedStart: "0:00:27.761",
                adjustedEnd: "0:00:28.829",
                start: "0:00:27.761",
                end: "0:00:28.829",
              },
              {
                confidence: 0.9391,
                adjustedStart: "0:00:29.897",
                adjustedEnd: "0:00:32.032",
                start: "0:00:29.897",
                end: "0:00:32.032",
              },
              {
                confidence: 0.9977,
                adjustedStart: "0:00:33.1",
                adjustedEnd: "0:00:35.235",
                start: "0:00:33.1",
                end: "0:00:35.235",
              },
              {
                confidence: 0.9894,
                adjustedStart: "0:00:37.371",
                adjustedEnd: "0:00:54.455",
                start: "0:00:37.371",
                end: "0:00:54.455",
              },
              {
                confidence: 0.9892,
                adjustedStart: "0:00:58.725",
                adjustedEnd: "0:01:01.929",
                start: "0:00:58.725",
                end: "0:01:01.929",
              },
              {
                confidence: 0.9897,
                adjustedStart: "0:01:04.064",
                adjustedEnd: "0:01:06.2",
                start: "0:01:04.064",
                end: "0:01:06.2",
              },
              {
                confidence: 0.9812,
                adjustedStart: "0:01:08.335",
                adjustedEnd: "0:01:20.08",
                start: "0:01:08.335",
                end: "0:01:20.08",
              },
            ],
          },
          {
            id: 17,
            name: "person",
            referenceId: "person",
            language: "en-US",
            instances: [
              {
                confidence: 0.9938,
                adjustedStart: "0:00:05.339",
                adjustedEnd: "0:00:07.474",
                start: "0:00:05.339",
                end: "0:00:07.474",
              },
              {
                confidence: 0.992,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:21.355",
                start: "0:00:09.61",
                end: "0:00:21.355",
              },
              {
                confidence: 0.9863,
                adjustedStart: "0:00:23.49",
                adjustedEnd: "0:00:32.032",
                start: "0:00:23.49",
                end: "0:00:32.032",
              },
              {
                confidence: 0.9904,
                adjustedStart: "0:00:33.1",
                adjustedEnd: "0:01:20.08",
                start: "0:00:33.1",
                end: "0:01:20.08",
              },
            ],
          },
          {
            id: 18,
            name: "clothing",
            referenceId: "consumer goods/clothing",
            language: "en-US",
            instances: [
              {
                confidence: 0.9235,
                adjustedStart: "0:00:05.339",
                adjustedEnd: "0:00:07.474",
                start: "0:00:05.339",
                end: "0:00:07.474",
              },
              {
                confidence: 0.9471,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:21.355",
                start: "0:00:09.61",
                end: "0:00:21.355",
              },
              {
                confidence: 0.9854,
                adjustedStart: "0:00:23.49",
                adjustedEnd: "0:00:28.829",
                start: "0:00:23.49",
                end: "0:00:28.829",
              },
              {
                confidence: 0.993,
                adjustedStart: "0:00:29.897",
                adjustedEnd: "0:00:32.032",
                start: "0:00:29.897",
                end: "0:00:32.032",
              },
              {
                confidence: 0.9858,
                adjustedStart: "0:00:33.1",
                adjustedEnd: "0:00:37.371",
                start: "0:00:33.1",
                end: "0:00:37.371",
              },
              {
                confidence: 0.9568,
                adjustedStart: "0:00:38.438",
                adjustedEnd: "0:01:09.403",
                start: "0:00:38.438",
                end: "0:01:09.403",
              },
              {
                confidence: 0.962,
                adjustedStart: "0:01:10.47",
                adjustedEnd: "0:01:20.08",
                start: "0:01:10.47",
                end: "0:01:20.08",
              },
            ],
          },
          {
            id: 19,
            name: "microphone",
            referenceId: "device/microphone",
            language: "en-US",
            instances: [
              {
                confidence: 0.9536,
                adjustedStart: "0:00:05.339",
                adjustedEnd: "0:00:06.407",
                start: "0:00:05.339",
                end: "0:00:06.407",
              },
              {
                confidence: 0.9778,
                adjustedStart: "0:00:33.1",
                adjustedEnd: "0:00:35.235",
                start: "0:00:33.1",
                end: "0:00:35.235",
              },
              {
                confidence: 0.9712,
                adjustedStart: "0:01:10.47",
                adjustedEnd: "0:01:11.538",
                start: "0:01:10.47",
                end: "0:01:11.538",
              },
            ],
          },
          {
            id: 20,
            name: "suit",
            referenceId: "consumer goods/clothing/suit",
            language: "en-US",
            instances: [
              {
                confidence: 0.9328,
                adjustedStart: "0:00:05.339",
                adjustedEnd: "0:00:07.474",
                start: "0:00:05.339",
                end: "0:00:07.474",
              },
              {
                confidence: 0.9245,
                adjustedStart: "0:00:12.813",
                adjustedEnd: "0:00:14.949",
                start: "0:00:12.813",
                end: "0:00:14.949",
              },
              {
                confidence: 0.916,
                adjustedStart: "0:00:26.693",
                adjustedEnd: "0:00:28.829",
                start: "0:00:26.693",
                end: "0:00:28.829",
              },
              {
                confidence: 0.944,
                adjustedStart: "0:00:33.1",
                adjustedEnd: "0:00:35.235",
                start: "0:00:33.1",
                end: "0:00:35.235",
              },
              {
                confidence: 0.9485,
                adjustedStart: "0:00:39.506",
                adjustedEnd: "0:00:40.574",
                start: "0:00:39.506",
                end: "0:00:40.574",
              },
              {
                confidence: 0.9465,
                adjustedStart: "0:00:48.048",
                adjustedEnd: "0:00:51.251",
                start: "0:00:48.048",
                end: "0:00:51.251",
              },
              {
                confidence: 0.9622,
                adjustedStart: "0:01:10.47",
                adjustedEnd: "0:01:13.674",
                start: "0:01:10.47",
                end: "0:01:13.674",
              },
              {
                confidence: 0.9813,
                adjustedStart: "0:01:16.877",
                adjustedEnd: "0:01:17.945",
                start: "0:01:16.877",
                end: "0:01:17.945",
              },
            ],
          },
          {
            id: 21,
            name: "man",
            referenceId: "person/man",
            language: "en-US",
            instances: [
              {
                confidence: 0.9185,
                adjustedStart: "0:00:05.339",
                adjustedEnd: "0:00:07.474",
                start: "0:00:05.339",
                end: "0:00:07.474",
              },
              {
                confidence: 0.9444,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:14.949",
                start: "0:00:09.61",
                end: "0:00:14.949",
              },
              {
                confidence: 0.9055,
                adjustedStart: "0:00:23.49",
                adjustedEnd: "0:00:28.829",
                start: "0:00:23.49",
                end: "0:00:28.829",
              },
              {
                confidence: 0.9626,
                adjustedStart: "0:00:29.897",
                adjustedEnd: "0:00:32.032",
                start: "0:00:29.897",
                end: "0:00:32.032",
              },
              {
                confidence: 0.9429,
                adjustedStart: "0:00:33.1",
                adjustedEnd: "0:00:37.371",
                start: "0:00:33.1",
                end: "0:00:37.371",
              },
              {
                confidence: 0.9159,
                adjustedStart: "0:00:38.438",
                adjustedEnd: "0:00:41.642",
                start: "0:00:38.438",
                end: "0:00:41.642",
              },
              {
                confidence: 0.9293,
                adjustedStart: "0:00:43.777",
                adjustedEnd: "0:00:53.387",
                start: "0:00:43.777",
                end: "0:00:53.387",
              },
              {
                confidence: 0.9091,
                adjustedStart: "0:00:54.454",
                adjustedEnd: "0:00:57.658",
                start: "0:00:54.454",
                end: "0:00:57.658",
              },
              {
                confidence: 0.9111,
                adjustedStart: "0:01:01.929",
                adjustedEnd: "0:01:06.2",
                start: "0:01:01.929",
                end: "0:01:06.2",
              },
              {
                confidence: 0.9072,
                adjustedStart: "0:01:07.267",
                adjustedEnd: "0:01:08.335",
                start: "0:01:07.267",
                end: "0:01:08.335",
              },
              {
                confidence: 0.9035,
                adjustedStart: "0:01:10.47",
                adjustedEnd: "0:01:13.674",
                start: "0:01:10.47",
                end: "0:01:13.674",
              },
              {
                confidence: 0.9085,
                adjustedStart: "0:01:15.809",
                adjustedEnd: "0:01:17.945",
                start: "0:01:15.809",
                end: "0:01:17.945",
              },
            ],
          },
          {
            id: 22,
            name: "spokesperson",
            language: "en-US",
            instances: [
              {
                confidence: 0.9018,
                adjustedStart: "0:00:05.339",
                adjustedEnd: "0:00:06.407",
                start: "0:00:05.339",
                end: "0:00:06.407",
              },
              {
                confidence: 0.9033,
                adjustedStart: "0:00:34.167",
                adjustedEnd: "0:00:35.235",
                start: "0:00:34.167",
                end: "0:00:35.235",
              },
            ],
          },
          {
            id: 23,
            name: "wearing",
            language: "en-US",
            instances: [
              {
                confidence: 0.915,
                adjustedStart: "0:00:06.406",
                adjustedEnd: "0:00:07.474",
                start: "0:00:06.406",
                end: "0:00:07.474",
              },
              {
                confidence: 0.9462,
                adjustedStart: "0:00:12.813",
                adjustedEnd: "0:00:14.949",
                start: "0:00:12.813",
                end: "0:00:14.949",
              },
              {
                confidence: 0.9124,
                adjustedStart: "0:00:20.287",
                adjustedEnd: "0:00:21.355",
                start: "0:00:20.287",
                end: "0:00:21.355",
              },
              {
                confidence: 0.8807,
                adjustedStart: "0:00:27.761",
                adjustedEnd: "0:00:28.829",
                start: "0:00:27.761",
                end: "0:00:28.829",
              },
              {
                confidence: 0.8952,
                adjustedStart: "0:00:33.1",
                adjustedEnd: "0:00:35.235",
                start: "0:00:33.1",
                end: "0:00:35.235",
              },
              {
                confidence: 0.9347,
                adjustedStart: "0:00:37.371",
                adjustedEnd: "0:00:43.777",
                start: "0:00:37.371",
                end: "0:00:43.777",
              },
              {
                confidence: 0.8905,
                adjustedStart: "0:00:44.845",
                adjustedEnd: "0:00:46.981",
                start: "0:00:44.845",
                end: "0:00:46.981",
              },
              {
                confidence: 0.8821,
                adjustedStart: "0:00:48.048",
                adjustedEnd: "0:00:49.116",
                start: "0:00:48.048",
                end: "0:00:49.116",
              },
              {
                confidence: 0.8965,
                adjustedStart: "0:00:51.251",
                adjustedEnd: "0:00:52.319",
                start: "0:00:51.251",
                end: "0:00:52.319",
              },
              {
                confidence: 0.9564,
                adjustedStart: "0:01:09.403",
                adjustedEnd: "0:01:10.471",
                start: "0:01:09.403",
                end: "0:01:10.471",
              },
              {
                confidence: 0.8915,
                adjustedStart: "0:01:16.877",
                adjustedEnd: "0:01:17.945",
                start: "0:01:16.877",
                end: "0:01:17.945",
              },
            ],
          },
          {
            id: 24,
            name: "rainbow",
            referenceId: "natural phenomenon/rainbow",
            language: "en-US",
            instances: [
              {
                confidence: 0.9771,
                adjustedStart: "0:00:08.542",
                adjustedEnd: "0:00:09.61",
                start: "0:00:08.542",
                end: "0:00:09.61",
              },
            ],
          },
          {
            id: 25,
            name: "smile",
            language: "en-US",
            instances: [
              {
                confidence: 0.9862,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:12.813",
                start: "0:00:09.61",
                end: "0:00:12.813",
              },
              {
                confidence: 0.925,
                adjustedStart: "0:00:19.219",
                adjustedEnd: "0:00:21.355",
                start: "0:00:19.219",
                end: "0:00:21.355",
              },
              {
                confidence: 0.9354,
                adjustedStart: "0:00:23.49",
                adjustedEnd: "0:00:26.694",
                start: "0:00:23.49",
                end: "0:00:26.694",
              },
              {
                confidence: 0.9777,
                adjustedStart: "0:00:37.371",
                adjustedEnd: "0:00:40.574",
                start: "0:00:37.371",
                end: "0:00:40.574",
              },
              {
                confidence: 0.9574,
                adjustedStart: "0:00:45.913",
                adjustedEnd: "0:00:51.251",
                start: "0:00:45.913",
                end: "0:00:51.251",
              },
              {
                confidence: 0.9546,
                adjustedStart: "0:01:00.861",
                adjustedEnd: "0:01:01.929",
                start: "0:01:00.861",
                end: "0:01:01.929",
              },
              {
                confidence: 0.9605,
                adjustedStart: "0:01:04.064",
                adjustedEnd: "0:01:06.2",
                start: "0:01:04.064",
                end: "0:01:06.2",
              },
              {
                confidence: 0.9602,
                adjustedStart: "0:01:08.335",
                adjustedEnd: "0:01:10.471",
                start: "0:01:08.335",
                end: "0:01:10.471",
              },
              {
                confidence: 0.9373,
                adjustedStart: "0:01:11.538",
                adjustedEnd: "0:01:14.742",
                start: "0:01:11.538",
                end: "0:01:14.742",
              },
            ],
          },
          {
            id: 26,
            name: "posing",
            language: "en-US",
            instances: [
              {
                confidence: 0.9819,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:11.745",
                start: "0:00:09.61",
                end: "0:00:11.745",
              },
              {
                confidence: 0.9258,
                adjustedStart: "0:00:20.287",
                adjustedEnd: "0:00:21.355",
                start: "0:00:20.287",
                end: "0:00:21.355",
              },
              {
                confidence: 0.9632,
                adjustedStart: "0:01:05.132",
                adjustedEnd: "0:01:06.2",
                start: "0:01:05.132",
                end: "0:01:06.2",
              },
            ],
          },
          {
            id: 27,
            name: "outdoor",
            language: "en-US",
            instances: [
              {
                confidence: 0.9767,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:12.813",
                start: "0:00:09.61",
                end: "0:00:12.813",
              },
              {
                confidence: 0.9769,
                adjustedStart: "0:00:54.454",
                adjustedEnd: "0:00:58.726",
                start: "0:00:54.454",
                end: "0:00:58.726",
              },
              {
                confidence: 0.999,
                adjustedStart: "0:01:05.132",
                adjustedEnd: "0:01:06.2",
                start: "0:01:05.132",
                end: "0:01:06.2",
              },
              {
                confidence: 0.8209,
                adjustedStart: "0:01:08.335",
                adjustedEnd: "0:01:09.403",
                start: "0:01:08.335",
                end: "0:01:09.403",
              },
              {
                confidence: 0.8636,
                adjustedStart: "0:01:11.538",
                adjustedEnd: "0:01:12.606",
                start: "0:01:11.538",
                end: "0:01:12.606",
              },
              {
                confidence: 0.9942,
                adjustedStart: "0:01:13.674",
                adjustedEnd: "0:01:15.809",
                start: "0:01:13.674",
                end: "0:01:15.809",
              },
              {
                confidence: 0.9921,
                adjustedStart: "0:01:17.945",
                adjustedEnd: "0:01:20.08",
                start: "0:01:17.945",
                end: "0:01:20.08",
              },
            ],
          },
          {
            id: 28,
            name: "standing",
            language: "en-US",
            instances: [
              {
                confidence: 0.9335,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:12.813",
                start: "0:00:09.61",
                end: "0:00:12.813",
              },
              {
                confidence: 0.913,
                adjustedStart: "0:00:55.522",
                adjustedEnd: "0:00:58.726",
                start: "0:00:55.522",
                end: "0:00:58.726",
              },
            ],
          },
          {
            id: 29,
            name: "sky",
            referenceId: "atmosphere/sky",
            language: "en-US",
            instances: [
              {
                confidence: 0.9568,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:12.813",
                start: "0:00:09.61",
                end: "0:00:12.813",
              },
              {
                confidence: 0.9282,
                adjustedStart: "0:00:53.387",
                adjustedEnd: "0:00:54.455",
                start: "0:00:53.387",
                end: "0:00:54.455",
              },
              {
                confidence: 0.9075,
                adjustedStart: "0:00:56.59",
                adjustedEnd: "0:00:58.726",
                start: "0:00:56.59",
                end: "0:00:58.726",
              },
              {
                confidence: 0.9784,
                adjustedStart: "0:01:05.132",
                adjustedEnd: "0:01:06.2",
                start: "0:01:05.132",
                end: "0:01:06.2",
              },
              {
                confidence: 0.9401,
                adjustedStart: "0:01:11.538",
                adjustedEnd: "0:01:12.606",
                start: "0:01:11.538",
                end: "0:01:12.606",
              },
            ],
          },
          {
            id: 30,
            name: "people",
            language: "en-US",
            instances: [
              {
                confidence: 0.9453,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:10.678",
                start: "0:00:09.61",
                end: "0:00:10.678",
              },
              {
                confidence: 0.9639,
                adjustedStart: "0:00:23.49",
                adjustedEnd: "0:00:26.694",
                start: "0:00:23.49",
                end: "0:00:26.694",
              },
              {
                confidence: 0.9293,
                adjustedStart: "0:00:57.658",
                adjustedEnd: "0:00:58.726",
                start: "0:00:57.658",
                end: "0:00:58.726",
              },
              {
                confidence: 0.9114,
                adjustedStart: "0:01:04.064",
                adjustedEnd: "0:01:05.132",
                start: "0:01:04.064",
                end: "0:01:05.132",
              },
              {
                confidence: 0.9609,
                adjustedStart: "0:01:06.199",
                adjustedEnd: "0:01:08.335",
                start: "0:01:06.199",
                end: "0:01:08.335",
              },
              {
                confidence: 0.8923,
                adjustedStart: "0:01:17.945",
                adjustedEnd: "0:01:19.013",
                start: "0:01:17.945",
                end: "0:01:19.013",
              },
            ],
          },
          {
            id: 31,
            name: "group",
            referenceId: "group",
            language: "en-US",
            instances: [
              {
                confidence: 0.9432,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:10.678",
                start: "0:00:09.61",
                end: "0:00:10.678",
              },
              {
                confidence: 0.9254,
                adjustedStart: "0:00:23.49",
                adjustedEnd: "0:00:26.694",
                start: "0:00:23.49",
                end: "0:00:26.694",
              },
              {
                confidence: 0.9039,
                adjustedStart: "0:00:56.59",
                adjustedEnd: "0:00:58.726",
                start: "0:00:56.59",
                end: "0:00:58.726",
              },
              {
                confidence: 0.9709,
                adjustedStart: "0:01:04.064",
                adjustedEnd: "0:01:05.132",
                start: "0:01:04.064",
                end: "0:01:05.132",
              },
              {
                confidence: 0.9463,
                adjustedStart: "0:01:06.199",
                adjustedEnd: "0:01:08.335",
                start: "0:01:06.199",
                end: "0:01:08.335",
              },
            ],
          },
          {
            id: 32,
            name: "smiling",
            referenceId: "gesture/smile/smiling",
            language: "en-US",
            instances: [
              {
                confidence: 0.9241,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:11.745",
                start: "0:00:09.61",
                end: "0:00:11.745",
              },
              {
                confidence: 0.9625,
                adjustedStart: "0:00:45.913",
                adjustedEnd: "0:00:48.048",
                start: "0:00:45.913",
                end: "0:00:48.048",
              },
              {
                confidence: 0.9188,
                adjustedStart: "0:01:05.132",
                adjustedEnd: "0:01:06.2",
                start: "0:01:05.132",
                end: "0:01:06.2",
              },
            ],
          },
          {
            id: 33,
            name: "sunglasses",
            referenceId: "device/optical instrument/sunglasses",
            language: "en-US",
            instances: [
              {
                confidence: 0.9004,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:10.678",
                start: "0:00:09.61",
                end: "0:00:10.678",
              },
            ],
          },
          {
            id: 34,
            name: "woman",
            referenceId: "person/woman",
            language: "en-US",
            instances: [
              {
                confidence: 0.8912,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:10.678",
                start: "0:00:09.61",
                end: "0:00:10.678",
              },
              {
                confidence: 0.9423,
                adjustedStart: "0:00:23.49",
                adjustedEnd: "0:00:26.694",
                start: "0:00:23.49",
                end: "0:00:26.694",
              },
              {
                confidence: 0.9318,
                adjustedStart: "0:00:29.897",
                adjustedEnd: "0:00:32.032",
                start: "0:00:29.897",
                end: "0:00:32.032",
              },
              {
                confidence: 0.9014,
                adjustedStart: "0:00:57.658",
                adjustedEnd: "0:01:01.929",
                start: "0:00:57.658",
                end: "0:01:01.929",
              },
              {
                confidence: 0.8976,
                adjustedStart: "0:01:06.199",
                adjustedEnd: "0:01:09.403",
                start: "0:01:06.199",
                end: "0:01:09.403",
              },
            ],
          },
          {
            id: 35,
            name: "dress",
            referenceId: "consumer goods/clothing/dress",
            language: "en-US",
            instances: [
              {
                confidence: 0.8601,
                adjustedStart: "0:00:09.61",
                adjustedEnd: "0:00:10.678",
                start: "0:00:09.61",
                end: "0:00:10.678",
              },
            ],
          },
          {
            id: 36,
            name: "shirt",
            referenceId: "consumer goods/clothing/shirt",
            language: "en-US",
            instances: [
              {
                confidence: 0.9594,
                adjustedStart: "0:00:10.677",
                adjustedEnd: "0:00:12.813",
                start: "0:00:10.677",
                end: "0:00:12.813",
              },
              {
                confidence: 0.9365,
                adjustedStart: "0:00:40.574",
                adjustedEnd: "0:00:42.71",
                start: "0:00:40.574",
                end: "0:00:42.71",
              },
              {
                confidence: 0.9041,
                adjustedStart: "0:01:05.132",
                adjustedEnd: "0:01:06.2",
                start: "0:01:05.132",
                end: "0:01:06.2",
              },
              {
                confidence: 0.9198,
                adjustedStart: "0:01:12.606",
                adjustedEnd: "0:01:13.674",
                start: "0:01:12.606",
                end: "0:01:13.674",
              },
              {
                confidence: 0.927,
                adjustedStart: "0:01:16.877",
                adjustedEnd: "0:01:17.945",
                start: "0:01:16.877",
                end: "0:01:17.945",
              },
            ],
          },
          {
            id: 37,
            name: "glasses",
            language: "en-US",
            instances: [
              {
                confidence: 0.9321,
                adjustedStart: "0:00:10.677",
                adjustedEnd: "0:00:12.813",
                start: "0:00:10.677",
                end: "0:00:12.813",
              },
              {
                confidence: 0.9358,
                adjustedStart: "0:00:23.49",
                adjustedEnd: "0:00:26.694",
                start: "0:00:23.49",
                end: "0:00:26.694",
              },
              {
                confidence: 0.9789,
                adjustedStart: "0:00:33.1",
                adjustedEnd: "0:00:35.235",
                start: "0:00:33.1",
                end: "0:00:35.235",
              },
              {
                confidence: 0.9565,
                adjustedStart: "0:00:37.371",
                adjustedEnd: "0:00:41.642",
                start: "0:00:37.371",
                end: "0:00:41.642",
              },
              {
                confidence: 0.9489,
                adjustedStart: "0:00:45.913",
                adjustedEnd: "0:00:52.319",
                start: "0:00:45.913",
                end: "0:00:52.319",
              },
              {
                confidence: 0.9706,
                adjustedStart: "0:00:53.387",
                adjustedEnd: "0:00:54.455",
                start: "0:00:53.387",
                end: "0:00:54.455",
              },
              {
                confidence: 0.9077,
                adjustedStart: "0:01:00.861",
                adjustedEnd: "0:01:01.929",
                start: "0:01:00.861",
                end: "0:01:01.929",
              },
              {
                confidence: 0.9651,
                adjustedStart: "0:01:08.335",
                adjustedEnd: "0:01:11.538",
                start: "0:01:08.335",
                end: "0:01:11.538",
              },
              {
                confidence: 0.9662,
                adjustedStart: "0:01:12.606",
                adjustedEnd: "0:01:13.674",
                start: "0:01:12.606",
                end: "0:01:13.674",
              },
              {
                confidence: 0.9676,
                adjustedStart: "0:01:16.877",
                adjustedEnd: "0:01:17.945",
                start: "0:01:16.877",
                end: "0:01:17.945",
              },
            ],
          },
          {
            id: 38,
            name: "event",
            referenceId: "psychological feature/event",
            language: "en-US",
            instances: [
              {
                confidence: 0.9271,
                adjustedStart: "0:00:11.745",
                adjustedEnd: "0:00:12.813",
                start: "0:00:11.745",
                end: "0:00:12.813",
              },
              {
                confidence: 0.9356,
                adjustedStart: "0:01:10.47",
                adjustedEnd: "0:01:11.538",
                start: "0:01:10.47",
                end: "0:01:11.538",
              },
            ],
          },
          {
            id: 39,
            name: "tie",
            language: "en-US",
            instances: [
              {
                confidence: 0.9439,
                adjustedStart: "0:00:12.813",
                adjustedEnd: "0:00:14.949",
                start: "0:00:12.813",
                end: "0:00:14.949",
              },
              {
                confidence: 0.9481,
                adjustedStart: "0:00:33.1",
                adjustedEnd: "0:00:35.235",
                start: "0:00:33.1",
                end: "0:00:35.235",
              },
              {
                confidence: 0.919,
                adjustedStart: "0:00:39.506",
                adjustedEnd: "0:00:40.574",
                start: "0:00:39.506",
                end: "0:00:40.574",
              },
              {
                confidence: 0.9652,
                adjustedStart: "0:00:48.048",
                adjustedEnd: "0:00:51.251",
                start: "0:00:48.048",
                end: "0:00:51.251",
              },
              {
                confidence: 0.9759,
                adjustedStart: "0:01:10.47",
                adjustedEnd: "0:01:13.674",
                start: "0:01:10.47",
                end: "0:01:13.674",
              },
              {
                confidence: 0.9733,
                adjustedStart: "0:01:16.877",
                adjustedEnd: "0:01:17.945",
                start: "0:01:16.877",
                end: "0:01:17.945",
              },
            ],
          },
          {
            id: 40,
            name: "dressed",
            language: "en-US",
            instances: [
              {
                confidence: 0.918,
                adjustedStart: "0:00:12.813",
                adjustedEnd: "0:00:13.881",
                start: "0:00:12.813",
                end: "0:00:13.881",
              },
              {
                confidence: 0.9284,
                adjustedStart: "0:01:10.47",
                adjustedEnd: "0:01:11.538",
                start: "0:01:10.47",
                end: "0:01:11.538",
              },
            ],
          },
          {
            id: 41,
            name: "indoor",
            language: "en-US",
            instances: [
              {
                confidence: 0.9093,
                adjustedStart: "0:00:12.813",
                adjustedEnd: "0:00:20.287",
                start: "0:00:12.813",
                end: "0:00:20.287",
              },
              {
                confidence: 0.9038,
                adjustedStart: "0:00:23.49",
                adjustedEnd: "0:00:27.761",
                start: "0:00:23.49",
                end: "0:00:27.761",
              },
              {
                confidence: 0.857,
                adjustedStart: "0:00:43.777",
                adjustedEnd: "0:00:44.845",
                start: "0:00:43.777",
                end: "0:00:44.845",
              },
              {
                confidence: 0.8542,
                adjustedStart: "0:00:51.251",
                adjustedEnd: "0:00:52.319",
                start: "0:00:51.251",
                end: "0:00:52.319",
              },
              {
                confidence: 0.9117,
                adjustedStart: "0:01:04.064",
                adjustedEnd: "0:01:05.132",
                start: "0:01:04.064",
                end: "0:01:05.132",
              },
              {
                confidence: 0.9842,
                adjustedStart: "0:01:06.199",
                adjustedEnd: "0:01:08.335",
                start: "0:01:06.199",
                end: "0:01:08.335",
              },
              {
                confidence: 0.9252,
                adjustedStart: "0:01:12.606",
                adjustedEnd: "0:01:13.674",
                start: "0:01:12.606",
                end: "0:01:13.674",
              },
              {
                confidence: 0.9117,
                adjustedStart: "0:01:16.877",
                adjustedEnd: "0:01:17.945",
                start: "0:01:16.877",
                end: "0:01:17.945",
              },
            ],
          },
          {
            id: 42,
            name: "black and white",
            language: "en-US",
            instances: [
              {
                confidence: 0.9962,
                adjustedStart: "0:00:14.948",
                adjustedEnd: "0:00:19.219",
                start: "0:00:14.948",
                end: "0:00:19.219",
              },
            ],
          },
          {
            id: 43,
            name: "wall",
            referenceId: "structure/wall",
            language: "en-US",
            instances: [
              {
                confidence: 0.9553,
                adjustedStart: "0:00:14.948",
                adjustedEnd: "0:00:19.219",
                start: "0:00:14.948",
                end: "0:00:19.219",
              },
              {
                confidence: 0.9144,
                adjustedStart: "0:00:42.709",
                adjustedEnd: "0:00:43.777",
                start: "0:00:42.709",
                end: "0:00:43.777",
              },
              {
                confidence: 0.9241,
                adjustedStart: "0:01:04.064",
                adjustedEnd: "0:01:05.132",
                start: "0:01:04.064",
                end: "0:01:05.132",
              },
              {
                confidence: 0.9607,
                adjustedStart: "0:01:06.199",
                adjustedEnd: "0:01:08.335",
                start: "0:01:06.199",
                end: "0:01:08.335",
              },
              {
                confidence: 0.9496,
                adjustedStart: "0:01:12.606",
                adjustedEnd: "0:01:13.674",
                start: "0:01:12.606",
                end: "0:01:13.674",
              },
              {
                confidence: 0.8989,
                adjustedStart: "0:01:15.809",
                adjustedEnd: "0:01:16.877",
                start: "0:01:15.809",
                end: "0:01:16.877",
              },
            ],
          },
          {
            id: 44,
            name: "young",
            referenceId: "young",
            language: "en-US",
            instances: [
              {
                confidence: 0.9022,
                adjustedStart: "0:00:14.948",
                adjustedEnd: "0:00:16.016",
                start: "0:00:14.948",
                end: "0:00:16.016",
              },
            ],
          },
          {
            id: 45,
            name: "office supplies",
            language: "en-US",
            instances: [
              {
                confidence: 0.9009,
                adjustedStart: "0:00:16.016",
                adjustedEnd: "0:00:17.084",
                start: "0:00:16.016",
                end: "0:00:17.084",
              },
            ],
          },
          {
            id: 46,
            name: "boy",
            referenceId: "person/male child/child/boy",
            language: "en-US",
            instances: [
              {
                confidence: 0.9149,
                adjustedStart: "0:00:17.084",
                adjustedEnd: "0:00:19.219",
                start: "0:00:17.084",
                end: "0:00:19.219",
              },
              {
                confidence: 0.9421,
                adjustedStart: "0:01:04.064",
                adjustedEnd: "0:01:05.132",
                start: "0:01:04.064",
                end: "0:01:05.132",
              },
            ],
          },
          {
            id: 47,
            name: "hair",
            referenceId: "body covering/hair",
            language: "en-US",
            instances: [
              {
                confidence: 0.8657,
                adjustedStart: "0:00:18.151",
                adjustedEnd: "0:00:19.219",
                start: "0:00:18.151",
                end: "0:00:19.219",
              },
              {
                confidence: 0.8891,
                adjustedStart: "0:00:20.287",
                adjustedEnd: "0:00:21.355",
                start: "0:00:20.287",
                end: "0:00:21.355",
              },
              {
                confidence: 0.9319,
                adjustedStart: "0:01:09.403",
                adjustedEnd: "0:01:10.471",
                start: "0:01:09.403",
                end: "0:01:10.471",
              },
            ],
          },
          {
            id: 48,
            name: "book",
            referenceId: "creation/product/book",
            language: "en-US",
            instances: [
              {
                confidence: 0.9596,
                adjustedStart: "0:00:19.219",
                adjustedEnd: "0:00:20.287",
                start: "0:00:19.219",
                end: "0:00:20.287",
              },
              {
                confidence: 0.9068,
                adjustedStart: "0:00:35.235",
                adjustedEnd: "0:00:36.303",
                start: "0:00:35.235",
                end: "0:00:36.303",
              },
            ],
          },
          {
            id: 49,
            name: "portrait",
            language: "en-US",
            instances: [
              {
                confidence: 0.9832,
                adjustedStart: "0:00:20.287",
                adjustedEnd: "0:00:21.355",
                start: "0:00:20.287",
                end: "0:00:21.355",
              },
              {
                confidence: 0.901,
                adjustedStart: "0:00:38.438",
                adjustedEnd: "0:00:39.506",
                start: "0:00:38.438",
                end: "0:00:39.506",
              },
              {
                confidence: 0.9186,
                adjustedStart: "0:00:45.913",
                adjustedEnd: "0:00:48.048",
                start: "0:00:45.913",
                end: "0:00:48.048",
              },
              {
                confidence: 0.9246,
                adjustedStart: "0:01:09.403",
                adjustedEnd: "0:01:10.471",
                start: "0:01:09.403",
                end: "0:01:10.471",
              },
            ],
          },
          {
            id: 50,
            name: "old",
            referenceId: "time/past/old",
            language: "en-US",
            instances: [
              {
                confidence: 0.8562,
                adjustedStart: "0:00:20.287",
                adjustedEnd: "0:00:21.355",
                start: "0:00:20.287",
                end: "0:00:21.355",
              },
            ],
          },
          {
            id: 51,
            name: "vintage",
            language: "en-US",
            instances: [
              {
                confidence: 0.8484,
                adjustedStart: "0:00:20.287",
                adjustedEnd: "0:00:21.355",
                start: "0:00:20.287",
                end: "0:00:21.355",
              },
            ],
          },
          {
            id: 52,
            name: "sign",
            referenceId: "communication/indication/sign",
            language: "en-US",
            instances: [
              {
                confidence: 0.9288,
                adjustedStart: "0:00:22.422",
                adjustedEnd: "0:00:23.49",
                start: "0:00:22.422",
                end: "0:00:23.49",
              },
            ],
          },
          {
            id: 53,
            name: "sitting",
            referenceId: "action/sitting",
            language: "en-US",
            instances: [
              {
                confidence: 0.8637,
                adjustedStart: "0:00:23.49",
                adjustedEnd: "0:00:27.761",
                start: "0:00:23.49",
                end: "0:00:27.761",
              },
              {
                confidence: 0.8623,
                adjustedStart: "0:01:06.199",
                adjustedEnd: "0:01:08.335",
                start: "0:01:06.199",
                end: "0:01:08.335",
              },
            ],
          },
          {
            id: 54,
            name: "computer",
            referenceId: "device/machine/computer",
            language: "en-US",
            instances: [
              {
                confidence: 0.9398,
                adjustedStart: "0:00:26.693",
                adjustedEnd: "0:00:27.761",
                start: "0:00:26.693",
                end: "0:00:27.761",
              },
              {
                confidence: 0.956,
                adjustedStart: "0:00:28.829",
                adjustedEnd: "0:00:29.897",
                start: "0:00:28.829",
                end: "0:00:29.897",
              },
              {
                confidence: 0.9555,
                adjustedStart: "0:01:06.199",
                adjustedEnd: "0:01:08.335",
                start: "0:01:06.199",
                end: "0:01:08.335",
              },
            ],
          },
          {
            id: 55,
            name: "laptop",
            referenceId: "computer/portable computer/laptop",
            language: "en-US",
            instances: [
              {
                confidence: 0.9184,
                adjustedStart: "0:00:26.693",
                adjustedEnd: "0:00:27.761",
                start: "0:00:26.693",
                end: "0:00:27.761",
              },
            ],
          },
          {
            id: 56,
            name: "electronics",
            language: "en-US",
            instances: [
              {
                confidence: 0.996,
                adjustedStart: "0:00:28.829",
                adjustedEnd: "0:00:29.897",
                start: "0:00:28.829",
                end: "0:00:29.897",
              },
            ],
          },
          {
            id: 57,
            name: "display",
            referenceId: "communication/demonstration/display",
            language: "en-US",
            instances: [
              {
                confidence: 0.993,
                adjustedStart: "0:00:28.829",
                adjustedEnd: "0:00:29.897",
                start: "0:00:28.829",
                end: "0:00:29.897",
              },
            ],
          },
          {
            id: 58,
            name: "screen",
            referenceId: "electronics/screen",
            language: "en-US",
            instances: [
              {
                confidence: 0.9842,
                adjustedStart: "0:00:28.829",
                adjustedEnd: "0:00:29.897",
                start: "0:00:28.829",
                end: "0:00:29.897",
              },
            ],
          },
          {
            id: 59,
            name: "monitor",
            referenceId: "monitor",
            language: "en-US",
            instances: [
              {
                confidence: 0.9423,
                adjustedStart: "0:00:28.829",
                adjustedEnd: "0:00:29.897",
                start: "0:00:28.829",
                end: "0:00:29.897",
              },
            ],
          },
          {
            id: 60,
            name: "grass",
            referenceId: "plant/herb/grass",
            language: "en-US",
            instances: [
              {
                confidence: 0.935,
                adjustedStart: "0:00:28.829",
                adjustedEnd: "0:00:29.897",
                start: "0:00:28.829",
                end: "0:00:29.897",
              },
            ],
          },
          {
            id: 61,
            name: "computer monitor",
            language: "en-US",
            instances: [
              {
                confidence: 0.85,
                adjustedStart: "0:00:28.829",
                adjustedEnd: "0:00:29.897",
                start: "0:00:28.829",
                end: "0:00:29.897",
              },
            ],
          },
          {
            id: 62,
            name: "television",
            referenceId: "television",
            language: "en-US",
            instances: [
              {
                confidence: 0.8299,
                adjustedStart: "0:00:28.829",
                adjustedEnd: "0:00:29.897",
                start: "0:00:28.829",
                end: "0:00:29.897",
              },
            ],
          },
          {
            id: 63,
            name: "crowd",
            referenceId: "group/gathering/crowd",
            language: "en-US",
            instances: [
              {
                confidence: 0.9154,
                adjustedStart: "0:00:29.897",
                adjustedEnd: "0:00:32.032",
                start: "0:00:29.897",
                end: "0:00:32.032",
              },
            ],
          },
          {
            id: 64,
            name: "face",
            referenceId: "body part/face",
            language: "en-US",
            instances: [
              {
                confidence: 0.9898,
                adjustedStart: "0:00:38.438",
                adjustedEnd: "0:00:39.506",
                start: "0:00:38.438",
                end: "0:00:39.506",
              },
              {
                confidence: 0.9978,
                adjustedStart: "0:01:09.403",
                adjustedEnd: "0:01:10.471",
                start: "0:01:09.403",
                end: "0:01:10.471",
              },
            ],
          },
          {
            id: 65,
            name: "headshot",
            language: "en-US",
            instances: [
              {
                confidence: 0.9855,
                adjustedStart: "0:00:38.438",
                adjustedEnd: "0:00:39.506",
                start: "0:00:38.438",
                end: "0:00:39.506",
              },
            ],
          },
          {
            id: 66,
            name: "forehead",
            language: "en-US",
            instances: [
              {
                confidence: 0.9339,
                adjustedStart: "0:00:38.438",
                adjustedEnd: "0:00:40.574",
                start: "0:00:38.438",
                end: "0:00:40.574",
              },
              {
                confidence: 0.9261,
                adjustedStart: "0:00:45.913",
                adjustedEnd: "0:00:48.048",
                start: "0:00:45.913",
                end: "0:00:48.048",
              },
              {
                confidence: 0.9341,
                adjustedStart: "0:01:09.403",
                adjustedEnd: "0:01:10.471",
                start: "0:01:09.403",
                end: "0:01:10.471",
              },
              {
                confidence: 0.9132,
                adjustedStart: "0:01:12.606",
                adjustedEnd: "0:01:13.674",
                start: "0:01:12.606",
                end: "0:01:13.674",
              },
            ],
          },
          {
            id: 67,
            name: "chin",
            language: "en-US",
            instances: [
              {
                confidence: 0.9364,
                adjustedStart: "0:00:38.438",
                adjustedEnd: "0:00:39.506",
                start: "0:00:38.438",
                end: "0:00:39.506",
              },
              {
                confidence: 0.9298,
                adjustedStart: "0:00:45.913",
                adjustedEnd: "0:00:48.048",
                start: "0:00:45.913",
                end: "0:00:48.048",
              },
              {
                confidence: 0.9073,
                adjustedStart: "0:01:09.403",
                adjustedEnd: "0:01:10.471",
                start: "0:01:09.403",
                end: "0:01:10.471",
              },
            ],
          },
          {
            id: 68,
            name: "cheek",
            language: "en-US",
            instances: [
              {
                confidence: 0.9024,
                adjustedStart: "0:00:46.98",
                adjustedEnd: "0:00:48.048",
                start: "0:00:46.98",
                end: "0:00:48.048",
              },
              {
                confidence: 0.9051,
                adjustedStart: "0:01:09.403",
                adjustedEnd: "0:01:10.471",
                start: "0:01:09.403",
                end: "0:01:10.471",
              },
            ],
          },
          {
            id: 69,
            name: "formal wear",
            language: "en-US",
            instances: [
              {
                confidence: 0.9087,
                adjustedStart: "0:00:48.048",
                adjustedEnd: "0:00:51.251",
                start: "0:00:48.048",
                end: "0:00:51.251",
              },
              {
                confidence: 0.9143,
                adjustedStart: "0:01:10.47",
                adjustedEnd: "0:01:13.674",
                start: "0:01:10.47",
                end: "0:01:13.674",
              },
              {
                confidence: 0.9063,
                adjustedStart: "0:01:16.877",
                adjustedEnd: "0:01:17.945",
                start: "0:01:16.877",
                end: "0:01:17.945",
              },
            ],
          },
          {
            id: 70,
            name: "white-collar worker",
            language: "en-US",
            instances: [
              {
                confidence: 0.9116,
                adjustedStart: "0:00:49.116",
                adjustedEnd: "0:00:51.251",
                start: "0:00:49.116",
                end: "0:00:51.251",
              },
              {
                confidence: 0.9057,
                adjustedStart: "0:01:10.47",
                adjustedEnd: "0:01:11.538",
                start: "0:01:10.47",
                end: "0:01:11.538",
              },
              {
                confidence: 0.9143,
                adjustedStart: "0:01:12.606",
                adjustedEnd: "0:01:13.674",
                start: "0:01:12.606",
                end: "0:01:13.674",
              },
            ],
          },
          {
            id: 71,
            name: "businessperson",
            language: "en-US",
            instances: [
              {
                confidence: 0.9021,
                adjustedStart: "0:00:49.116",
                adjustedEnd: "0:00:51.251",
                start: "0:00:49.116",
                end: "0:00:51.251",
              },
              {
                confidence: 0.9114,
                adjustedStart: "0:01:10.47",
                adjustedEnd: "0:01:11.538",
                start: "0:01:10.47",
                end: "0:01:11.538",
              },
            ],
          },
          {
            id: 72,
            name: "business",
            referenceId: "enterprise/business",
            language: "en-US",
            instances: [
              {
                confidence: 0.9196,
                adjustedStart: "0:00:50.183",
                adjustedEnd: "0:00:51.251",
                start: "0:00:50.183",
                end: "0:00:51.251",
              },
              {
                confidence: 0.9292,
                adjustedStart: "0:01:10.47",
                adjustedEnd: "0:01:11.538",
                start: "0:01:10.47",
                end: "0:01:11.538",
              },
              {
                confidence: 0.9208,
                adjustedStart: "0:01:12.606",
                adjustedEnd: "0:01:13.674",
                start: "0:01:12.606",
                end: "0:01:13.674",
              },
            ],
          },
          {
            id: 73,
            name: "ground",
            referenceId: "land/ground",
            language: "en-US",
            instances: [
              {
                confidence: 0.8816,
                adjustedStart: "0:00:55.522",
                adjustedEnd: "0:00:56.59",
                start: "0:00:55.522",
                end: "0:00:56.59",
              },
            ],
          },
          {
            id: 74,
            name: "tree",
            referenceId: "plant/tree",
            language: "en-US",
            instances: [
              {
                confidence: 0.93,
                adjustedStart: "0:00:56.59",
                adjustedEnd: "0:00:58.726",
                start: "0:00:56.59",
                end: "0:00:58.726",
              },
              {
                confidence: 0.936,
                adjustedStart: "0:01:14.741",
                adjustedEnd: "0:01:15.809",
                start: "0:01:14.741",
                end: "0:01:15.809",
              },
              {
                confidence: 0.9445,
                adjustedStart: "0:01:17.945",
                adjustedEnd: "0:01:20.08",
                start: "0:01:17.945",
                end: "0:01:20.08",
              },
            ],
          },
          {
            id: 75,
            name: "party",
            referenceId: "group/organization/party",
            language: "en-US",
            instances: [
              {
                confidence: 0.9105,
                adjustedStart: "0:00:58.725",
                adjustedEnd: "0:00:59.793",
                start: "0:00:58.725",
                end: "0:00:59.793",
              },
            ],
          },
          {
            id: 76,
            name: "child",
            referenceId: "person/child",
            language: "en-US",
            instances: [
              {
                confidence: 0.9928,
                adjustedStart: "0:00:59.793",
                adjustedEnd: "0:01:00.861",
                start: "0:00:59.793",
                end: "0:01:00.861",
              },
              {
                confidence: 0.9916,
                adjustedStart: "0:01:04.064",
                adjustedEnd: "0:01:05.132",
                start: "0:01:04.064",
                end: "0:01:05.132",
              },
            ],
          },
          {
            id: 77,
            name: "baby",
            referenceId: "person/baby",
            language: "en-US",
            instances: [
              {
                confidence: 0.9096,
                adjustedStart: "0:00:59.793",
                adjustedEnd: "0:01:00.861",
                start: "0:00:59.793",
                end: "0:01:00.861",
              },
            ],
          },
          {
            id: 78,
            name: "aid",
            language: "en-US",
            instances: [
              {
                confidence: 0.9914,
                adjustedStart: "0:01:04.064",
                adjustedEnd: "0:01:05.132",
                start: "0:01:04.064",
                end: "0:01:05.132",
              },
            ],
          },
          {
            id: 79,
            name: "furniture",
            referenceId: "furniture",
            language: "en-US",
            instances: [
              {
                confidence: 0.9605,
                adjustedStart: "0:01:06.199",
                adjustedEnd: "0:01:08.335",
                start: "0:01:06.199",
                end: "0:01:08.335",
              },
            ],
          },
          {
            id: 80,
            name: "floor",
            referenceId: "surface/floor",
            language: "en-US",
            instances: [
              {
                confidence: 0.9419,
                adjustedStart: "0:01:06.199",
                adjustedEnd: "0:01:08.335",
                start: "0:01:06.199",
                end: "0:01:08.335",
              },
            ],
          },
          {
            id: 81,
            name: "girl",
            referenceId: "person/child/girl",
            language: "en-US",
            instances: [
              {
                confidence: 0.9015,
                adjustedStart: "0:01:13.674",
                adjustedEnd: "0:01:15.809",
                start: "0:01:13.674",
                end: "0:01:15.809",
              },
              {
                confidence: 0.8909,
                adjustedStart: "0:01:17.945",
                adjustedEnd: "0:01:20.08",
                start: "0:01:17.945",
                end: "0:01:20.08",
              },
            ],
          },
          {
            id: 82,
            name: "vector",
            language: "en-US",
            instances: [
              {
                confidence: 0.9878,
                adjustedStart: "0:01:21.148",
                adjustedEnd: "0:01:22.216",
                start: "0:01:21.148",
                end: "0:01:22.216",
              },
            ],
          },
          {
            id: 83,
            name: "colorfulness",
            language: "en-US",
            instances: [
              {
                confidence: 0.9525,
                adjustedStart: "0:01:21.148",
                adjustedEnd: "0:01:22.216",
                start: "0:01:21.148",
                end: "0:01:22.216",
              },
            ],
          },
          {
            id: 84,
            name: "graphic design",
            language: "en-US",
            instances: [
              {
                confidence: 0.9405,
                adjustedStart: "0:01:21.148",
                adjustedEnd: "0:01:22.216",
                start: "0:01:21.148",
                end: "0:01:22.216",
              },
              {
                confidence: 0.9114,
                adjustedStart: "0:01:24.351",
                adjustedEnd: "0:01:25.419",
                start: "0:01:24.351",
                end: "0:01:25.419",
              },
            ],
          },
          {
            id: 85,
            name: "dark",
            referenceId: "dark",
            language: "en-US",
            instances: [
              {
                confidence: 0.9882,
                adjustedStart: "0:01:26.486",
                adjustedEnd: "0:01:26.519",
                start: "0:01:26.486",
                end: "0:01:26.519",
              },
            ],
          },
          {
            id: 86,
            name: "moon",
            language: "en-US",
            instances: [
              {
                confidence: 0.9608,
                adjustedStart: "0:01:26.486",
                adjustedEnd: "0:01:26.519",
                start: "0:01:26.486",
                end: "0:01:26.519",
              },
            ],
          },
          {
            id: 87,
            name: "darkness",
            language: "en-US",
            instances: [
              {
                confidence: 0.9171,
                adjustedStart: "0:01:26.486",
                adjustedEnd: "0:01:26.519",
                start: "0:01:26.486",
                end: "0:01:26.519",
              },
            ],
          },
        ],
        scenes: [
          {
            id: 1,
            instances: [
              {
                adjustedStart: "0:00:00",
                adjustedEnd: "0:00:04.771",
                start: "0:00:00",
                end: "0:00:04.771",
              },
            ],
          },
          {
            id: 2,
            instances: [
              {
                adjustedStart: "0:00:04.771",
                adjustedEnd: "0:00:14.648",
                start: "0:00:04.771",
                end: "0:00:14.648",
              },
            ],
          },
          {
            id: 3,
            instances: [
              {
                adjustedStart: "0:00:14.648",
                adjustedEnd: "0:00:21.955",
                start: "0:00:14.648",
                end: "0:00:21.955",
              },
            ],
          },
          {
            id: 4,
            instances: [
              {
                adjustedStart: "0:00:21.955",
                adjustedEnd: "0:00:23.123",
                start: "0:00:21.955",
                end: "0:00:23.123",
              },
            ],
          },
          {
            id: 5,
            instances: [
              {
                adjustedStart: "0:00:23.123",
                adjustedEnd: "0:00:27.928",
                start: "0:00:23.123",
                end: "0:00:27.928",
              },
            ],
          },
          {
            id: 6,
            instances: [
              {
                adjustedStart: "0:00:27.928",
                adjustedEnd: "0:00:33.133",
                start: "0:00:27.928",
                end: "0:00:33.133",
              },
            ],
          },
          {
            id: 7,
            instances: [
              {
                adjustedStart: "0:00:33.133",
                adjustedEnd: "0:00:38.539",
                start: "0:00:33.133",
                end: "0:00:38.539",
              },
            ],
          },
          {
            id: 8,
            instances: [
              {
                adjustedStart: "0:00:38.539",
                adjustedEnd: "0:00:45.579",
                start: "0:00:38.539",
                end: "0:00:45.579",
              },
            ],
          },
          {
            id: 9,
            instances: [
              {
                adjustedStart: "0:00:45.579",
                adjustedEnd: "0:00:53.253",
                start: "0:00:45.579",
                end: "0:00:53.253",
              },
            ],
          },
          {
            id: 10,
            instances: [
              {
                adjustedStart: "0:00:53.253",
                adjustedEnd: "0:01:17.778",
                start: "0:00:53.253",
                end: "0:01:17.778",
              },
            ],
          },
          {
            id: 11,
            instances: [
              {
                adjustedStart: "0:01:17.778",
                adjustedEnd: "0:01:26.386",
                start: "0:01:17.778",
                end: "0:01:26.386",
              },
            ],
          },
        ],
        shots: [
          {
            id: 1,
            keyFrames: [
              {
                id: 1,
                instances: [
                  {
                    thumbnailId: "edaec86f-8cb0-45c1-87e9-bf52961c4362",
                    adjustedStart: "0:00:00.2",
                    adjustedEnd: "0:00:00.233",
                    start: "0:00:00.2",
                    end: "0:00:00.233",
                  },
                ],
              },
              {
                id: 2,
                instances: [
                  {
                    thumbnailId: "67671051-7ded-4241-b177-79e3a60d9474",
                    adjustedStart: "0:00:01.735",
                    adjustedEnd: "0:00:01.768",
                    start: "0:00:01.735",
                    end: "0:00:01.768",
                  },
                ],
              },
              {
                id: 3,
                instances: [
                  {
                    thumbnailId: "35e45d21-d0b2-4c10-8873-2013ad891307",
                    adjustedStart: "0:00:02.202",
                    adjustedEnd: "0:00:02.235",
                    start: "0:00:02.202",
                    end: "0:00:02.235",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:00",
                adjustedEnd: "0:00:02.569",
                start: "0:00:00",
                end: "0:00:02.569",
              },
            ],
          },
          {
            id: 2,
            keyFrames: [
              {
                id: 4,
                instances: [
                  {
                    thumbnailId: "a47eb1b3-2001-41d6-ab70-b11ad2af72eb",
                    adjustedStart: "0:00:02.569",
                    adjustedEnd: "0:00:02.602",
                    start: "0:00:02.569",
                    end: "0:00:02.602",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:02.569",
                adjustedEnd: "0:00:04.771",
                start: "0:00:02.569",
                end: "0:00:04.771",
              },
            ],
          },
          {
            id: 3,
            tags: ["CloseUp", "LeftFace"],
            keyFrames: [
              {
                id: 5,
                instances: [
                  {
                    thumbnailId: "1a50fc41-db5a-4b13-8621-51c81c0e04e8",
                    adjustedStart: "0:00:04.771",
                    adjustedEnd: "0:00:04.804",
                    start: "0:00:04.771",
                    end: "0:00:04.804",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:04.771",
                adjustedEnd: "0:00:06.44",
                start: "0:00:04.771",
                end: "0:00:06.44",
              },
            ],
          },
          {
            id: 4,
            keyFrames: [
              {
                id: 6,
                instances: [
                  {
                    thumbnailId: "0130c7ff-070f-449b-bcbf-6c002ded085f",
                    adjustedStart: "0:00:06.44",
                    adjustedEnd: "0:00:06.473",
                    start: "0:00:06.44",
                    end: "0:00:06.473",
                  },
                ],
              },
              {
                id: 7,
                instances: [
                  {
                    thumbnailId: "5045b01c-30c5-44bb-af56-b861feeda5d5",
                    adjustedStart: "0:00:06.907",
                    adjustedEnd: "0:00:06.94",
                    start: "0:00:06.907",
                    end: "0:00:06.94",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:06.44",
                adjustedEnd: "0:00:07.574",
                start: "0:00:06.44",
                end: "0:00:07.574",
              },
            ],
          },
          {
            id: 5,
            keyFrames: [
              {
                id: 8,
                instances: [
                  {
                    thumbnailId: "11a9aaf0-5a29-4691-8b4e-f8e2cb0f44e9",
                    adjustedStart: "0:00:07.574",
                    adjustedEnd: "0:00:07.607",
                    start: "0:00:07.574",
                    end: "0:00:07.607",
                  },
                ],
              },
              {
                id: 9,
                instances: [
                  {
                    thumbnailId: "ecf6b9a2-8280-4536-84f0-7259f44c151e",
                    adjustedStart: "0:00:07.875",
                    adjustedEnd: "0:00:07.908",
                    start: "0:00:07.875",
                    end: "0:00:07.908",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:07.574",
                adjustedEnd: "0:00:08.709",
                start: "0:00:07.574",
                end: "0:00:08.709",
              },
            ],
          },
          {
            id: 6,
            tags: ["Wide", "Medium", "Outdoor"],
            keyFrames: [
              {
                id: 10,
                instances: [
                  {
                    thumbnailId: "2e35be08-47eb-44fc-ba7e-33aaea1dbdc0",
                    adjustedStart: "0:00:08.709",
                    adjustedEnd: "0:00:08.742",
                    start: "0:00:08.709",
                    end: "0:00:08.742",
                  },
                ],
              },
              {
                id: 11,
                instances: [
                  {
                    thumbnailId: "531e5445-6575-41fe-a507-a485566645f6",
                    adjustedStart: "0:00:10.177",
                    adjustedEnd: "0:00:10.21",
                    start: "0:00:10.177",
                    end: "0:00:10.21",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:08.709",
                adjustedEnd: "0:00:11.812",
                start: "0:00:08.709",
                end: "0:00:11.812",
              },
            ],
          },
          {
            id: 7,
            tags: ["Outdoor", "CloseUp", "CenterFace"],
            keyFrames: [
              {
                id: 12,
                instances: [
                  {
                    thumbnailId: "ab2f7513-4170-48d7-91b7-21a293a2aaf5",
                    adjustedStart: "0:00:11.812",
                    adjustedEnd: "0:00:11.845",
                    start: "0:00:11.812",
                    end: "0:00:11.845",
                  },
                ],
              },
              {
                id: 13,
                instances: [
                  {
                    thumbnailId: "79dbe635-d0b2-492a-8d85-3c8768c338d0",
                    adjustedStart: "0:00:12.579",
                    adjustedEnd: "0:00:12.612",
                    start: "0:00:12.579",
                    end: "0:00:12.612",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:11.812",
                adjustedEnd: "0:00:14.648",
                start: "0:00:11.812",
                end: "0:00:14.648",
              },
            ],
          },
          {
            id: 8,
            tags: ["Indoor"],
            keyFrames: [
              {
                id: 14,
                instances: [
                  {
                    thumbnailId: "56565cd8-51ff-4db3-a4ae-293fe5946eb8",
                    adjustedStart: "0:00:14.648",
                    adjustedEnd: "0:00:14.681",
                    start: "0:00:14.648",
                    end: "0:00:14.681",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:14.648",
                adjustedEnd: "0:00:16.45",
                start: "0:00:14.648",
                end: "0:00:16.45",
              },
            ],
          },
          {
            id: 9,
            tags: ["CloseUp", "Medium", "Indoor"],
            keyFrames: [
              {
                id: 15,
                instances: [
                  {
                    thumbnailId: "778eeaf8-41df-4b56-9376-5d29ded1af1b",
                    adjustedStart: "0:00:16.45",
                    adjustedEnd: "0:00:16.483",
                    start: "0:00:16.45",
                    end: "0:00:16.483",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:16.45",
                adjustedEnd: "0:00:18.585",
                start: "0:00:16.45",
                end: "0:00:18.585",
              },
            ],
          },
          {
            id: 10,
            tags: ["CloseUp", "Medium", "Indoor"],
            keyFrames: [
              {
                id: 16,
                instances: [
                  {
                    thumbnailId: "7b369e65-ce9b-4d80-8adb-82b2a25841a5",
                    adjustedStart: "0:00:18.585",
                    adjustedEnd: "0:00:18.618",
                    start: "0:00:18.585",
                    end: "0:00:18.618",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:18.585",
                adjustedEnd: "0:00:19.887",
                start: "0:00:18.585",
                end: "0:00:19.887",
              },
            ],
          },
          {
            id: 11,
            tags: ["ExtremeCloseUp", "CenterFace", "Indoor"],
            keyFrames: [
              {
                id: 17,
                instances: [
                  {
                    thumbnailId: "b8e40d7d-303e-41c1-9cc7-ed33546282a1",
                    adjustedStart: "0:00:19.887",
                    adjustedEnd: "0:00:19.92",
                    start: "0:00:19.887",
                    end: "0:00:19.92",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:19.887",
                adjustedEnd: "0:00:20.787",
                start: "0:00:19.887",
                end: "0:00:20.787",
              },
            ],
          },
          {
            id: 12,
            keyFrames: [
              {
                id: 18,
                instances: [
                  {
                    thumbnailId: "f6f69ae3-a93f-4212-b2fc-1470e53a3690",
                    adjustedStart: "0:00:20.787",
                    adjustedEnd: "0:00:20.82",
                    start: "0:00:20.787",
                    end: "0:00:20.82",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:20.787",
                adjustedEnd: "0:00:21.955",
                start: "0:00:20.787",
                end: "0:00:21.955",
              },
            ],
          },
          {
            id: 13,
            tags: ["Indoor"],
            keyFrames: [
              {
                id: 19,
                instances: [
                  {
                    thumbnailId: "9000db89-1d3c-44b7-9b50-bfd4c3a45848",
                    adjustedStart: "0:00:21.955",
                    adjustedEnd: "0:00:21.988",
                    start: "0:00:21.955",
                    end: "0:00:21.988",
                  },
                ],
              },
              {
                id: 20,
                instances: [
                  {
                    thumbnailId: "a0d29fcb-8420-451b-b9c6-364f5ef6f8d6",
                    adjustedStart: "0:00:22.389",
                    adjustedEnd: "0:00:22.422",
                    start: "0:00:22.389",
                    end: "0:00:22.422",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:21.955",
                adjustedEnd: "0:00:23.123",
                start: "0:00:21.955",
                end: "0:00:23.123",
              },
            ],
          },
          {
            id: 14,
            tags: ["Medium", "Wide", "Outdoor"],
            keyFrames: [
              {
                id: 21,
                instances: [
                  {
                    thumbnailId: "1977bb30-b8cc-434b-9b02-24f312241447",
                    adjustedStart: "0:00:23.123",
                    adjustedEnd: "0:00:23.156",
                    start: "0:00:23.123",
                    end: "0:00:23.156",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:23.123",
                adjustedEnd: "0:00:26.093",
                start: "0:00:23.123",
                end: "0:00:26.093",
              },
            ],
          },
          {
            id: 15,
            tags: ["Indoor", "Medium", "CenterFace"],
            keyFrames: [
              {
                id: 22,
                instances: [
                  {
                    thumbnailId: "f14c24ee-f5b0-4cc0-8961-562904cefbbd",
                    adjustedStart: "0:00:26.093",
                    adjustedEnd: "0:00:26.126",
                    start: "0:00:26.093",
                    end: "0:00:26.126",
                  },
                ],
              },
              {
                id: 23,
                instances: [
                  {
                    thumbnailId: "4f8e62e8-47c8-4eaa-8f20-44347f258895",
                    adjustedStart: "0:00:26.56",
                    adjustedEnd: "0:00:26.593",
                    start: "0:00:26.56",
                    end: "0:00:26.593",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:26.093",
                adjustedEnd: "0:00:27.928",
                start: "0:00:26.093",
                end: "0:00:27.928",
              },
            ],
          },
          {
            id: 16,
            tags: ["Medium", "RightFace", "Indoor"],
            keyFrames: [
              {
                id: 24,
                instances: [
                  {
                    thumbnailId: "2446261e-188d-4fe7-902a-4c40e2de4a5f",
                    adjustedStart: "0:00:27.928",
                    adjustedEnd: "0:00:27.961",
                    start: "0:00:27.928",
                    end: "0:00:27.961",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:27.928",
                adjustedEnd: "0:00:28.962",
                start: "0:00:27.928",
                end: "0:00:28.962",
              },
            ],
          },
          {
            id: 17,
            tags: ["CloseUp", "RightFace"],
            keyFrames: [
              {
                id: 25,
                instances: [
                  {
                    thumbnailId: "88a37113-c2b3-4e63-97ab-78e4d9511762",
                    adjustedStart: "0:00:28.962",
                    adjustedEnd: "0:00:28.995",
                    start: "0:00:28.962",
                    end: "0:00:28.995",
                  },
                ],
              },
              {
                id: 26,
                instances: [
                  {
                    thumbnailId: "3316f635-e1b7-447f-a667-d032cc77436d",
                    adjustedStart: "0:00:29.696",
                    adjustedEnd: "0:00:29.729",
                    start: "0:00:29.696",
                    end: "0:00:29.729",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:28.962",
                adjustedEnd: "0:00:31.465",
                start: "0:00:28.962",
                end: "0:00:31.465",
              },
            ],
          },
          {
            id: 18,
            keyFrames: [
              {
                id: 27,
                instances: [
                  {
                    thumbnailId: "59863ee6-eb0a-4764-9201-e4aef1431c93",
                    adjustedStart: "0:00:31.465",
                    adjustedEnd: "0:00:31.498",
                    start: "0:00:31.465",
                    end: "0:00:31.498",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:31.465",
                adjustedEnd: "0:00:33.133",
                start: "0:00:31.465",
                end: "0:00:33.133",
              },
            ],
          },
          {
            id: 19,
            tags: ["ExtremeCloseUp", "CenterFace", "Indoor"],
            keyFrames: [
              {
                id: 28,
                instances: [
                  {
                    thumbnailId: "be5f6445-2cca-4d99-b249-347f4e33c8f5",
                    adjustedStart: "0:00:33.133",
                    adjustedEnd: "0:00:33.166",
                    start: "0:00:33.133",
                    end: "0:00:33.166",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:33.133",
                adjustedEnd: "0:00:34.801",
                start: "0:00:33.133",
                end: "0:00:34.801",
              },
            ],
          },
          {
            id: 20,
            tags: ["ExtremeCloseUp", "CenterFace", "Indoor"],
            keyFrames: [
              {
                id: 29,
                instances: [
                  {
                    thumbnailId: "063739b4-558e-41a2-8552-d782c49fec73",
                    adjustedStart: "0:00:34.801",
                    adjustedEnd: "0:00:34.834",
                    start: "0:00:34.801",
                    end: "0:00:34.834",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:34.801",
                adjustedEnd: "0:00:36.803",
                start: "0:00:34.801",
                end: "0:00:36.803",
              },
            ],
          },
          {
            id: 21,
            tags: ["ExtremeCloseUp", "CenterFace", "Indoor"],
            keyFrames: [
              {
                id: 30,
                instances: [
                  {
                    thumbnailId: "059eb47c-b65a-42e9-bbf4-c4cdc027e588",
                    adjustedStart: "0:00:36.803",
                    adjustedEnd: "0:00:36.836",
                    start: "0:00:36.803",
                    end: "0:00:36.836",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:36.803",
                adjustedEnd: "0:00:38.539",
                start: "0:00:36.803",
                end: "0:00:38.539",
              },
            ],
          },
          {
            id: 22,
            tags: ["ExtremeCloseUp", "CenterFace"],
            keyFrames: [
              {
                id: 31,
                instances: [
                  {
                    thumbnailId: "d20c6b46-469c-4b9d-96c7-d6c1750029ce",
                    adjustedStart: "0:00:38.539",
                    adjustedEnd: "0:00:38.572",
                    start: "0:00:38.539",
                    end: "0:00:38.572",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:38.539",
                adjustedEnd: "0:00:39.873",
                start: "0:00:38.539",
                end: "0:00:39.873",
              },
            ],
          },
          {
            id: 23,
            tags: ["CloseUp", "CenterFace"],
            keyFrames: [
              {
                id: 32,
                instances: [
                  {
                    thumbnailId: "d12fced2-3902-4390-aa4c-a54360c66ee3",
                    adjustedStart: "0:00:39.873",
                    adjustedEnd: "0:00:39.906",
                    start: "0:00:39.873",
                    end: "0:00:39.906",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:39.873",
                adjustedEnd: "0:00:43.21",
                start: "0:00:39.873",
                end: "0:00:43.21",
              },
            ],
          },
          {
            id: 24,
            tags: ["Indoor", "Medium", "CenterFace"],
            keyFrames: [
              {
                id: 33,
                instances: [
                  {
                    thumbnailId: "bd4f7168-847c-4999-89db-e72012258f92",
                    adjustedStart: "0:00:43.21",
                    adjustedEnd: "0:00:43.243",
                    start: "0:00:43.21",
                    end: "0:00:43.243",
                  },
                ],
              },
              {
                id: 34,
                instances: [
                  {
                    thumbnailId: "13372873-3754-4fa8-ab7a-c101801f46f4",
                    adjustedStart: "0:00:44.077",
                    adjustedEnd: "0:00:44.11",
                    start: "0:00:44.077",
                    end: "0:00:44.11",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:43.21",
                adjustedEnd: "0:00:45.579",
                start: "0:00:43.21",
                end: "0:00:45.579",
              },
            ],
          },
          {
            id: 25,
            tags: ["ExtremeCloseUp", "CenterFace"],
            keyFrames: [
              {
                id: 35,
                instances: [
                  {
                    thumbnailId: "cb2e7091-2c96-48bf-8bf7-6cbaa90caaf6",
                    adjustedStart: "0:00:45.579",
                    adjustedEnd: "0:00:45.612",
                    start: "0:00:45.579",
                    end: "0:00:45.612",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:45.579",
                adjustedEnd: "0:00:47.981",
                start: "0:00:45.579",
                end: "0:00:47.981",
              },
            ],
          },
          {
            id: 26,
            tags: ["CloseUp", "LeftFace"],
            keyFrames: [
              {
                id: 36,
                instances: [
                  {
                    thumbnailId: "2b58bdef-004c-45f9-987f-89135390921c",
                    adjustedStart: "0:00:47.981",
                    adjustedEnd: "0:00:48.014",
                    start: "0:00:47.981",
                    end: "0:00:48.014",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:47.981",
                adjustedEnd: "0:00:51.118",
                start: "0:00:47.981",
                end: "0:00:51.118",
              },
            ],
          },
          {
            id: 27,
            tags: ["CloseUp", "CenterFace", "Medium", "Indoor"],
            keyFrames: [
              {
                id: 37,
                instances: [
                  {
                    thumbnailId: "693138e7-564d-45ca-af1e-2fa96febd581",
                    adjustedStart: "0:00:51.118",
                    adjustedEnd: "0:00:51.151",
                    start: "0:00:51.118",
                    end: "0:00:51.151",
                  },
                ],
              },
              {
                id: 38,
                instances: [
                  {
                    thumbnailId: "8c8745be-355d-4f4d-bf7b-095eec1501ce",
                    adjustedStart: "0:00:51.852",
                    adjustedEnd: "0:00:51.885",
                    start: "0:00:51.852",
                    end: "0:00:51.885",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:51.118",
                adjustedEnd: "0:00:53.253",
                start: "0:00:51.118",
                end: "0:00:53.253",
              },
            ],
          },
          {
            id: 28,
            tags: ["CloseUp", "RightFace", "Indoor"],
            keyFrames: [
              {
                id: 39,
                instances: [
                  {
                    thumbnailId: "5dcd7534-0a4b-43a2-935e-54163b992bb3",
                    adjustedStart: "0:00:53.253",
                    adjustedEnd: "0:00:53.286",
                    start: "0:00:53.253",
                    end: "0:00:53.286",
                  },
                ],
              },
              {
                id: 40,
                instances: [
                  {
                    thumbnailId: "e555f649-4441-482b-bc30-174c52775735",
                    adjustedStart: "0:00:54.121",
                    adjustedEnd: "0:00:54.154",
                    start: "0:00:54.121",
                    end: "0:00:54.154",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:53.253",
                adjustedEnd: "0:00:58.091",
                start: "0:00:53.253",
                end: "0:00:58.091",
              },
            ],
          },
          {
            id: 29,
            tags: ["Medium", "CenterFace", "Outdoor"],
            keyFrames: [
              {
                id: 41,
                instances: [
                  {
                    thumbnailId: "d2da91f7-6435-44f4-9c0b-cfe5db8de94c",
                    adjustedStart: "0:00:58.091",
                    adjustedEnd: "0:00:58.124",
                    start: "0:00:58.091",
                    end: "0:00:58.124",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:00:58.091",
                adjustedEnd: "0:01:00.827",
                start: "0:00:58.091",
                end: "0:01:00.827",
              },
            ],
          },
          {
            id: 30,
            tags: ["CloseUp", "Medium", "Indoor"],
            keyFrames: [
              {
                id: 42,
                instances: [
                  {
                    thumbnailId: "72a08d37-818a-4277-aa73-c7d394acea21",
                    adjustedStart: "0:01:00.827",
                    adjustedEnd: "0:01:00.86",
                    start: "0:01:00.827",
                    end: "0:01:00.86",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:00.827",
                adjustedEnd: "0:01:02.062",
                start: "0:01:00.827",
                end: "0:01:02.062",
              },
            ],
          },
          {
            id: 31,
            tags: ["Medium", "Indoor"],
            keyFrames: [
              {
                id: 43,
                instances: [
                  {
                    thumbnailId: "ba0c2e3e-943d-43c7-91b1-8facc806055a",
                    adjustedStart: "0:01:02.062",
                    adjustedEnd: "0:01:02.095",
                    start: "0:01:02.062",
                    end: "0:01:02.095",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:02.062",
                adjustedEnd: "0:01:03.63",
                start: "0:01:02.062",
                end: "0:01:03.63",
              },
            ],
          },
          {
            id: 32,
            keyFrames: [
              {
                id: 44,
                instances: [
                  {
                    thumbnailId: "85a99454-b10d-4997-8b8a-14f4ff9e5da9",
                    adjustedStart: "0:01:03.63",
                    adjustedEnd: "0:01:03.663",
                    start: "0:01:03.63",
                    end: "0:01:03.663",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:03.63",
                adjustedEnd: "0:01:05.098",
                start: "0:01:03.63",
                end: "0:01:05.098",
              },
            ],
          },
          {
            id: 33,
            tags: ["Medium", "Indoor"],
            keyFrames: [
              {
                id: 45,
                instances: [
                  {
                    thumbnailId: "3cc7ef1a-bf7a-4fbc-af49-dd1a0631b16b",
                    adjustedStart: "0:01:05.098",
                    adjustedEnd: "0:01:05.131",
                    start: "0:01:05.098",
                    end: "0:01:05.131",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:05.098",
                adjustedEnd: "0:01:06.099",
                start: "0:01:05.098",
                end: "0:01:06.099",
              },
            ],
          },
          {
            id: 34,
            tags: ["Outdoor"],
            keyFrames: [
              {
                id: 46,
                instances: [
                  {
                    thumbnailId: "e8e3eae4-fb8f-4650-841c-e8b7f392baf9",
                    adjustedStart: "0:01:06.099",
                    adjustedEnd: "0:01:06.132",
                    start: "0:01:06.099",
                    end: "0:01:06.132",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:06.099",
                adjustedEnd: "0:01:07.935",
                start: "0:01:06.099",
                end: "0:01:07.935",
              },
            ],
          },
          {
            id: 35,
            tags: ["Medium", "Indoor"],
            keyFrames: [
              {
                id: 47,
                instances: [
                  {
                    thumbnailId: "de09d610-9ccb-4ac3-8525-30e31de7f47a",
                    adjustedStart: "0:01:07.935",
                    adjustedEnd: "0:01:07.968",
                    start: "0:01:07.935",
                    end: "0:01:07.968",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:07.935",
                adjustedEnd: "0:01:09.303",
                start: "0:01:07.935",
                end: "0:01:09.303",
              },
            ],
          },
          {
            id: 36,
            tags: ["Outdoor"],
            keyFrames: [
              {
                id: 48,
                instances: [
                  {
                    thumbnailId: "2a8206b8-7bb4-409a-8c5b-aefe21203708",
                    adjustedStart: "0:01:09.303",
                    adjustedEnd: "0:01:09.336",
                    start: "0:01:09.303",
                    end: "0:01:09.336",
                  },
                ],
              },
              {
                id: 49,
                instances: [
                  {
                    thumbnailId: "4885424d-5c7f-4a7d-9845-eb65472cc816",
                    adjustedStart: "0:01:09.903",
                    adjustedEnd: "0:01:09.936",
                    start: "0:01:09.903",
                    end: "0:01:09.936",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:09.303",
                adjustedEnd: "0:01:11.772",
                start: "0:01:09.303",
                end: "0:01:11.772",
              },
            ],
          },
          {
            id: 37,
            tags: ["Medium", "Outdoor", "ExtremeCloseUp"],
            keyFrames: [
              {
                id: 50,
                instances: [
                  {
                    thumbnailId: "6a3ac5bc-7ecf-46cc-be7e-5173b82223df",
                    adjustedStart: "0:01:11.772",
                    adjustedEnd: "0:01:11.805",
                    start: "0:01:11.772",
                    end: "0:01:11.805",
                  },
                ],
              },
              {
                id: 51,
                instances: [
                  {
                    thumbnailId: "1b97a235-32de-4dfd-934e-13c25c68fe0c",
                    adjustedStart: "0:01:12.573",
                    adjustedEnd: "0:01:12.606",
                    start: "0:01:12.573",
                    end: "0:01:12.606",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:11.772",
                adjustedEnd: "0:01:13.073",
                start: "0:01:11.772",
                end: "0:01:13.073",
              },
            ],
          },
          {
            id: 38,
            tags: ["CloseUp", "Indoor", "Medium", "Outdoor"],
            keyFrames: [
              {
                id: 52,
                instances: [
                  {
                    thumbnailId: "ab37d3f0-87cc-44f3-a34d-f489755e7544",
                    adjustedStart: "0:01:13.073",
                    adjustedEnd: "0:01:13.106",
                    start: "0:01:13.073",
                    end: "0:01:13.106",
                  },
                ],
              },
              {
                id: 53,
                instances: [
                  {
                    thumbnailId: "f578e340-cf87-4ba0-8a85-e961fdfb1496",
                    adjustedStart: "0:01:13.84",
                    adjustedEnd: "0:01:13.873",
                    start: "0:01:13.84",
                    end: "0:01:13.873",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:13.073",
                adjustedEnd: "0:01:15.342",
                start: "0:01:13.073",
                end: "0:01:15.342",
              },
            ],
          },
          {
            id: 39,
            tags: ["Medium", "CloseUp", "Outdoor", "Indoor"],
            keyFrames: [
              {
                id: 54,
                instances: [
                  {
                    thumbnailId: "7260e337-6fd4-4168-9344-d8c3fc50bd4b",
                    adjustedStart: "0:01:15.342",
                    adjustedEnd: "0:01:15.375",
                    start: "0:01:15.342",
                    end: "0:01:15.375",
                  },
                ],
              },
              {
                id: 55,
                instances: [
                  {
                    thumbnailId: "e9586d9e-77df-4808-906c-cbf2e2385a99",
                    adjustedStart: "0:01:16.143",
                    adjustedEnd: "0:01:16.176",
                    start: "0:01:16.143",
                    end: "0:01:16.176",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:15.342",
                adjustedEnd: "0:01:17.778",
                start: "0:01:15.342",
                end: "0:01:17.778",
              },
            ],
          },
          {
            id: 40,
            tags: ["CloseUp", "Medium", "Indoor"],
            keyFrames: [
              {
                id: 56,
                instances: [
                  {
                    thumbnailId: "130f602f-f7a2-4afe-a610-3af17710cac3",
                    adjustedStart: "0:01:17.778",
                    adjustedEnd: "0:01:17.811",
                    start: "0:01:17.778",
                    end: "0:01:17.811",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:17.778",
                adjustedEnd: "0:01:21.481",
                start: "0:01:17.778",
                end: "0:01:21.481",
              },
            ],
          },
          {
            id: 41,
            keyFrames: [
              {
                id: 57,
                instances: [
                  {
                    thumbnailId: "c3038d06-9d1d-4cfa-b8e9-7a037d8f57d0",
                    adjustedStart: "0:01:21.481",
                    adjustedEnd: "0:01:21.514",
                    start: "0:01:21.481",
                    end: "0:01:21.514",
                  },
                ],
              },
              {
                id: 58,
                instances: [
                  {
                    thumbnailId: "4e872308-a3cb-45bd-853a-21912b697797",
                    adjustedStart: "0:01:22.182",
                    adjustedEnd: "0:01:22.215",
                    start: "0:01:22.182",
                    end: "0:01:22.215",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:21.481",
                adjustedEnd: "0:01:26.353",
                start: "0:01:21.481",
                end: "0:01:26.353",
              },
            ],
          },
          {
            id: 42,
            keyFrames: [
              {
                id: 59,
                instances: [
                  {
                    thumbnailId: "6992eafb-c15d-4d59-ad24-1dbbdf7801ef",
                    adjustedStart: "0:01:26.353",
                    adjustedEnd: "0:01:26.386",
                    start: "0:01:26.353",
                    end: "0:01:26.386",
                  },
                ],
              },
            ],
            instances: [
              {
                adjustedStart: "0:01:26.353",
                adjustedEnd: "0:01:26.386",
                start: "0:01:26.353",
                end: "0:01:26.386",
              },
            ],
          },
        ],
        brands: [
          {
            id: 1,
            referenceType: "Wiki",
            name: "Microsoft",
            referenceId: "Microsoft",
            referenceUrl: "http://en.wikipedia.org/wiki/Microsoft",
            description:
              "Microsoft Corporation /ˈmaɪkrəˌsɒft, -roʊ-, -ˌsɔːft/ (commonly referred to as Microsoft) is an American multinational technology company headquartered in Redmond, Washington, that develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services.",
            tags: [],
            confidence: 1,
            isCustom: false,
            instances: [
              {
                brandType: "Transcript",
                instanceSource: "Transcript",
                adjustedStart: "0:00:16.79",
                adjustedEnd: "0:00:22.39",
                start: "0:00:16.79",
                end: "0:00:22.39",
              },
              {
                brandType: "Transcript",
                instanceSource: "Transcript",
                adjustedStart: "0:00:53.08",
                adjustedEnd: "0:00:59.14",
                start: "0:00:53.08",
                end: "0:00:59.14",
              },
              {
                brandType: "Ocr",
                instanceSource: "Ocr",
                adjustedStart: "0:00:21.955",
                adjustedEnd: "0:00:22.422",
                start: "0:00:21.955",
                end: "0:00:22.422",
              },
            ],
          },
        ],
        namedPeople: [
          {
            id: 1,
            name: "Bill Gates",
            referenceId: "Bill_Gates",
            referenceUrl: "https://en.wikipedia.org/wiki/Bill_Gates",
            description:
              "Bill Gates has been popular for being the co-founder of Microsoft one of the biggest and successful companies, and also for being the wealthiest person in the world from 1995 to 2009. Bill Gates has been married to Melinda Gates since 1994, they have 3 children.",
            tags: [],
            confidence: 0.5462,
            isCustom: false,
            instances: [
              {
                instanceSource: "Ocr",
                adjustedStart: "0:01:15.676",
                adjustedEnd: "0:01:16.143",
                start: "0:01:15.676",
                end: "0:01:16.143",
              },
              {
                instanceSource: "Ocr",
                adjustedStart: "0:01:22.683",
                adjustedEnd: "0:01:23.15",
                start: "0:01:22.683",
                end: "0:01:23.15",
              },
              {
                instanceSource: "Transcript",
                adjustedStart: "0:00:12.58",
                adjustedEnd: "0:00:16.79",
                start: "0:00:12.58",
                end: "0:00:16.79",
              },
              {
                instanceSource: "Transcript",
                adjustedStart: "0:00:22.39",
                adjustedEnd: "0:00:26.59",
                start: "0:00:22.39",
                end: "0:00:26.59",
              },
              {
                instanceSource: "Transcript",
                adjustedStart: "0:00:42.58",
                adjustedEnd: "0:00:49.85",
                start: "0:00:42.58",
                end: "0:00:49.85",
              },
              {
                instanceSource: "Transcript",
                adjustedStart: "0:01:10.16",
                adjustedEnd: "0:01:13.86",
                start: "0:01:10.16",
                end: "0:01:13.86",
              },
              {
                instanceSource: "Transcript",
                adjustedStart: "0:01:19.94",
                adjustedEnd: "0:01:21.46",
                start: "0:01:19.94",
                end: "0:01:21.46",
              },
            ],
          },
          {
            id: 2,
            name: "Paul Allen",
            referenceId: "Paul_Allen",
            referenceUrl: "https://en.wikipedia.org/wiki/Paul_Allen",
            description:
              "American Business Professional Paul Allen was born on 21st January, 1953 in Seattle, U.S. and passed away on 15th Oct 2018 Seattle, Washington, U.S. aged 65. He is most remembered for Co-founder of Microsoft Chairman of Vulcan Inc., Investor. His zodiac sign is Aquarius.\r\n\r\nPaul Allen is a member of the following lists: 2018 deaths, Businesspeople from King County, Washington and Deaths from cancer in Washington (state).",
            tags: [],
            confidence: 0.4609,
            isCustom: false,
            instances: [
              {
                instanceSource: "Transcript",
                adjustedStart: "0:00:22.39",
                adjustedEnd: "0:00:26.59",
                start: "0:00:22.39",
                end: "0:00:26.59",
              },
            ],
          },
          {
            id: 3,
            name: "Melinda Gates",
            referenceId: "Melinda_Gates",
            referenceUrl: "https://en.wikipedia.org/wiki/Melinda_Gates",
            description:
              "Co-chair of the Bill & Melinda Gates Foundation, businesswoman, and mother. Dedicated to helping all people lead healthy, productive lives.",
            tags: [],
            confidence: 0.3123,
            isCustom: false,
            instances: [
              {
                instanceSource: "Transcript",
                adjustedStart: "0:00:59.14",
                adjustedEnd: "0:01:01.56",
                start: "0:00:59.14",
                end: "0:01:01.56",
              },
            ],
          },
        ],
        sentiments: [
          {
            id: 1,
            averageScore: 0.5,
            sentimentType: "Neutral",
            instances: [
              {
                adjustedStart: "0:00:00",
                adjustedEnd: "0:01:06.32",
                start: "0:00:00",
                end: "0:01:06.32",
              },
              {
                adjustedStart: "0:01:08.98",
                adjustedEnd: "0:01:27.37",
                start: "0:01:08.98",
                end: "0:01:27.37",
              },
            ],
          },
          {
            id: 2,
            averageScore: 0.959,
            sentimentType: "Positive",
            instances: [
              {
                adjustedStart: "0:01:06.32",
                adjustedEnd: "0:01:08.98",
                start: "0:01:06.32",
                end: "0:01:08.98",
              },
            ],
          },
        ],
        emotions: [
          {
            id: 1,
            type: "Joy",
            instances: [
              {
                confidence: 0.7266,
                adjustedStart: "0:01:06.32",
                adjustedEnd: "0:01:08.98",
                start: "0:01:06.32",
                end: "0:01:08.98",
              },
            ],
          },
        ],
        visualContentModeration: [
          {
            id: 1,
            adultScore: 0.9235,
            racyScore: 0.036,
            instances: [
              {
                adjustedStart: "0:01:02.062",
                adjustedEnd: "0:01:02.095",
                start: "0:01:02.062",
                end: "0:01:02.095",
              },
            ],
          },
        ],
        blocks: [
          {
            id: 0,
            instances: [
              {
                adjustedStart: "0:00:00",
                adjustedEnd: "0:00:34.9",
                start: "0:00:00",
                end: "0:00:34.9",
              },
            ],
          },
          {
            id: 1,
            instances: [
              {
                adjustedStart: "0:00:34.9",
                adjustedEnd: "0:01:06.32",
                start: "0:00:34.9",
                end: "0:01:06.32",
              },
            ],
          },
          {
            id: 2,
            instances: [
              {
                adjustedStart: "0:01:06.32",
                adjustedEnd: "0:01:27.37",
                start: "0:01:06.32",
                end: "0:01:27.37",
              },
            ],
          },
        ],
        framePatterns: [
          {
            id: 1,
            patternType: "RollingCredits",
            confidence: 0.1,
            instances: [
              {
                adjustedStart: "0:01:23",
                adjustedEnd: "0:01:27",
                start: "0:01:23",
                end: "0:01:27",
              },
            ],
          },
          {
            id: 2,
            patternType: "Black",
            confidence: 1,
            instances: [
              {
                adjustedStart: "0:01:26.32",
                adjustedEnd: "0:01:27.287",
                start: "0:01:26.32",
                end: "0:01:27.287",
              },
            ],
          },
        ],
        speakers: [
          {
            id: 1,
            name: "Speaker #1",
            instances: [
              {
                adjustedStart: "0:00:05.11",
                adjustedEnd: "0:00:05.58",
                start: "0:00:05.11",
                end: "0:00:05.58",
              },
            ],
          },
          {
            id: 2,
            name: "Speaker #2",
            instances: [
              {
                adjustedStart: "0:00:05.58",
                adjustedEnd: "0:00:22.39",
                start: "0:00:05.58",
                end: "0:00:22.39",
              },
              {
                adjustedStart: "0:00:26.59",
                adjustedEnd: "0:00:39.34",
                start: "0:00:26.59",
                end: "0:00:39.34",
              },
              {
                adjustedStart: "0:00:42.58",
                adjustedEnd: "0:01:08.98",
                start: "0:00:42.58",
                end: "0:01:08.98",
              },
              {
                adjustedStart: "0:01:14.23",
                adjustedEnd: "0:01:21.46",
                start: "0:01:14.23",
                end: "0:01:21.46",
              },
            ],
          },
          {
            id: 3,
            name: "Speaker #3",
            instances: [
              {
                adjustedStart: "0:00:22.39",
                adjustedEnd: "0:00:26.59",
                start: "0:00:22.39",
                end: "0:00:26.59",
              },
            ],
          },
          {
            id: 4,
            name: "Speaker #4",
            instances: [
              {
                adjustedStart: "0:00:39.34",
                adjustedEnd: "0:00:42.58",
                start: "0:00:39.34",
                end: "0:00:42.58",
              },
            ],
          },
          {
            id: 5,
            name: "Speaker #5",
            instances: [
              {
                adjustedStart: "0:01:10.16",
                adjustedEnd: "0:01:14.23",
                start: "0:01:10.16",
                end: "0:01:14.23",
              },
            ],
          },
          {
            id: 6,
            name: "Speaker #6",
            instances: [
              {
                adjustedStart: "0:01:21.46",
                adjustedEnd: "0:01:22.61",
                start: "0:01:21.46",
                end: "0:01:22.61",
              },
            ],
          },
        ],
        textualContentModeration: {
          id: 0,
          bannedWordsCount: 0,
          bannedWordsRatio: 0,
          instances: [],
        },
        statistics: {
          correspondenceCount: 8,
          speakerTalkToListenRatio: {
            "1": 0.006,
            "2": 0.827,
            "3": 0.055,
            "4": 0.042,
            "5": 0.053,
            "6": 0.015,
          },
          speakerLongestMonolog: {
            "1": 0,
            "2": 26,
            "3": 4,
            "4": 3,
            "5": 4,
            "6": 1,
          },
          speakerNumberOfFragments: {
            "1": 1,
            "2": 4,
            "3": 1,
            "4": 1,
            "5": 1,
            "6": 1,
          },
          speakerWordCount: {
            "1": 1,
            "2": 146,
            "3": 9,
            "4": 8,
            "5": 11,
            "6": 3,
          },
        },
      },
      thumbnailId: "75842d87-3c29-45a2-a00c-31b331d82e18",
      detectSourceLanguage: false,
      languageAutoDetectMode: "None",
      sourceLanguage: "en-US",
      sourceLanguages: ["en-US"],
      language: "en-US",
      languages: ["en-US"],
      indexingPreset: "DefaultWithNoiseReduction",
      linguisticModelId: "00000000-0000-0000-0000-000000000000",
      personModelId: "00000000-0000-0000-0000-000000000000",
      isAdult: false,
      publishedUrl:
        "https://rodmandev.streaming.mediaservices.windows.net/7b49e5ac-c265-4b16-9443-f17ce553d04d/25a6c225-9277-40e4-a207-5fff9925.ism/manifest(encryption=cbc)",
      publishedProxyUrl: null,
      viewToken:
        "Bearer=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiIxYjA5MzIwMS05MTQzLTQyNjEtYWJmMS05YWI5MzY5NzBiODIiLCJuYmYiOjE1OTY2OTg5NzMsImV4cCI6MTU5Njc0MjIzMywiaXNzIjoiaHR0cHM6Ly9icmVha2Rvd24ubWUiLCJhdWQiOiJCcmVha2Rvd25Vc2VyIn0.wNu844J5Y-J982RBCXJKvGxXnsbiNlwn0wH-RMtzVgQ",
    },
  ],
  videosRanges: [
    {
      videoId: "64ffdd4c11",
      range: {
        start: "0:00:00",
        end: "0:01:27.424",
      },
    },
  ],
};


function VideoIndexer(props){

  const uploadObject = {
    name: "file",
    action: "http://127.0.0.1:5000/uploader",
    onChange(info) {
      if (info.file.status !== "uploading") {
        if (info.fileList.length > 0) {
          console.log("in if");
          props.getInsights(info.fileList[0].response);
        }
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


    return (
      <Content
        className="site-layout"
        style={{ padding: "0 50px", paddingTop: 64, minHeight: 400 }}
      >
        { !props.videoInsights.insights &&
            <Upload {...uploadObject}>
            <Button style={{ marginTop: 30 }}>
              <UploadOutlined /> Click to upload a video and get useful insights
            </Button>
          </Upload>
        }
        
        {props.videoInsights.insights && (
          <Menu
            mode="inline"
            defaultSelectedKeys={[]}
            defaultOpenKeys={[]}
            style={{ height: "100%", width:"100%" ,marginTop: 30, }}
          >
            {/* video information */}
            <SubMenu
              key="video-info"
              icon={<VideoCameraFilled />}
              title="Video Information"
            >
              <Menu.Item key="1">
                {" "}
                <b>Name : </b> {props.videoInsights.insights.summarizedInsights.name}
              </Menu.Item>
              <Menu.Item key="2">
                <b>Duration : </b> {props.videoInsights.insights.summarizedInsights.duration.time}
              </Menu.Item>
            </SubMenu>

            {/* keywords */}
            <SubMenu key="keywords" icon={<FileWordFilled />} title="Keywords">
              <List
                size="large"
                bordered
                grid={{ gutter: 0, column: 3 }}
                dataSource={props.videoInsights.insights.summarizedInsights.keywords}
                renderItem={(item) => (
                  <List.Item>
                    <Menu.Item key={item.id}>{item.name}</Menu.Item>
                  </List.Item>
                )}
              />
            </SubMenu>

            {/* sentiments */}
            <SubMenu key="sentiments" icon={<MehFilled />} title="Sentiments">
              <List
                size="large"
                bordered
                grid={{ gutter: 0, column: 2 }}
                dataSource={props.videoInsights.insights.summarizedInsights.sentiments}
                renderItem={(item) => (
                  <List.Item>
                    <Menu.Item key={item.sentimentKey}>
                      {" "}
                      <b>
                        {item.sentimentKey} {" : "}
                      </b>{" "}
                      {item.appearances[0].startTime} {"   to   "}{" "}
                      {item.appearances[0].endTime}
                    </Menu.Item>
                  </List.Item>
                )}
              />
            </SubMenu>

            {/* Emotions */}
            <SubMenu key="emotions" icon={<SmileFilled />} title="Emotions">
              <List
                size="large"
                bordered
                grid={{ gutter: 0, column: 2 }}
                dataSource={props.videoInsights.insights.summarizedInsights.emotions}
                renderItem={(item) => (
                  <List.Item>
                    <Menu.Item key={item.type}>
                      {" "}
                      <b>
                        {item.type} {" : "}
                      </b>{" "}
                      {item.appearances[0].startTime} {"   to   "}{" "}
                      {item.appearances[0].endTime}
                    </Menu.Item>
                  </List.Item>
                )}
              />
            </SubMenu>

            {/* labels */}
            <SubMenu key="labels" icon={<MessageFilled />} title="Labels">
              <List
                size="large"
                bordered
                grid={{ gutter: 0, column: 2 }}
                dataSource={props.videoInsights.insights.summarizedInsights.labels}
                renderItem={(item) => (
                  <List.Item>
                    <Menu.Item key={item.name}>
                      {" "}
                      <b>
                        {item.name} {" : "}
                      </b>{" "}
                      {item.appearances[0].startTime} {"   to   "}{" "}
                      {item.appearances[0].endTime}
                    </Menu.Item>
                  </List.Item>
                )}
              />
            </SubMenu>

            {/* Frame patterns */}
            <SubMenu
              key="frame-patterns"
              icon={<LaptopOutlined />}
              title="Frame Patterns"
            >
              <List
                size="large"
                bordered
                grid={{ gutter: 0, column: 2 }}
                dataSource={props.videoInsights.insights.summarizedInsights.framePatterns}
                renderItem={(item) => (
                  <List.Item>
                    <Menu.Item key={item.id}>
                      {" "}
                      <b>
                        {item.name} {" : "}
                      </b>{" "}
                      {item.appearances[0].startTime} {"   to   "}{" "}
                      {item.appearances[0].endTime}
                    </Menu.Item>
                  </List.Item>
                )}
              />
            </SubMenu>

            {/* Brands */}
            <SubMenu key="brands" icon={<IeCircleFilled />} title="Brands">
              <List
                size="large"
                bordered
                grid={{ gutter: 0, column: 1 }}
                dataSource={props.videoInsights.insights.summarizedInsights.brands}
                renderItem={(item) => (
                  <List.Item>
                    <Menu.Item key={item.id}>
                      <div>
                        {" "}
                        <b>
                          {item.name} {" : "}
                        </b>{" "}
                      </div>

                      <div>
                        {item.appearances[0].startTime}
                        {"   to   "} {item.appearances[0].endTime}
                      </div>

                      <div>
                        {" "}
                        <a href={item.referenceUrl} target="_blank">
                          {" "}
                          {item.referenceUrl}{" "}
                        </a>
                      </div>

                      <div> {item.description} </div>
                    </Menu.Item>
                  </List.Item>
                )}
              />
            </SubMenu>

            {/* Named People */}
            <SubMenu
              key="named-people"
              icon={<UserOutlined />}
              title="Named People"
            >
              <List
                size="large"
                bordered
                grid={{ gutter: 0, column: 1 }}
                dataSource={props.videoInsights.insights.summarizedInsights.namedPeople}
                renderItem={(item) => (
                  <List.Item>
                    <Menu.Item key={item.id}>
                      <div>
                        {" "}
                        <b>
                          {item.name} {" : "}
                        </b>{" "}
                      </div>

                      <div>
                        {item.appearances[0].startTime}
                        {"   to   "} {item.appearances[0].endTime}
                      </div>

                      <div>
                        {" "}
                        <a href={item.referenceUrl} target="_blank">
                          {" "}
                          {item.referenceUrl}{" "}
                        </a>
                      </div>
                      <div> {item.description} </div>
                    </Menu.Item>
                  </List.Item>
                )}
              />
            </SubMenu>

            {/* Topics */}
            <SubMenu key="topics" icon={<IdcardFilled />} title="Topics">
              <List
                size="large"
                bordered
                grid={{ gutter: 0, column: 1 }}
                dataSource={props.videoInsights.insights.summarizedInsights.namedPeople}
                renderItem={(item) => (
                  <List.Item>
                    <Menu.Item key={item.id}>
                      <div>
                        {" "}
                        <b>
                          {item.name} {" : "}
                        </b>{" "}
                      </div>

                      <div>
                        {item.appearances[0].startTime}
                        {"   to   "} {item.appearances[0].endTime}
                      </div>

                      <div>
                        {" "}
                        <a href={item.referenceUrl} target="_blank">
                          {" "}
                          {item.referenceUrl}{" "}
                        </a>
                      </div>
                    </Menu.Item>
                  </List.Item>
                )}
              />
            </SubMenu>
          </Menu>
        )}

      </Content>
    );
}

const mapStateToProps = (state) => {
  return {
    videoInsights: state.video,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInsights: (insights) => dispatch(getInsights(insights)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndexer);
