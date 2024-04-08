import React, { useRef } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import * as Icon from 'react-bootstrap-icons';
import "./Widget.css";

function Widget(props) {
  const { value1, value2, value3 } = props.data;

  // Using useRef to get a reference to the list-options element within the current card
  const listOptionsRef = useRef(null);

  const handleClick = (e) => {
    // Toggle the class of the list-options element within the current card only
    listOptionsRef.current.classList.toggle('d-block');
  };

  const IconComponent = Icon[value1];

  return (
    <Card className="widget m-1 col-md-2 col-sm-4 flex-grow-1 shadow">
      <Card.Body className='p-1'>
        <Card.Title className='d-flex justify-content-between py-2'>
          {IconComponent && <IconComponent />}
          <Icon.ThreeDotsVertical className='list_toggle' onClick={handleClick}/>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{value2}</Card.Subtitle>
        <Card.Text>{value3}</Card.Text>      
      </Card.Body>
      <ListGroup ref={listOptionsRef} className="list-options">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Widget;
