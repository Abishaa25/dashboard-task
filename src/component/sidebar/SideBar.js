import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import './SideBar.css'

function SideBar() {
  return (
    <div className='bg-primary py-3'>
        <ul className='d-flex flex-column px-4 list-unstyled gap-4 text-white' style={{height:"95vh"}}>
            <li className='d-flex gap-3'><Icon.PeopleFill className='fs-4'/><span className='list-text-name'>User</span></li>
            <li className='d-flex gap-3'><Icon.GraphUpArrow className='fs-4'/><span className='list-text-name'>Analyse</span></li>
            <li className='d-flex gap-3'> <Icon.FileEarmarkFill className='fs-4'/><span className='list-text-name'>check</span></li>
            <li className='d-flex gap-3'><Icon.GridFill className='fs-4'/><span className='list-text-name'>Dashboard</span></li>
            <li className='d-flex gap-3'><Icon.GearFill className='fs-4' /><span className='list-text-name'>Settings</span></li>
            <li className='d-flex gap-3 mt-auto pb-3 '><Icon.Power className='fs-4'/><span className='list-text-name'>Logout</span></li>
        </ul>
    </div>
  )
}

export default SideBar
