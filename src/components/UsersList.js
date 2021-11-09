import React from 'react'
import {Link} from 'react-router-dom';
import{
ListGroup,
ListGroupItem,
Button
 } from 'reactstrap'; 
 const UsersList = () => {
    return (
        <div style={{ maxWidth:"60%"}} className="mt-2 m-auto n" >
            <h1   className='text-center font-weight-bold '> My team menbers </h1>
            <ListGroup >
                <ListGroupItem className="mt-2 d-flex " >
                    <strong className="ms-1"> User 1</strong>
                    <div className="ms-auto">
                        <Link to='./edit/1' className='  btn btn-warning me-1'>Edit</Link>
                        <Button color='danger' >Delete</Button>
                    </div>
                </ListGroupItem>
                <ListGroupItem className="mt-2 d-flex " >
                    <strong className="ms-1"> User 1</strong>
                    <div className="ms-auto">
                        <Link to='./edit/1' className='  btn btn-warning me-1'>Edit</Link>
                        <Button color='danger' >Delete</Button>
                    </div>
                </ListGroupItem>
           
           
               


            </ListGroup>
        </div>
    )
}
export default UsersList;