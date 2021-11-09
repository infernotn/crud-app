import React from 'react'
import {Link} from 'react-router-dom';
import{
ListGroup,
ListGroupItem,
Button
 } from 'reactstrap'; 
 const UsersList = () => {
    return (
        <>
            <ListGroup style={{maxWidth:"80%"}} className="mt-2 m-auto d-flex justify-content-center flex-direction-column">
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
        </>
    )
}
export default UsersList;