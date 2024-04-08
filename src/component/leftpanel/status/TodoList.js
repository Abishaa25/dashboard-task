import React from 'react'
import * as Icon from 'react-bootstrap-icons';

function TodoList() {
    return (
        <div className='m-3'>
            <h5>Your To-Do List</h5>
            <ul className='list-unstyled ' style={{fontSize:"small"}}>
                <li className='d-flex gap-3'><Icon.CreditCard className='fs-5 ' /><div className='d-flex flex-column '><span  className='fw-bold'>Run payroll</span><span className='fw-lighter'>Mar 4 at 6pm</span></div></li>
                <li className='d-flex gap-3'><Icon.Clock className='fs-5' /> <div className='d-flex flex-column '><span className='fw-bold'>Review time off request</span><span className='fw-lighter'>Mar 4 at 6pm</span></div></li>
                <li className='d-flex gap-3'><Icon.FileEarmarkMedical className='fs-5' /> <div className='d-flex flex-column '><span className='fw-bold'>Sign board resolution</span><span className='fw-lighter'>Mar 4 at 6pm</span></div></li>
                <li className='d-flex gap-3'><Icon.Calendar2Check className='fs-5' /> <div className='d-flex flex-column '><span className='fw-bold'>Finish onboarding Tony</span><span className='fw-lighter'>Mar 4 at 6pm</span></div></li>
            </ul>
        </div>
    )
}

export default TodoList
