import React from 'react';
import { Card, Col } from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  legend: {
    display: false
 },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 800 })),
      borderColor: '#374fce',
      backgroundColor: '#374fce',
      tension: 0.3,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 800 })),
      borderColor: '#894892',
      backgroundColor: '#894892',
      tension: 0.3,
    },
  ],
};

function LineChart() {
  return (
    <>
      <Card className='m-1 shadow'>
        <Card.Body>
          <Card.Subtitle className='d-flex justify-content-between '>
            <h6>New Clients</h6>
            <h6>Last 2 days vs prior week</h6>
          </Card.Subtitle>
          <div className="line-chart-container">
            <Line options={options} data={data} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default LineChart;
