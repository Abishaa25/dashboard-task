import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from '../../ProgressBar';

function Formation_card() {
  return (
    <Card className="m-2 p-3 shadow" style={{fontSize:"smaller"}}>
    <Card.Subtitle>Formation Status</Card.Subtitle>
    <Card.Text className='m-1' style={{ fontSize: "smaller" }}>In progress</Card.Text>
    <ProgressBar className="m-1" style={{ height: "5px" }}/>
    <Card.Text className='m-1 text-center'>Estimated processing</Card.Text>
    <Card.Text className='m-1 text-center'>4-5 Business Days</Card.Text>
    <Button variant="primary" size='xs'>View Status</Button>
  </Card>
  )
}

export default Formation_card