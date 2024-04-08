import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Metrics from './component/Matrics/Matrics';
import * as Icon from 'react-bootstrap-icons';
import LineChart from './component/line_chart/LineChart';
import SideBar from './component/sidebar/SideBar';
import Formation_card from './component/leftpanel/status/Formation_card';
import TodoList from './component/leftpanel/status/TodoList';
import RecentMail from './component/recentmail/RecentMail';
import profile from './profile_1.jpg';
import DataWidget from './component/Widget/DataWidget';
import MeetingWidget from './component/Widget/MeetingWidget';


function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} xs={2} className="p-0 posi" style={{ height: "100vh"}}>
          <SideBar />
        </Col>

        <Col md={7} xs={10} className="px-md-2 my-2"> 
          <Row className="mx-0">
            <DataWidget />
          </Row>

          <Row className="mx-0"> 
            <Col md={3} sm={12} className="px-0"> 
              <Metrics />
              <Metrics />
            </Col>
            <Col md={9} sm={12} className="px-0">
              <LineChart />
            </Col>
          </Row>

          <RecentMail />
        </Col>

        <Col md={3} xs={12} className='py-3 bg-secondary-subtle ' style={{ height: "100%" }}>
          <div className='d-flex justify-content-around'>
            <Icon.CalculatorFill className='fs-5' />
            <div className='position-relative '><Icon.BellFill className='fs-5' /><div className='notification-dot'></div></div>
            <div className='position-relative '><Icon.ChatLeftFill className='fs-5' /><div className='notification-dot'></div></div>
            <img className="rounded-circle" style={{ width: "30px" }} src={profile} alt="avatar" />
          </div>
          <Formation_card />
          <TodoList />
          <MeetingWidget />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
