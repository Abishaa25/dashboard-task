import React from 'react'
import {Card} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';


function MeetingWidget() {
  return (
    <Card className="m-2 p-3 shadow" style={{fontSize:"smaller"}}>
    <Card.Subtitle><Icon.CircleFill className='text-primary m-1' style={{fontSize:"xx-small"}}/>
Board Meeting</Card.Subtitle>
    <Card.Text className='text-muted '>March 22 at 4:00pm</Card.Text>
    <Card.Text className='m-1'>You are invited to attend the meeting of the Board Directors</Card.Text>
  </Card>
  )
}

export default MeetingWidget
