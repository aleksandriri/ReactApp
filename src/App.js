import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Sider from './Components/Sider/Sider';
import Main from './Components/Main/Main';

const App = (props) => {
  return (
    <div className="app">
      <div className="content__wrapper">
        <Row gutter={[8, 8]}>
          <Col span={4}>
            <Sider />
          </Col>
          <Col span={20}>
            <Main />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
