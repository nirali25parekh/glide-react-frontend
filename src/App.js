import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import React from 'react';
import './App.css';

// redux
import { Provider } from 'react-redux'
import store from './redux/store'

import { BrowserRouter } from 'react-router-dom';
import Routes from './navigation/routes'
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">

      {/* redux store provider */}
      <Provider store = {store}>
        {/* routing wrapper */}
      <BrowserRouter>
      {/* header all the pages */}
        <MyHeader />
        {/* now routes in between -> acc to url content changes */}
        <Routes />
        {/* footer all the pages */}
        <MyFooter />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
