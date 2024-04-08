import React from 'react';
import { ListGroup, Card, Row, Col } from 'react-bootstrap'; // Import Row and Col for better responsiveness
import profile from '../../profile_1.jpg';

function RecentMail() {
    return (
        <Card style={{fontSize:"small"}} className='overflow-hidden overflow-x-scroll m-1 shadow'>
            <Card.Body>
                <Card.Subtitle>Recent Emails</Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item className='d-flex align-items-center gap-3'> 
                        <img className="rounded-circle" style={{ width: "5%", minWidth: "30px" }} src={profile} alt="avatar" /> {/* Adjust width */}
                        <div style={{ flex: "1" }}>Hannah Margon</div> 
                        <div style={{ flex: "2" }}>Meeting scheduled</div> 
                        <div style={{ flex: "1" }}>12:42 pm</div> 
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center gap-3'> 
                        <img className="rounded-circle" style={{ width: "5%", minWidth: "30px" }} src={profile} alt="avatar" /> 
                        <div style={{ flex: "1" }}>Margon</div> 
                        <div style={{ flex: "2" }}>Updated on marketing campaign</div>
                        <div style={{ flex: "1" }}>12:42 pm</div> 
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center gap-3'>
                        <img className="rounded-circle" style={{ width: "5%", minWidth: "30px" }} src={profile} alt="avatar" /> 
                        <div style={{ flex: "1" }}>Ally James</div> 
                        <div style={{ flex: "2" }}>Updated on marketing campaign</div> 
                        <div style={{ flex: "1" }}>12:42 pm</div> 
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default RecentMail;
