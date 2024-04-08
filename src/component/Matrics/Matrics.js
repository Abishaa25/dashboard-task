import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'

function Matrics() {
  return (
    <Card className="m-1 p-3 flex-grow-1 shadow">
      <Card.Subtitle>New Client</Card.Subtitle>
      <Card.Text className='d-flex gap-3 py-2'><span>54</span><Badge bg="secondary">+18.5%</Badge></Card.Text>
    </Card>
  )
}

export default Matrics
